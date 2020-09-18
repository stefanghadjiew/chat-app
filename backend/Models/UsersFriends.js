const mongoose = require("mongoose");
const User = require("./Users")

const friendsSchema = new mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
            ref:"User"
    },
    friend : {
        type:String,
        required: true
    }
})

friendsSchema.pre("remove",async function(next) {
    try {
        let user = await User.findById(this.user)
        user.friends.remove(this.id)
        await user.save()
    } catch(err) {
        return next(err);
    }
})

const friends = mongoose.model("friends",friendsSchema);
module.exports = friends;