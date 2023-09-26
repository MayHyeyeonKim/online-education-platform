const express = require("express");
const router = express.Router();

const { contactUS } = require("../controllers/contact.js");

router.post("/send-email", contactUS);

module.exports = router;
