"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var avatars = [{
  src: 'images/user/user1.jpg',
  assistiveText: 'Jose Leandro',
  title: 'Jose Leandro'
}, {
  src: 'images/user/user2.jpg',
  assistiveText: 'Tahimi Leon',
  title: 'Tahimi Leon'
}, {
  src: 'images/user/user3.jpg',
  assistiveText: 'Carlos Miguel',
  title: 'Carlos Miguel'
}, {
  src: 'images/user/user4.jpg',
  assistiveText: 'Jane Doe',
  title: 'Jane Doe'
}];
describe('<AvatarGroup/>', function () {
  it('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              avatars: avatars
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