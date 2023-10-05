"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageLookupMenuItem = function () {
  function PageLookupMenuItem(rootElement) {
    (0, _classCallCheck2["default"])(this, PageLookupMenuItem);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageLookupMenuItem, [{
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.rootElement.click();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function click() {
        return _click.apply(this, arguments);
      }

      return click;
    }()
  }, {
    key: "hover",
    value: function () {
      var _hover = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var itemElement;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.rootElement.$('div[role="option"]');

              case 2:
                itemElement = _context2.sent;
                _context2.next = 5;
                return itemElement.scrollIntoView();

              case 5:
                _context2.next = 7;
                return itemElement.moveTo();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hover() {
        return _hover.apply(this, arguments);
      }

      return hover;
    }()
  }, {
    key: "isActive",
    value: function () {
      var _isActive = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.rootElement.$('[role="option"]').getAttribute('aria-selected');

              case 2:
                _context3.t0 = _context3.sent;
                return _context3.abrupt("return", _context3.t0 === 'true');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isActive() {
        return _isActive.apply(this, arguments);
      }

      return isActive;
    }()
  }, {
    key: "isVisible",
    value: function () {
      var _isVisible = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.rootElement.isDisplayedInViewport());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isVisible() {
        return _isVisible.apply(this, arguments);
      }

      return isVisible;
    }()
  }, {
    key: "waitUntilIsVisible",
    value: function () {
      var _waitUntilIsVisible = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          return _context5.abrupt("return", _this.isVisible());

                        case 1:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function waitUntilIsVisible() {
        return _waitUntilIsVisible.apply(this, arguments);
      }

      return waitUntilIsVisible;
    }()
  }]);
  return PageLookupMenuItem;
}();

module.exports = PageLookupMenuItem;