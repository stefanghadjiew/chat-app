const mongoose = require("mongoose");
const User = require("./Users");

const messageSchema = new mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
            ref:"User"
    },
    text : {
        type:String,
        required:true,
        maxlength:150
    },
    
},
{
    timestamps:true
});

messageSchema.pre("remove",async function (next) {
    try{
        let user = await User.findById(this.user);
        user.messages.remove(this.id);
        await user.save();
    } catch(err){
        return next(err)
    }
    
});

const Message = mongoose.model("Message",messageSchema);
module.exports = Message;