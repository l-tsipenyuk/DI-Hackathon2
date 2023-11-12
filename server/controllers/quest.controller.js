const { questions } = require("../config/db.js");


const getAllQuestions = (req, res) => {
    res.json(questions);
};


module.exports = {
    getAllQuestions
}