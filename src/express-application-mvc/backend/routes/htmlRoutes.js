const express = require("express");
const pages = require("../controller/htmlController");
const router = express.Router();

router.route("/about-hospital").get(pages.abouthospital);
router.route("/about-us").get(pages.aboutus);
router.route("/appointment").get(pages.appointment);
router.route("/contactUs").get(pages.contactUs);
router.route("/doctor-profile").get(pages.doctorProfile);
router.route("/doctor").get(pages.doctor);
router.route("/FAQ").get(pages.FAQ);
router.route("/hospital").get(pages.hospital);
router.route("/").get(pages.index);
router.route("/login").get(pages.login);
router.route("/query").get(pages.query);
router.route("/signup").get(pages.signup);
router.route("/Treatment").get(pages.Treatment);
router.route("/tvastra-plus").get(pages.tvastraPlus);


module.exports = router ;