const path = require("path");

let indexPage = (req,res) => {
    res.render("index");
};


module.exports = {
    indexPage : indexPage,
};