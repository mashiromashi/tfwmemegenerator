module.exports = function(app) {
  const image_controller = require("../controller/Imagecontroller");

  app.get("/images/gettemplatelist", image_controller.getAllTemplate);
};
