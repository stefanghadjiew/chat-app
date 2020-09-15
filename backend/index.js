const express = require("express");
const app = express();
const PORT = 3001;
const errorHandler = require("./errorHandler");
const authRoutes = require("./authRoutes");
const messagesRoutes = require("./messagesRoutes");
const { isUserAuthenticated,isUserAuthorized  } = require("./middleware/authentication");
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/user/:id/messages",
isUserAuthenticated,
isUserAuthorized,
messagesRoutes);

app.use(errorHandler);


app.use ((req,res,next)=> {
    let err = new Error(`404 Not Found`)
    err.status=404
    next(err)
});


app.listen(PORT , () => {
    console.log(`Server running on PORT ${PORT}`)
});