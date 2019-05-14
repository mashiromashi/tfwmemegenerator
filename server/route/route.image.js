module.exports = function(app) {
  const image_controller = require("../controller/Imagecontroller");

  app.get("/images/getimagelist", image_controller.getallImage);
};
