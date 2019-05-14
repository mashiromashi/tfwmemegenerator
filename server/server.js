const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");
const global_template_path = require("./util/path");
const fs = require("fs");
const app = express();

let publicTempDir = require("path").join(__dirname, "/burmeseTemplates");
app.use("/burmeseTemplates", express.static(publicTempDir));

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const router = express.Router();

app.use(router);
app.set("port", process.env.PORT || 3001);

require("./route/route.image")(app);

app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
