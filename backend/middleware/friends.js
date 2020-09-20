const db = require('../db')


exports.getFriends = async (req,res,next) => {
    try {
        let allFriends = await db.UserFriends.find()
        res.status(200).json(allFriends);
    } catch (err) {
        return next(err);
    }
}

exports.addFriend = async (req,res,next) => {
    try {
        let friend = await db.UserFriends.create({
            friend : req.body.friend,
            user : req.params.id
        });
        let user = await db.User.findById(req.params.id)
        user.friends.push(friend.id)
        await user.save()
        res.status(200).json(friend);
    } catch(err){
        return next(err)
    }
   
}