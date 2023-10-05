"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var data = [{
  name: 'Leandro Torres'
}, {
  name: 'JL Torres'
}, {
  name: 'Reinier'
}, {
  name: 'Sara'
}, {
  name: 'Tahimi L'
}, {
  name: 'Saray'
}, {
  name: 'J Leandro Torres'
}, {
  name: 'Tahimi'
}, {
  name: 'Sara P'
}, {
  name: 'Leo Torres'
}, {
  name: 'Carlos Miguel'
}, {
  name: 'Juanito'
}, {
  name: 'Lola'
}, {
  name: 'Marta'
}];
describe('<TableWithBrowserPagination/>', function () {
  it('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              keyField: "name",
              data: data,
              pageSize: 5
            }));
            _context.next = 4;
            return (0, _axe["default"])(html);

          case 4:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});