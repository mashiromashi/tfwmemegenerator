const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");
const global_template_path = require("./util/path");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://");

var publicDir = require("path").join(__dirname, "/burmeseTemplates");
app.use("/burmeseTemplates", express.static(publicDir));

app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const router = express.Router();

router
  .route("templates")

  .get(function(req, res) {});

app.use(router);
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  fs.readdir(global_template_path.template_path, (err, file) => {
    templateArray.push(file.toString);
    console.log(err);
  });
  console.log(`Listening on ${app.get("port")}`);
});
