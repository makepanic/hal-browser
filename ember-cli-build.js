/*jshint node:true*/
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    // sourcemaps: {enabled: true},
  });

  app.import(`${app.bowerDirectory}/prism-duotone-dark/index.css`);
  app.import(`${app.bowerDirectory}/prism/prism.js`);
  app.import(`${app.bowerDirectory}/prism/components/prism-json.js`);
  app.import(`${app.bowerDirectory}/prism/components/prism-yaml.js`);

  app.import(app.bowerDirectory + '/url-template/lib/url-template.js');
  app.import(app.bowerDirectory + '/uri-templates/uri-templates.js');

  app.import(`${app.bowerDirectory}/semantic/dist/semantic.min.css`);
  app.import(`${app.bowerDirectory}/semantic/dist/themes/default/assets/fonts/icons.eot`, { destDir: "assets/themes/default/assets/fonts" });
  app.import(`${app.bowerDirectory}/semantic/dist/themes/default/assets/fonts/icons.svg`, { destDir: "assets/themes/default/assets/fonts" });
  app.import(`${app.bowerDirectory}/semantic/dist/themes/default/assets/fonts/icons.ttf`, { destDir: "assets/themes/default/assets/fonts" });
  app.import(`${app.bowerDirectory}/semantic/dist/themes/default/assets/fonts/icons.woff`, { destDir: "assets/themes/default/assets/fonts" });

  return app.toTree();
};
