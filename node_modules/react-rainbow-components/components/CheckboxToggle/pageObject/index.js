"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageCheckboxToggle = function () {
  function PageCheckboxToggle(rootElement) {
    (0, _classCallCheck2["default"])(this, PageCheckboxToggle);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageCheckboxToggle, [{
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).click();

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
    key: "isChecked",
    value: function () {
      var _isChecked = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('input').isSelected();

              case 2:
                return _context2.abrupt("return", !!_context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isChecked() {
        return _isChecked.apply(this, arguments);
      }

      return isChecked;
    }()
  }]);
  return PageCheckboxToggle;
}();

module.exports = PageCheckboxToggle;