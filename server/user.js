const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }

});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"1d"});
    return token;
}

const User = mongoose.model('user',userSchema);

const validate = (data)=>{
    const schema = Joi.object({
        firstName: Joi.String().required().label("First Name"),
        lastName: Joi.String().required().label("Last Name"),
        email: Joi.String().email().required().label("Email"),
        firstName: passwordComplexity().required().label('Password')
    });
    return schema.validate(data);
}

module.exports = {User,validate}