const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true ,
        useUnifiedTopology: true , 
        useCreateIndex : true 
});

module.exports.User = require("./models/Users");
module.exports.Message = require("./models/Message");
module.exports.UserFriends = require("./models/UserFriends");