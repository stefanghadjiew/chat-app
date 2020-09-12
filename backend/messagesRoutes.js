const express = require("express");
const router = express.Router();

router.post("/",createMessages);
router.get("/",getMessages);
router.delete("/:messages_id",deleteMessages)