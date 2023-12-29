"use strict";

var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require('express');
var app = express();
app.use(express["static"](_path["default"].join(__dirname, 'client', 'build')));
var PORT = process.env.HTTP_PORT || 4001;
app.get('/', function (req, res) {
  res.send("Hello world - express '/' route");
});
app.get('/flower', function (req, res) {
  res.send({
    name: 'Dandelion',
    color: 'blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT));
});
