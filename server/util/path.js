const global_template_path = {
  template_path:
    require("path").dirname(require.main.filename) + "/burmeseTemplates/"
};

module.exports = global_template_path;
