"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _MapMarker = _interopRequireDefault(require("../../MapMarker"));

describe('<GMap/>', function () {
  it('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              zoom: 10,
              latitude: -33.836538,
              longitude: 151.1279,
              header: "Title"
            }, _react["default"].createElement(_MapMarker["default"], {
              latitude: -33.941264,
              longitude: 151.2042969,
              label: "Botany Bay",
              description: " Botany, New South Wales, Australia"
            })));
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