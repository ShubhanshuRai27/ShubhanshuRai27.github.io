
let abouthospital = (req,res) => {
    res.render("about-hospital",{name:req.session.name});
};

let aboutus = (req,res) => {
    res.render("about-us",{name:req.session.name});
};

let appointment = (req,res) => {
    res.render("appointment",{name:req.session.name});
};

let contactUs = (req,res) => {
    res.render("contactUs",{name:req.session.name});
};

let doctorProfile = (req,res) => {
    res.render("doctor-profile",{name:req.session.name});
};

let doctor = (req,res) => {
    res.render("doctor",{name:req.session.name});
};

let FAQ = (req,res) => {
    res.render("FAQ",{name:req.session.name});
};

let hospital = (req,res) => {
    res.render("hospital",{name:req.session.name});
};

let login = (req,res) => {
    res.render("login",{error:req.session.error,session:req.session,errorType:req.session.errorType});
};

let index = (req,res) => {
    if(req.session.cnt){
        req.session.cnt++;
    }
    else{
        req.session.cnt = 1;
    }
    console.log(req.session.cnt,req.session.name);
    res.render("index",{error:req.session.error,name:req.session.name, session:req.session, errorType:req.session.errorType, cnt:req.session.cnt});
};


let query = (req,res) => {
    res.render("query",{name:req.session.name});
};

let signup = (req,res) => {
    res.render("signup",{name:req.session.name});
};

let Treatment = (req,res) => {
    res.render("Treatment",{name:req.session.name});
};

let tvastraPlus = (req,res) => {
    res.render("tvastra-plus",{name:req.session.name});
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