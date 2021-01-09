"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = _interopRequireDefault(require("../controllers"));

var _middlewares = _interopRequireDefault(require("../middlewares"));

var taskRouter = new _express.Router();
taskRouter.post("/create", _middlewares["default"], _controllers["default"].createTask).get("/tasks/:id", _controllers["default"].getOneTask).get("/tasks", _controllers["default"].getAllTasks)["delete"]("/tasks/:id", _controllers["default"].deleteTask).put("/tasks/:id", _middlewares["default"], _controllers["default"].editTask);
var _default = taskRouter;
exports["default"] = _default;