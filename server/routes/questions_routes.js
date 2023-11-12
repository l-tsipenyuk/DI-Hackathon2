const express = require("express");

const {
    getAllQuestions
} = require("../controllers/quest.controller.js");

const router = express.Router();

router.get("/questions", getAllQuestions);

module.exports = router;