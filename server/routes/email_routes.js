const express = require("express");

const {
    subscribeEmail
} = require("../controllers/email.contoller.js");

const router = express.Router();

router.post("/subscribe", subscribeEmail);

module.exports = router;