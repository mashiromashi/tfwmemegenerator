const fs = require("fs");
const global_template = require("../util/path");

exports.getallImage = (req, res) => {
  fs.readdir(global_template.template_path, (error, files) => {
    console.log(files);
    if (error) res.send("Error");
    else res.send(files);
  });
};
