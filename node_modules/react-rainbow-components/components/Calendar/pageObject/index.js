"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var PageSingleCalendar = require('./singleCalendar');

var PageDoubleCalendar = require('./doubleCalendar');

function PageCalendar(_x) {
  return _PageCalendar.apply(this, arguments);
}

function _PageCalendar() {
  _PageCalendar = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(rootElement) {
    var type;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return $(rootElement).getAttribute('data-calendar-type');

          case 2:
            type = _context.sent;

            if (!(type === 'double')) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", new PageDoubleCalendar(rootElement));

          case 5:
            return _context.abrupt("return", new PageSingleCalendar(rootElement));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _PageCalendar.apply(this, arguments);
}

module.exports = PageCalendar;