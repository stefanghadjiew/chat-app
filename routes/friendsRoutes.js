const express = require('express');
const router = express.Router({mergeParams:true});
const {getFriends,addFriend } = require("../middleware/friends");


router.get("/",getFriends);
router.post("/",addFriend);


module.exports = router;