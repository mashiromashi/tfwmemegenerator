const fs = require("fs");
const templateFolder = "./burmeseTemplates/";

fs.readdir(templateFolder, (err, files) => {
  files.forEach(file => {
    console.log(file); //use those files and return it as an REST API.
  });
});
