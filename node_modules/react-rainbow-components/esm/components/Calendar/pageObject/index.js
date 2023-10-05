import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageSingleCalendar = require('./singleCalendar');

var PageDoubleCalendar = require('./doubleCalendar');

function PageCalendar(_x) {
  return _PageCalendar.apply(this, arguments);
}

function _PageCalendar() {
  _PageCalendar = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(rootElement) {
    var type;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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