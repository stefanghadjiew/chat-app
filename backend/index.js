const express = require("express");
const app = express();
const PORT = 3001;
const errorHandler = require("./errorHandler");
const authRoutes = require("./authRoutes");
const messagesRoutes = require("./messagesRoutes");
const { isUserAuthenticated,isUserAuthorized  } = require("./middleware/authentication");
const cors = require("cors");
const db = require("./db");
const Message = require("./models/Message");
const friends = require("./models/UsersFriends");


app.use(express.json()); 
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/user/:id/messages",
isUserAuthenticated,
isUserAuthorized,
messagesRoutes);

app.get("/api/all",isUserAuthenticated,async (req,res,next) => {
    try {
        let allMessages = await db.Message.find()
        .sort({createdAt : "asc"})
        .populate("user",{
            username: true
        });
        res.status(200).json(allMessages);
    } 
    catch(err) {
        return next(err)
    }
})

app.post("/api/user/:id/friends",isUserAuthenticated,isUserAuthorized,async (req,res,next) => {
    try {
        let friend = await friends.create({
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
   
})

app.get("/api/user/:id/friends/:friends_id", isUserAuthenticated,async (req,res,next) => {
    try {
        let allFriends = await db.usersFriends.find()
        res.status(200).json(allFriends);
    } catch (err) {
        return next(err);
    }
})

app.use(errorHandler);


app.use ((req,res,next)=> {
    let err = new Error(`404 Not Found`)
    err.status=404
    next(err)
});


app.listen(PORT , () => {
    console.log(`Server running on PORT ${PORT}`)
});