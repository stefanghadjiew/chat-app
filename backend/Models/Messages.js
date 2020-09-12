const mongoose = require("mongoose");
const User = require("./Users")

const messagesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"User"
    },
    text : {
        type:String,
        required:true,
        maxlength:150
    }
})

messagesSchema.pre("remove",async function (next) {
    try{
        let user = await User.findById(this.user);
        user.messages.remove(this.id);
        await user.save();
    } catch(err){
        return next(err)
    }
    
})

const Messages = mongoose.model("Messages",messagesSchema)
module.exports = Messages;