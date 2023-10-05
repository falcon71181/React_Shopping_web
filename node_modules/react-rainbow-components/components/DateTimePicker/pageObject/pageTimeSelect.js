"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageTimeSelect = function () {
  function PageTimeSelect(rootElement) {
    (0, _classCallCheck2["default"])(this, PageTimeSelect);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageTimeSelect, [{
    key: "getValue",
    value: function () {
      var _getValue = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var hour, minutes, meridian;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('input[data-id=hour]');

              case 2:
                _context.next = 4;
                return _context.sent.getValue();

              case 4:
                hour = _context.sent;
                _context.next = 7;
                return $(this.rootElement).$('input[data-id=minutes]');

              case 7:
                _context.next = 9;
                return _context.sent.getValue();

              case 9:
                minutes = _context.sent;
                _context.next = 12;
                return $(this.rootElement).$('input[aria-label="am-pm selector"]');

              case 12:
                _context.next = 14;
                return _context.sent.getValue();

              case 14:
                meridian = _context.sent;
                return _context.abrupt("return", hour && minutes && meridian ? "".concat(hour, ":").concat(minutes, " ").concat(meridian) : '');

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getValue() {
        return _getValue.apply(this, arguments);
      }

      return getValue;
    }()
  }]);
  return PageTimeSelect;
}();

module.exports = PageTimeSelect;