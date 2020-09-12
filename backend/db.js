const mongoose = require("mongoose")

const db  = mongoose.connect("mongodb://localhost/chat-app",{
        useNewUrlParser: true ,
        useUnifiedTopology: true , 
        useCreateIndex : true 
})

module.exports = db;