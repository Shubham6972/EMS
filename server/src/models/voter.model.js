const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userSchemaVoter = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    middleName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    dateOfBirth:{
        type:String,
        required:true
    },
    
    gender:{
        type:String,
        required:true
    },

    phone:{
        type:Number,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    aadharNumber:{
        type:Number,
        required:true
    },

    citizen:{
        type:String,
        required:true
    },

    birthPlace:{
        type:String,
        required:true
    },

    address: {
        type: String,
        required: true
    },

    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    confirmPassword:{
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


/****************************************Password Hashing*********************************************************/
userSchemaVoter.pre('save' ,async function(next) {
    
    if(this.isModified('password')){
        this.password =  await bcrypt.hash(this.password , 12);
        this.confirmPassword = await bcrypt.hash(this.password , 12);

    }
    next();
})

/*****************json web token***********************************/

userSchemaVoter.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id} , process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const Voter = mongoose.model('VOTER' , userSchemaVoter)

module.exports = Voter;