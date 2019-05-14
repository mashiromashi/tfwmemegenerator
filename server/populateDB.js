const fs = require("fs");
const path = require("path");
const global_template_path = require("./util/path");
const mongoose = require("mongoose");
const templateModel = require("./db/model/templateModel");
let sizeOf = require("image-size");

// geting templates' name array
let templateNameArray = fs.readdirSync(global_template_path.template_path, []);

//connect to the database
mongoose
  .connect(
    "mongodb+srv://mashi:mashi@tfwmemegenerator-database-5abza.gcp.mongodb.net/tfwmemegenerator?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to the cloud desu");
  })
  .catch(err => {
    console.log("Error connecting to mongo atlas", err);
  });

//arrays for inserting heights, width
let image_height = [];
let image_width = [];
let image_type = [];

//loop for getting image type and dimentions
for (let i = 0; i < templateNameArray.length; i++) {
  let dimentions = sizeOf(`./burmeseTemplates/` + templateNameArray[i]);
  image_width.push(dimentions.width);
  image_height.push(dimentions.height);
  image_type.push(dimentions.type);
  //console.log(image_height[i], image_type[i], image_width[i]);
}

//loop for inserting data into mongodb/tfwmemegenerator
for (let i = 0; i < templateNameArray.length; i++) {
  let idCalculation = 10000 + i;

  new templateModel({
    _id: idCalculation,
    name: templateNameArray[i].replace(".jpg", ""),
    path: `~/tfw/server/burmeseTemplates/` + templateNameArray[i],
    box_count: 2,
    width: image_width[i],
    height: image_height[i],
    file_type: image_type[i]
  }).save();
  console.log("Template inserted");
}

module.exports = populateDB;
