"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _PicklistOption = _interopRequireDefault(require("../../PicklistOption"));

describe('<Picklist/>', function () {
  it.skip('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              name: "Picklist testing a11y",
              title: "Picklist testing a11y",
              label: "Select Building",
              hideLabel: true,
              assistiveText: "Picklist",
              value: {
                name: 'option 1',
                label: 'Experimental Building'
              }
            }, _react["default"].createElement(_PicklistOption["default"], {
              name: "header",
              label: "Your Buildings",
              variant: "header"
            }), _react["default"].createElement(_PicklistOption["default"], {
              name: "option 1",
              label: "Experimental Building"
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