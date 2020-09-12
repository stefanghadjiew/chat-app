const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/chat-app",{
        useNewUrlParser: true ,
        useUnifiedTopology: true , 
        useCreateIndex : true 
})

module.exports.User = require("./models/Users")
module.exports.Messages = require("./models/Messages")