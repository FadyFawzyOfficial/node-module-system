(function (exports, require, module, __filename, __dirname) {
  console.log(__filename);
  console.log(__dirname);

  var url = "http://mylogger.io/log";

  function log(message) {
    // Send an HTTP Request
    console.log(message);
  }

  module.exports = log;

  module.exports.log = log;
  exports.log = log;

  exports = log; // module.exports
});
