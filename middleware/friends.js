const db = require('../db')

exports.getFriends = async (req,res,next) => {
    try {
        let allFriends = await db.UserFriends.find()
        let userFriends = allFriends.filter(f => f.user == req.params.id )
        res.status(200).json(userFriends);
    } catch (err) {
        return next(err);
    }
}

exports.addFriend = async (req,res,next) => {
    try {
        let friend = await db.User.findOne({username:req.body.friend})
        if (!friend) {
            return res.status(404).json({err : "User doesent exist"});
        }
        let friendData = await db.UserFriends.create({
            friend : friend.username,
            user : req.params.id
        })
        let user = await db.User.findById(req.params.id)
        user.friends.push(friendData.id)
        await user.save()
        res.status(200).json(friendData); 
    } catch(err){
        return next(err)
    }
   
}