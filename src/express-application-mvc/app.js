const path = require("path");

const express = require("express");
const ejs = require("ejs");
const app = express();

const routes = require("./backend/routes/htmlRoutes");

const logger = require("morgan");
const compression = require("compression");
const cors = require("cors");

app.use(cors());
app.use(compression());
app.use(logger("dev"));

app.set("views", __dirname+"/client/views");
app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "client")));
app.use("/",routes);

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("application running on port ",4000);
});

module.exports=app;