const db = require("../db");
const User = require("../models/Users");
const Message = require("../models/Message");

//prefix will be - api/users/:id/messages

exports.createMessages = async (req,res,next) => {
    try {
        let message = await db.Message.create({
            text:req.body.text,
            user:req.params.id
        })
        let user = await db.User.findById(req.params.id)
        user.messages.push(message.id)
        await user.save()
        let foundMessage = await db.Message.findById(message.id).populate("user",{
            username : true,
            profileImgUrl:true
        })
        res.status(200).json(foundMessage)
    } catch(err) {
        return next(err)
    }
};

//prefix will be - api/users/:id/messages/:messages_id

exports.getMessages = async (req,res,next) => {
    try {
        let foundMessage = await db.Message.findById(req.params.messages_id)
        res.status(200).json(foundMessage)
    } catch(err) {

    }
}

exports.deleteMessages = async (req,res,next) => {
    try {
        let deletedMessage = await db.Message.findById(req.params.messages_id)
        await deletedMessage.remove()
        res.status(200).json(deletedMessage)
    } catch(err) {
        return next(err)
    }
};