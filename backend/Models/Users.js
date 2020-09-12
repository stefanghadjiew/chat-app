const mongoose = require(`mongoose`)
const bcrypt = require("bcrypt");

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
    messages : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
})

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
})

const User = mongoose.model("User",userSchema);
module.exports = User;