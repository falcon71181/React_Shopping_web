"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageInternalDropdown = require('../../InternalDropdown/pageObject');

var privateGetMenu = Symbol('privateGetMenu');

var PagePicklist = function () {
  function PagePicklist(rootElement) {
    (0, _classCallCheck2["default"])(this, PagePicklist);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PagePicklist, [{
    key: "clickInput",
    value: function () {
      var _clickInput = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('input[type="text"]').click();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickInput() {
        return _clickInput.apply(this, arguments);
      }

      return clickInput;
    }()
  }, {
    key: "focusInput",
    value: function () {
      var _focusInput = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('input[type="text"]').doubleClick();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function focusInput() {
        return _focusInput.apply(this, arguments);
      }

      return focusInput;
    }()
  }, {
    key: "hasFocusInput",
    value: function () {
      var _hasFocusInput = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", $(this.rootElement).$('input[type="text"]').isFocused());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hasFocusInput() {
        return _hasFocusInput.apply(this, arguments);
      }

      return hasFocusInput;
    }()
  }, {
    key: "mouseLeaveScrollArrow",
    value: function () {
      var _mouseLeaveScrollArrow = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", $(this.rootElement).$('input[type="text"]').moveTo());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function mouseLeaveScrollArrow() {
        return _mouseLeaveScrollArrow.apply(this, arguments);
      }

      return mouseLeaveScrollArrow;
    }()
  }, {
    key: "getSelectedOptionLabel",
    value: function () {
      var _getSelectedOptionLabel = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", $(this.rootElement).$('input[type="text"]').getValue());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSelectedOptionLabel() {
        return _getSelectedOptionLabel.apply(this, arguments);
      }

      return getSelectedOptionLabel;
    }()
  }, {
    key: "isMenuOpen",
    value: function () {
      var _isMenuOpen = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(this.rootElement).$('div[role="combobox"]').getAttribute('aria-expanded');

              case 2:
                _context6.t0 = _context6.sent;
                return _context6.abrupt("return", _context6.t0 === 'true');

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function isMenuOpen() {
        return _isMenuOpen.apply(this, arguments);
      }

      return isMenuOpen;
    }()
  }, {
    key: "waitUntilOpen",
    value: function () {
      var _waitUntilOpen = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
                  return _regenerator["default"].wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          return _context7.abrupt("return", _this.isMenuOpen());

                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function waitUntilOpen() {
        return _waitUntilOpen.apply(this, arguments);
      }

      return waitUntilOpen;
    }()
  }, {
    key: privateGetMenu,
    value: function () {
      var _value = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9() {
        var menuId;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.t0 = "#";
                _context9.next = 3;
                return $(this.rootElement).$('input[type="text"]').getAttribute('aria-controls');

              case 3:
                _context9.t1 = _context9.sent;
                menuId = _context9.t0.concat.call(_context9.t0, _context9.t1);
                _context9.next = 7;
                return this.isMenuOpen();

              case 7:
                if (!_context9.sent) {
                  _context9.next = 9;
                  break;
                }

                return _context9.abrupt("return", new PageInternalDropdown(menuId));

              case 9:
                return _context9.abrupt("return", null);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  }, {
    key: "hoverScrollUpArrow",
    value: function () {
      var _hoverScrollUpArrow = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10() {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this[privateGetMenu]();

              case 2:
                return _context10.abrupt("return", _context10.sent.hoverScrollUpArrow());

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function hoverScrollUpArrow() {
        return _hoverScrollUpArrow.apply(this, arguments);
      }

      return hoverScrollUpArrow;
    }()
  }, {
    key: "hoverScrollDownArrow",
    value: function () {
      var _hoverScrollDownArrow = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this[privateGetMenu]();

              case 2:
                return _context11.abrupt("return", _context11.sent.hoverScrollDownArrow());

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function hoverScrollDownArrow() {
        return _hoverScrollDownArrow.apply(this, arguments);
      }

      return hoverScrollDownArrow;
    }()
  }, {
    key: "getOptionsLength",
    value: function () {
      var _getOptionsLength = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee12() {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this[privateGetMenu]();

              case 2:
                return _context12.abrupt("return", _context12.sent.getOptionsLength());

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getOptionsLength() {
        return _getOptionsLength.apply(this, arguments);
      }

      return getOptionsLength;
    }()
  }, {
    key: "getOption",
    value: function () {
      var _getOption = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee13(optionIndex) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this[privateGetMenu]();

              case 2:
                return _context13.abrupt("return", _context13.sent.getOption(optionIndex));

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getOption(_x) {
        return _getOption.apply(this, arguments);
      }

      return getOption;
    }()
  }, {
    key: "clickSearch",
    value: function () {
      var _clickSearch = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee14() {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this[privateGetMenu]();

              case 2:
                return _context14.abrupt("return", _context14.sent.clickSearch());

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function clickSearch() {
        return _clickSearch.apply(this, arguments);
      }

      return clickSearch;
    }()
  }]);
  return PagePicklist;
}();

module.exports = PagePicklist;