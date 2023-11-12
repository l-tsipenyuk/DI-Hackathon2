const express = require("express");

const {
    getAllQuestions, getOneQuestion, submitAnswer, getUserScore
} = require("../controllers/quest.controller.js");

const router = express.Router();

router.get("/questions", getAllQuestions);

router.get("/questions/:id", getOneQuestion);

router.post("/questions/:id/submit", submitAnswer);

router.get("/score", getUserScore);

module.exports = router;