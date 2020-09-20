const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chat-app",{
        useNewUrlParser: true ,
        useUnifiedTopology: true , 
        useCreateIndex : true 
});

module.exports.User = require("./models/Users");
module.exports.Message = require("./models/Message");
module.exports.UserFriends = require("./models/UserFriends")