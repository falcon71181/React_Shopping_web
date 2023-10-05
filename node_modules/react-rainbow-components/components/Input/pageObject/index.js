"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageInput = function () {
  function PageInput(rootElement) {
    (0, _classCallCheck2["default"])(this, PageInput);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageInput, [{
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('input').click();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function click() {
        return _click.apply(this, arguments);
      }

      return click;
    }()
  }, {
    key: "clickLabel",
    value: function () {
      var _clickLabel = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('label').click();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickLabel() {
        return _clickLabel.apply(this, arguments);
      }

      return clickLabel;
    }()
  }, {
    key: "hasFocusInput",
    value: function () {
      var _hasFocusInput = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", $(this.rootElement).$('input').isFocused());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hasFocusInput() {
        return _hasFocusInput.apply(this, arguments);
      }

      return hasFocusInput;
    }()
  }, {
    key: "setValue",
    value: function () {
      var _setValue = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(value) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$('input').setValue(value);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function setValue(_x) {
        return _setValue.apply(this, arguments);
      }

      return setValue;
    }()
  }, {
    key: "getValue",
    value: function () {
      var _getValue = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", $(this.rootElement).$('input').getValue());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getValue() {
        return _getValue.apply(this, arguments);
      }

      return getValue;
    }()
  }]);
  return PageInput;
}();

module.exports = PageInput;