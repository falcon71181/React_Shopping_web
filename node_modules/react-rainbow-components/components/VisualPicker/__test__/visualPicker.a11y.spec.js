"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _VisualPickerOption = _interopRequireDefault(require("../../VisualPickerOption"));

var _VisualPickerOptionFooter = _interopRequireDefault(require("../../VisualPickerOptionFooter"));

describe('<VisualPicker/>', function () {
  it('should be accessible when label is passed', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              label: "Our Rainbow Options",
              value: "option-1"
            }, _react["default"].createElement(_VisualPickerOption["default"], {
              name: "option-1",
              footer: _react["default"].createElement(_VisualPickerOptionFooter["default"], {
                label: "Rainbow Basic",
                description: "Complete service for teams of any size."
              })
            }, _react["default"].createElement("h3", null, "user/month")), _react["default"].createElement(_VisualPickerOption["default"], {
              name: "option-2",
              footer: _react["default"].createElement(_VisualPickerOptionFooter["default"], {
                label: "Rainbow Basic",
                description: "Everything you need to take support."
              })
            }, _react["default"].createElement("h3", null, "user/month"))));
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
  it('should be accessible when multiple option are selected', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
    var html, results;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              label: "Our Rainbow Options",
              value: ['option-1', 'option-2']
            }, _react["default"].createElement(_VisualPickerOption["default"], {
              name: "option-1",
              footer: _react["default"].createElement(_VisualPickerOptionFooter["default"], {
                label: "Rainbow Basic",
                description: "Complete service for teams of any size."
              })
            }, _react["default"].createElement("h3", null, "user/month")), _react["default"].createElement(_VisualPickerOption["default"], {
              name: "option-2",
              footer: _react["default"].createElement(_VisualPickerOptionFooter["default"], {
                label: "Rainbow Basic",
                description: "Everything you need to take support."
              })
            }, _react["default"].createElement("h3", null, "user/month"))));
            _context2.next = 4;
            return (0, _axe["default"])(html);

          case 4:
            results = _context2.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should be accessible when label or description is not passed on VisualPickerOptionFooter', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
    var html, results;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              label: "Our Rainbow Options",
              value: "option-1"
            }, _react["default"].createElement(_VisualPickerOption["default"], {
              name: "option-1",
              footer: _react["default"].createElement(_VisualPickerOptionFooter["default"], {
                description: "Complete service for teams of any size."
              })
            }, _react["default"].createElement("h3", null, "user/month")), _react["default"].createElement(_VisualPickerOption["default"], {
              name: "option-2",
              footer: _react["default"].createElement(_VisualPickerOptionFooter["default"], {
                label: "Rainbow Basic"
              })
            }, _react["default"].createElement("h3", null, "user/month"))));
            _context3.next = 4;
            return (0, _axe["default"])(html);

          case 4:
            results = _context3.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});