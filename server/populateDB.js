const fs = require("fs");
const path = require("path");
const global_template_path = require("./util/path");
const mongoClient = require("mongodb").MongoClient;
let sizeOf = require("image-size");
let url =
  "mongodb+srv://mashi:mashi@tfwmemegenerator-database-5abza.gcp.mongodb.net/test?retryWrites=true";

// geting templates' name array
//working
let templateNameArray = fs.readdirSync(global_template_path.template_path, []);
console.log(templateNameArray.length);

for (let i = 0; i < templateNameArray.length; i++) {
  let dimentions = sizeOf(`./burmeseTemplates/` + templateNameArray[i]);
}

// fs.readdir(global_template_path.template_path, function(err, template) {
//   if (err) throw err;
//   template.forEach(function(get_image_res) {
//     for (let i; i < templateNameArray.length; i++) {
//       let dimentions = sizeOf(templateNameArray[i]);
//       console.log(get_image_res);
//     }
//   });
// });

// for (let i; i < templateNameArray.length; i++) {
//   console.log(templateNameArray[i]);
// }

// let total = fs.readdir(global_template_path.template_path, function name(
//   err,
//   file
// ) {
//   file.map((f, index) => {
//     fs.readFile(global_template_path.template_path + f, function read(
//       err,
//       data
//     ) {
//       console.log(data);
//     });
//   });
// });

//getting the template properties from ./burmeseTemplates dir
// let template_properties = fs.readdir(
//   global_template_path.template_path,
//   function get_properties(err, file) {
//     if (err) throw err;
//     // file.map((properties, index) => {
//     //   fs.readFile(
//     //     global_template_path.template_path + properties,
//        // function properties(err, properties) {
//          // if (err) throw err;
//           //console.log(properties);
//         //}
//       );
//       // for (let i; i < file.length; i++) {
//       //   templateArray.push(toString(file[i]));
//       //   console.log(templateArray[i]);
//       //   if (err) throw err;
//       // }
//     });
//   }
// );
