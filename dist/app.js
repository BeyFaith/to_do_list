"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./database/models/index"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])();
var port = 8080;
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.get("/", function (req, res) {
  res.status(200).send({
    message: 'welcome to my to-do-list app :)'
  });
});
app.use("/api", _routes["default"]);
app.listen(port, function () {
  console.log("server started on ".concat(port));
});