"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _VerticalSection = _interopRequireDefault(require("../../VerticalSection"));

var _VerticalSectionOverflow = _interopRequireDefault(require("../../VerticalSectionOverflow"));

var _VerticalItem = _interopRequireDefault(require("../../VerticalItem"));

describe('<VerticalNavigation/>', function () {
  it('should be accessible when use VerticalSection', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              selectedItem: "item-1"
            }, _react["default"].createElement(_VerticalSection["default"], {
              label: "Section Label"
            }, _react["default"].createElement(_VerticalItem["default"], {
              name: "item-1",
              label: "Recent"
            }), _react["default"].createElement(_VerticalItem["default"], {
              name: "item-2",
              label: "Projects"
            }))));
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
  it('should be accessible when use VerticalSectionOverflow', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
    var html, results;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], null, _react["default"].createElement(_VerticalSectionOverflow["default"], {
              label: "Section Label"
            }, _react["default"].createElement(_VerticalItem["default"], {
              name: "item-1",
              label: "Recent"
            }), _react["default"].createElement(_VerticalItem["default"], {
              name: "item-2",
              label: "Projects"
            }))));
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