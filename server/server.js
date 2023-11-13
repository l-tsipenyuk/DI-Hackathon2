const questDB = require('./config/db');
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const quest_router = require("./routes/questions_routes.js");
const email_router = require("./routes/email_routes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/api", quest_router);
app.use("/email", email_router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on port ${process.env.PORT || 3001}`);
});


