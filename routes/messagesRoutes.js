const express = require("express");
const router = express.Router({mergeParams:true});
const {createMessages,getMessages,deleteMessages } = require("../middleware/messages");


router.post("/",createMessages);
router.get("/:messages_id",getMessages);
router.delete("/:messages_id",deleteMessages);

module.exports = router;