const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const errorHandler = require("./errorHandler");
const authRoutes = require("./routes/authRoutes");
const messagesRoutes = require("./routes/messagesRoutes");
const friendsRoutes = require('./routes/friendsRoutes');
const cors = require("cors");
const db = require("./db");
const { isUserAuthenticated,isUserAuthorized } = require("./middleware/authentication");
const path = require('path');

app.use(express.json()); 
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/user/:id/messages",
isUserAuthenticated,
isUserAuthorized,
messagesRoutes);

app.use("/api/user/:id/friends",
isUserAuthenticated,
isUserAuthorized,
friendsRoutes)

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

app.use(express.static('client/build'));
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
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