const path = require("path");

const express = require("express");
const app = express();
const ejs = require("ejs");
const routes = require("./backend/routes/htmlRoutes");

app.set("views", __dirname+"/client/views");
app.engine("html", ejs.renderFile);

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "client")));
app.use("/",routes);

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("application running on port",4000);
});

module.exports=app;