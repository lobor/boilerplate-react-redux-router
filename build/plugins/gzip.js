function MyPlugin(options) {
  // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {
  // ...
  compiler.plugin('compilation', function(compilation) {
    console.log('The compiler is starting a new compilation...');

    compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback) {
			htmlPluginData.html = htmlPluginData.html.replace('http://localhost:8080/main.js', 'main.js.gz')
      callback(null, htmlPluginData);
    });
  });

};

module.exports = MyPlugin;
