const express = require("express");

const {
    getAllQuestions, getAllLinks, getLinkByTag
} = require("../controllers/quest.controller.js");

const router = express.Router();

router.get("/questions", getAllQuestions);

router.get("/links", getAllLinks);

router.get("/links/:tag", getLinkByTag);

module.exports = router;