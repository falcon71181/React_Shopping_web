"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _Option = _interopRequireDefault(require("../../Option"));

describe('<MultiSelect/>', function () {
  it('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var value, component, html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            value = [{
              label: 'First',
              name: 'first'
            }, {
              label: 'Second',
              name: 'second'
            }];
            component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
              value: value,
              label: "Label"
            }, _react["default"].createElement(_Option["default"], {
              name: "first",
              label: "First"
            }), _react["default"].createElement(_Option["default"], {
              name: "second",
              label: "Second"
            })));
            html = component.html();
            _context.next = 6;
            return (0, _axe["default"])(html);

          case 6:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});