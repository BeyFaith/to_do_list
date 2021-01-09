"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = require("../database/models");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var taskController = /*#__PURE__*/function () {
  function taskController() {
    (0, _classCallCheck2["default"])(this, taskController);
  }

  (0, _createClass2["default"])(taskController, null, [{
    key: "createTask",
    value: function () {
      var _createTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var task, addTask;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                task = req.body.task;
                _context.next = 4;
                return _models.Task.create({
                  task: task
                });

              case 4:
                addTask = _context.sent;

                if (!addTask) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(201).send({
                  message: "Todo item created successfully",
                  tasks: addTask
                }));

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).send({
                  message: "Server error"
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function createTask(_x, _x2) {
        return _createTask.apply(this, arguments);
      }

      return createTask;
    }()
  }, {
    key: "getAllTasks",
    value: function () {
      var _getAllTasks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _getAllTasks2;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models.Task.findAll();

              case 3:
                _getAllTasks2 = _context2.sent;

                if (_getAllTasks2) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(401).send({
                  message: 'no tasks found!'
                }));

              case 6:
                return _context2.abrupt("return", res.status(200).send({
                  message: "successful",
                  tasks: _getAllTasks2
                }));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).send({
                  message: 'Server error'
                }));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function getAllTasks(_x3, _x4) {
        return _getAllTasks.apply(this, arguments);
      }

      return getAllTasks;
    }()
  }, {
    key: "getOneTask",
    value: function () {
      var _getOneTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, _getOneTask2;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = req.params.id;
                _context3.next = 4;
                return _models.Task.findOne({
                  where: {
                    id: id
                  }
                });

              case 4:
                _getOneTask2 = _context3.sent;

                if (_getOneTask2) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", res.status(404).json({
                  message: "Task does not exist"
                }));

              case 7:
                res.status(200).json({
                  message: "Success",
                  task: _getOneTask2
                });
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).send({
                  message: 'Server error'
                }));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));

      function getOneTask(_x5, _x6) {
        return _getOneTask.apply(this, arguments);
      }

      return getOneTask;
    }()
  }, {
    key: "deleteTask",
    value: function () {
      var _deleteTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;
                _context4.next = 4;
                return _models.Task.destroy({
                  where: {
                    id: id
                  }
                }).then(function (data) {
                  if (data) {
                    return res.status(202).send({
                      message: 'Todo item deleted successfully'
                    });
                  }

                  return res.status(204).send({
                    message: 'no todo item found'
                  });
                })["catch"](function () {
                  return res.status(404).send({
                    message: 'item already deleted'
                  });
                });

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(500).send({
                  message: 'Server error'
                }));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function deleteTask(_x7, _x8) {
        return _deleteTask.apply(this, arguments);
      }

      return deleteTask;
    }()
  }, {
    key: "editTask",
    value: function () {
      var _editTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, task;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params.id;
                task = req.body.task;
                _context5.next = 5;
                return _models.Task.update(_objectSpread({}, req.body), {
                  where: {
                    id: id
                  }
                }).then(function (data) {
                  if (!data) {
                    return res.status(401).send({
                      message: 'no todo item found'
                    });
                  }

                  return data.update({
                    task: task
                  }).then(function () {
                    return res.status(200).send({
                      message: 'successfully updated',
                      task: data
                    });
                  })["catch"](function () {
                    return res.status(409).send({
                      message: 'conflict',
                      err: err
                    });
                  });
                });

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(500).send({
                  message: 'Server error'
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function editTask(_x9, _x10) {
        return _editTask.apply(this, arguments);
      }

      return editTask;
    }()
  }]);
  return taskController;
}();

var _default = taskController;
exports["default"] = _default;