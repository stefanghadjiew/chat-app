const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://cheffo0o:123smokeweed123@cluster0.qus4z.mongodb.net/chat-app?retryWrites=true&w=majority",{
        useNewUrlParser: true ,
        useUnifiedTopology: true , 
        useCreateIndex : true 
});

module.exports.User = require("./models/Users");
module.exports.Message = require("./models/Message");
module.exports.UserFriends = require("./models/UserFriends");