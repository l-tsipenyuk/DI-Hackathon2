const { questions } = require("../config/db.js");
const { userScore } = require("../server.js");

const getAllQuestions = (req, res) => {
    res.json(questions);
};

const getOneQuestion = (req, res) => {
    const { id } = req.params;
    const question = questions.find((item) => item.id == id);
    if (!question) return res.status(404).json({ message: "Question not found." });
    res.json(question);
};

const submitAnswer = (req, res) => {
    const { id } = req.params; 
    const { answer } = req.body; 

    const question = questions.find((item) => item.id == id);

    if (!question) {
        return res.status(404).json({ message: "Question not found." });
    }

    if (answer === question.answer) {
        res.json({ message: "Correct answer!" });
    } else {
        res.json({ message: "Wrong answer." });
    }
};

const getUserScore = (req, res) => {
    res.json({ score: userScore }); 
};

module.exports = {
    getAllQuestions, getOneQuestion, submitAnswer, getUserScore
}