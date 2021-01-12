"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _default = function _default(req, res, next) {
  var schema = _joi["default"].object({
    task: _joi["default"].string().min(4).trim().empty().required().messages({
      "string.base": "Task should be string",
      "string.empty": "Task input can't be empty",
      "any.required": "Task is required"
    })
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error;

  if (error) return res.status(400).send({
    error: error.details[0].message
  });
  return next();
};

exports["default"] = _default;