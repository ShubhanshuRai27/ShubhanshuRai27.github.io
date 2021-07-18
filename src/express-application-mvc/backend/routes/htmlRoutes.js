const express = require("express");
const mainCtrl = require("../controller/htmlController");
const loginCtrl = require("../controller/loginController")
const router = express.Router();

router.route("/about-hospital").get(loginCtrl.ensure,mainCtrl.abouthospital);
router.route("/about-us").get(loginCtrl.ensure,mainCtrl.aboutus);
router.route("/appointment").get(loginCtrl.ensure,mainCtrl.appointment);
router.route("/contactUs").get(loginCtrl.ensure,mainCtrl.contactUs);
router.route("/doctor-profile").get(loginCtrl.ensure,mainCtrl.doctorProfile);
router.route("/doctor").getloginCtrl.ensure,(mainCtrl.doctor);
router.route("/FAQ").get(loginCtrl.ensure,mainCtrl.FAQ);
router.route("/hospital").get(mainCtrl.hospital);
router.route("/").get(mainCtrl.login);
router.route("/").post(loginCtrl.login)
router.route("/index").get(loginCtrl.ensure,mainCtrl.index);
router.route("/query").get(loginCtrl.ensure,mainCtrl.query);
router.route("/signup").get(mainCtrl.signup);
router.route("/signup").post(loginCtrl.signup);
router.route("/Treatment").get(loginCtrl.ensure,mainCtrl.Treatment);
router.route("/tvastra-plus").get(loginCtrl.ensure,mainCtrl.tvastraPlus);


module.exports = router ;