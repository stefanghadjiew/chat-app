const express = require("express");
const app = express();
const PORT = 3001;
const errorHandler = require("./errorHandler")
const router = require("./routes")

app.use(express.json());
app.use(errorHandler);
app.use(router);

app.use ((req,res,next)=> {
    let err = new Error(`404 Not Found`)
    err.status=404
    next(err)
});


app.listen(PORT , () => {
    console.log(`Server running on PORT ${PORT}`)
});