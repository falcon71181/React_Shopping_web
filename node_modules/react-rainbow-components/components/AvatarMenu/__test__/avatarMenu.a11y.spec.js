"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _MenuItem = _interopRequireDefault(require("../../MenuItem"));

var _MenuDivider = _interopRequireDefault(require("../../MenuDivider"));

describe('<AvatarMenu/>', function () {
  it('should be accessible when pass assistiveText', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              assistiveText: "some description"
            }, _react["default"].createElement(_MenuItem["default"], {
              label: "item 1"
            }), _react["default"].createElement(_MenuDivider["default"], null), _react["default"].createElement(_MenuItem["default"], {
              label: "item 2"
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
  it('should be accessible when pass title', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
    var html, results;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              title: "some description"
            }, _react["default"].createElement(_MenuItem["default"], {
              label: "item 1"
            })));
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
});