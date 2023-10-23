const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userSchemaCandidate = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },

    birthdate:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    citizen:{
        type:String,
        required:true 
    },

    birthplace:{
        type:String,
        required:true 
    },

    aadharnumber:{
        type:String,
        required:true  
    },

    partyaffiliated:{
        type:String,
        required:true  
    },

    networth:{
        type:String,
        required:true  
    },

    email:{
        type:String,
        required:true  
    },

    username:{
        type:String,
        required:true  
    },

    password:{
        type:String,
        required:true  
    },

    confirmpassword:{
        type:String,
        required:true  
    },

    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

});


userSchemaCandidate.pre('save' ,async function(next) {
    
    if(this.isModified('password')){
        this.password =  await bcrypt.hash(this.password , 12);
        this.confirmpassword = await bcrypt.hash(this.password , 12);

    }
    next();
})

userSchemaCandidate.methods.generateAuthToken = async function(){
    try{
        let token1 = jwt.sign({_id:this._id} , process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token1});
        await this.save();
        return token1;
    }catch(err){
        console.log(err);
    }
}

const Candidate = mongoose.model('CANDIDATE' , userSchemaCandidate)

module.exports = Candidate;