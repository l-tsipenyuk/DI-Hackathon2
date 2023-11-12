const { questions } = require("../config/db.js");
const { links } = require("../config/linksDB.js");


const getAllQuestions = (req, res) => {
    res.json(questions);
};

const getAllLinks = (req, res) => {
    res.json(links);
};

const getLinkByTag = (req, res) => {
    const tag = req.params.tag;

    if (!tag) {
        return res.status(400).json({ error: "Tag parameter is missing."});
    }

    const filteredLinks = links.filter(link => link.tag === tag);

    res.json(filteredLinks);
}


module.exports = {
    getAllQuestions, getAllLinks, getLinkByTag
}