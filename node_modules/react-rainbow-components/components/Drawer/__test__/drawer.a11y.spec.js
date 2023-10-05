"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _Button = _interopRequireDefault(require("../../Button"));

describe('<Drawer/>', function () {
  it('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var wrapper, html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
              isOpen: true,
              header: "Drawer a11y",
              footer: _react["default"].createElement(_Button["default"], {
                label: "button in drawer footer"
              })
            }, _react["default"].createElement("p", null, "A rainbow is a meteorological phenomenon ...")));
            html = wrapper.html();
            _context.next = 5;
            return (0, _axe["default"])(html);

          case 5:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});