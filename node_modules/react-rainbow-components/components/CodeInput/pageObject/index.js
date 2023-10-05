"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageCodeInput = function () {
  function PageCodeInput(rootElement) {
    (0, _classCallCheck2["default"])(this, PageCodeInput);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageCodeInput, [{
    key: "type",
    value: function () {
      var _type = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(key) {
        var focusedInput;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getFocusedInput();

              case 2:
                focusedInput = _context.sent;

                if (!focusedInput) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return focusedInput.setValue(key);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function type(_x) {
        return _type.apply(this, arguments);
      }

      return type;
    }()
  }, {
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var focusedInput;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getFocusedInput();

              case 2:
                focusedInput = _context2.sent;

                if (!focusedInput) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return focusedInput.click();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function click() {
        return _click.apply(this, arguments);
      }

      return click;
    }()
  }, {
    key: "clickInputAtIndex",
    value: function () {
      var _clickInputAtIndex = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(inputIndex) {
        var input;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getInputAtIndex(inputIndex);

              case 2:
                input = _context3.sent;

                if (!input) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 6;
                return input.click();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clickInputAtIndex(_x2) {
        return _clickInputAtIndex.apply(this, arguments);
      }

      return clickInputAtIndex;
    }()
  }, {
    key: "getFocusedIndex",
    value: function () {
      var _getFocusedIndex = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        var focusedInput;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getFocusedInput();

              case 2:
                focusedInput = _context4.sent;

                if (!focusedInput) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", focusedInput.index);

              case 5:
                return _context4.abrupt("return", undefined);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getFocusedIndex() {
        return _getFocusedIndex.apply(this, arguments);
      }

      return getFocusedIndex;
    }()
  }, {
    key: "getFocusedValue",
    value: function () {
      var _getFocusedValue = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        var focusedInput;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getFocusedInput();

              case 2:
                focusedInput = _context5.sent;

                if (!focusedInput) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", focusedInput.getValue());

              case 5:
                return _context5.abrupt("return", undefined);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getFocusedValue() {
        return _getFocusedValue.apply(this, arguments);
      }

      return getFocusedValue;
    }()
  }, {
    key: "getInputValueAtIndex",
    value: function () {
      var _getInputValueAtIndex = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(inputIndex) {
        var input;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getInputAtIndex(inputIndex);

              case 2:
                input = _context6.sent;

                if (!input) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", input.getValue());

              case 5:
                return _context6.abrupt("return", undefined);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getInputValueAtIndex(_x3) {
        return _getInputValueAtIndex.apply(this, arguments);
      }

      return getInputValueAtIndex;
    }()
  }, {
    key: "getFocusedInput",
    value: function () {
      var _getFocusedInput = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
        var inputs, focusedInputs;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return $(this.rootElement).$$('input');

              case 2:
                inputs = _context8.sent;
                _context8.next = 5;
                return Promise.all(inputs.map(function () {
                  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(input) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            return _context7.abrupt("return", input.isFocused());

                          case 1:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 5:
                focusedInputs = _context8.sent;
                return _context8.abrupt("return", inputs.find(function (input, index) {
                  return focusedInputs[index];
                }));

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getFocusedInput() {
        return _getFocusedInput.apply(this, arguments);
      }

      return getFocusedInput;
    }()
  }, {
    key: "getInputAtIndex",
    value: function () {
      var _getInputAtIndex = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(inputIndex) {
        var input;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return $(this.rootElement).$$('input');

              case 2:
                _context9.t0 = inputIndex;
                input = _context9.sent[_context9.t0];

                if (!input) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", input);

              case 6:
                return _context9.abrupt("return", undefined);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getInputAtIndex(_x5) {
        return _getInputAtIndex.apply(this, arguments);
      }

      return getInputAtIndex;
    }()
  }]);
  return PageCodeInput;
}();

module.exports = PageCodeInput;