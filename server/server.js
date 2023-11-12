const express = require("express");
const cors = require("cors");
require("dotenv").config();

const quest_router = require("./routes/questions_routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", quest_router);

let userScore = 0;

const { questions } = require("../server/config/db.js");

app.post("/api/test/:id/submit", (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;
    const question = questions.find((item) => item.id == id);
    if (answer === question.answer) {
        userScore++;
        res.json({ message: "Correct answer!1", userScore });
    } 
    else {
        res.json({ message: "Wrong answer.", userScore });
    }
    console.log("req", userScore)
})

app.get("/api/test/score", (req, res) => { 
    res.json({ message: "Fin", userScore });
    console.log(userScore)
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});

module.exports = {
    userScore
};