const path = require("path");


let abouthospital = (req,res) => {
    res.render("about-hospital");
};

let aboutus = (req,res) => {
    res.render("about-us");
};

let appointment = (req,res) => {
    res.render("appointment");
};

let contactUs = (req,res) => {
    res.render("contactUs");
};

let doctorProfile = (req,res) => {
    res.render("doctor-profile");
};

let doctor = (req,res) => {
    res.render("doctor");
};

let FAQ = (req,res) => {
    res.render("FAQ");
};

let hospital = (req,res) => {
    res.render("hospital");
};

let index = (req,res) => {
    res.render("index");
};

let login = (req,res) => {
    res.render("login");
};

let query = (req,res) => {
    res.render("query");
};

let signup = (req,res) => {
    res.render("signup");
};

let Treatment = (req,res) => {
    res.render("Treatment");
};

let tvastraPlus = (req,res) => {
    res.render("tvastra-plus");
};

module.exports = {
    abouthospital : abouthospital,
    aboutus : aboutus,
    appointment : appointment,
    contactUs : contactUs,
    doctorProfile : doctorProfile,
    doctor : doctor,
    FAQ : FAQ,
    hospital : hospital,
    index : index,
    login : login,
    query : query,
    signup : signup,
    Treatment : Treatment,
    tvastraPlus : tvastraPlus,
};