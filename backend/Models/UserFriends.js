const mongoose = require("mongoose");
const db = require('../db')

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
        let user = await db.User.findById(this.user)
        user.friends.remove(this.id)
        await user.save()
    } catch(err) {
        return next(err);
    }
})

const UserFriends = mongoose.model("UserFriends",friendsSchema);
module.exports = UserFriends;