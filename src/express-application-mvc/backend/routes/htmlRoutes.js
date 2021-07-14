const express = require("express");
const pages = require("../controller/htmlController");
const router = express.Router();

router.route("/").get(pages.indexPage);

module.exports = router ;