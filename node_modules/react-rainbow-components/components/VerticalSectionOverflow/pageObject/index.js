"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageVerticalSectionOverflow = function () {
  function PageVerticalSectionOverflow(rootElement) {
    (0, _classCallCheck2["default"])(this, PageVerticalSectionOverflow);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageVerticalSectionOverflow, [{
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('[data-id="vertical-overflow-button"]').click();

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
    key: "isExpanded",
    value: function () {
      var _isExpanded = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", $(this.rootElement).$('[data-id="vertical-overflow"]').isDisplayed());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isExpanded() {
        return _isExpanded.apply(this, arguments);
      }

      return isExpanded;
    }()
  }, {
    key: "waitUntilExpand",
    value: function () {
      var _waitUntilExpand = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          return _context3.abrupt("return", _this.isExpanded());

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function waitUntilExpand() {
        return _waitUntilExpand.apply(this, arguments);
      }

      return waitUntilExpand;
    }()
  }, {
    key: "waitUntilCollapse",
    value: function () {
      var _waitUntilCollapse = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        var _this2 = this;

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
                          _context5.next = 2;
                          return _this2.isExpanded();

                        case 2:
                          return _context5.abrupt("return", !_context5.sent);

                        case 3:
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

      function waitUntilCollapse() {
        return _waitUntilCollapse.apply(this, arguments);
      }

      return waitUntilCollapse;
    }()
  }, {
    key: "hasFocusButton",
    value: function () {
      var _hasFocusButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", $(this.rootElement).$('[data-id="vertical-overflow-button"]').isFocused());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function hasFocusButton() {
        return _hasFocusButton.apply(this, arguments);
      }

      return hasFocusButton;
    }()
  }]);
  return PageVerticalSectionOverflow;
}();

module.exports = PageVerticalSectionOverflow;