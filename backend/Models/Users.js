const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Message = require("./Message");

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
        unique: true
    },
    password : {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    profileImgUrl : String,
    messages : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

userSchema.pre("save",async function(next) {
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashPass = bcrypt.hashSync(this.password,10);
        this.password = hashPass;
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(userPassword,next){
    try {
        let isMatch = await bcrypt.compareSync(userPassword,this.password)
        return isMatch;
    } catch(err) {
        return next(err);
    }
};

const User = mongoose.model("User",userSchema);
module.exports = User;

