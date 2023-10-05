"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _SidebarItem = _interopRequireDefault(require("../../SidebarItem"));

describe('<Sidebar/>', function () {
  it('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              selectedItem: "User 1"
            }, _react["default"].createElement(_SidebarItem["default"], {
              icon: _react["default"].createElement("img", {
                alt: "user-1",
                src: "images/user/user1.jpg"
              }),
              name: "User 1",
              label: "User 1"
            }), _react["default"].createElement(_SidebarItem["default"], {
              icon: _react["default"].createElement("img", {
                alt: "user-1",
                src: "images/user/user2.jpg"
              }),
              name: "User 2",
              label: "User 2"
            }), _react["default"].createElement(_SidebarItem["default"], {
              icon: _react["default"].createElement("img", {
                alt: "user-1",
                src: "images/user/user3.jpg"
              }),
              name: "User 3",
              label: "User 3"
            }), _react["default"].createElement(_SidebarItem["default"], {
              icon: _react["default"].createElement("img", {
                alt: "user-1",
                src: "images/user/user4.jpg"
              }),
              name: "User 4",
              label: "User 4"
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