const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router()

require('../db/conn');

const Voter = require('../models/voter.model')

const middleware = (req,res,next) =>{
    console.log(`Hello Miidleware`);
    next();

}


router.get('/' ,(req,res)=>{
    res.send(`Hello Home`);
})

router.get('/about' , (req,res) =>{
    res.send("Hello About")
})

router.get('/news' , (req,res) =>{
    res.send("Hello news")
})

router.get('/election' , middleware , (req,res) =>{
    res.send("Hello election")
})

router.get('/candidates' , middleware , (req,res) =>{
    res.send("Hello candidates")
})

router.get('/register/voter' , (req,res) =>{
    res.send("Hello Voter")
})

router.get('/register/admin' , (req,res) =>{
    res.send("Hello Admiin")
})

router.get('/register/candidate' , (req,res) =>{
    res.send("Hello candidate")
})

router.get('/signin/voter' , (req,res) =>{
    res.send("Hello candidate")
})

/*****************************************Voter Registration**********************************************************/

router.post('/register/voter' , async(req,res)=>{
    const {firstName,middleName,lastName,dateOfBirth,gender,phone,email,aadharNumber,citizen,birthPlace,address,username,password,confirmPassword} =req.body;

    if(!firstName || !middleName || !lastName || !dateOfBirth || !gender || !phone || !email || !aadharNumber || !citizen || !birthPlace || !address || !username || !password || !confirmPassword){
        return res.status(422).json({error:"Please fill valid details"})
    }

    try{
        const voterExist = await Voter.findOne({username:username , email:email , aadharNumber:aadharNumber , phone:phone});

        if(voterExist){
            return res.status(422).json({error:"Username already exists"});
        }
        else if(password != confirmPassword){
            return res.status(422).json({error:"Password not matched"});
        }
        else{
            const voter = new Voter({firstName,middleName,lastName,dateOfBirth,gender,phone,email,aadharNumber,citizen,birthPlace,address,username,password,confirmPassword});
            
            await voter.save();
            res.status(201).json({message:"Voter Registered successfully"});

        }
    } catch(err) {
        console.log(err);
    }
});

/**********************************SignIn**********************************/

router.post('/signin/voter' , async (req,res) =>{
    try{
        const {username , password} = req.body;
        if(!username || !password){
            res.status(400).json({message:"Please fill proper credentials"});
        }

        const voterLogin = await Voter.findOne({username:username});
        if(voterLogin){
            const isMatched = await bcrypt.compare(password , voterLogin.password);

            
            
            if(!isMatched){
                res.status(400).json({error:"Fill Valid Credentials"});
                
            }
            else{
                res.json({message:"Voter SignIn Sucessful"});
            }
        }
        
        else{
            res.json({
                message:"Invalid Credentials"
            })
        }
        const token = voterLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken" , token , {
            expires:new Date(Date.now() + 2589200000),
            httpOnly:true
        })
    }catch(err){
        console.log(err);
    }
})






module.exports = router;