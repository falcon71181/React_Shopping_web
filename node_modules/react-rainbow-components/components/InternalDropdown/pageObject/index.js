"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageOption = require('../../Option/pageObject');

var privateGetMenuBoundsRect = Symbol('privateGetMenuBoundsRect');

var PageInternalDropdown = function () {
  function PageInternalDropdown(rootElement) {
    (0, _classCallCheck2["default"])(this, PageInternalDropdown);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageInternalDropdown, [{
    key: "hoverScrollUpArrow",
    value: function () {
      var _hoverScrollUpArrow = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var upArrow;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('[data-id="internal-dropdown-arrow-up"]');

              case 2:
                upArrow = _context.sent;
                _context.next = 5;
                return upArrow.scrollIntoView();

              case 5:
                return _context.abrupt("return", upArrow.moveTo());

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function hoverScrollUpArrow() {
        return _hoverScrollUpArrow.apply(this, arguments);
      }

      return hoverScrollUpArrow;
    }()
  }, {
    key: "hoverScrollDownArrow",
    value: function () {
      var _hoverScrollDownArrow = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var downArrow;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('[data-id="internal-dropdown-arrow-down"]');

              case 2:
                downArrow = _context2.sent;
                _context2.next = 5;
                return downArrow.scrollIntoView();

              case 5:
                return _context2.abrupt("return", downArrow.moveTo());

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hoverScrollDownArrow() {
        return _hoverScrollDownArrow.apply(this, arguments);
      }

      return hoverScrollDownArrow;
    }()
  }, {
    key: "getOptionsLength",
    value: function () {
      var _getOptionsLength = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$$('li[data-selected="false"]');

              case 2:
                return _context3.abrupt("return", _context3.sent.length);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getOptionsLength() {
        return _getOptionsLength.apply(this, arguments);
      }

      return getOptionsLength;
    }()
  }, {
    key: "getOption",
    value: function () {
      var _getOption = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(optionIndex) {
        var activeOptions, option;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$$('li[data-selected="false"]');

              case 2:
                activeOptions = _context4.sent;
                option = activeOptions[optionIndex];

                if (!(option && !option.error)) {
                  _context4.next = 11;
                  break;
                }

                _context4.t0 = PageOption;
                _context4.t1 = option;
                _context4.next = 9;
                return this[privateGetMenuBoundsRect]();

              case 9:
                _context4.t2 = _context4.sent;
                return _context4.abrupt("return", new _context4.t0(_context4.t1, _context4.t2));

              case 11:
                return _context4.abrupt("return", null);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getOption(_x) {
        return _getOption.apply(this, arguments);
      }

      return getOption;
    }()
  }, {
    key: privateGetMenuBoundsRect,
    value: function () {
      var _value = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        var menu, _yield$menu$getLocati, x, y, _yield$menu$getSize, width, height;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                menu = $(this.rootElement);
                _context5.next = 3;
                return menu.getLocation();

              case 3:
                _yield$menu$getLocati = _context5.sent;
                x = _yield$menu$getLocati.x;
                y = _yield$menu$getLocati.y;
                _context5.next = 8;
                return menu.getSize();

              case 8:
                _yield$menu$getSize = _context5.sent;
                width = _yield$menu$getSize.width;
                height = _yield$menu$getSize.height;
                return _context5.abrupt("return", {
                  left: x,
                  top: y,
                  right: x + width,
                  bottom: y + height
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  }, {
    key: "arrowDownExists",
    value: function () {
      var _arrowDownExists = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", $(this.rootElement).$('[data-id="internal-dropdown-arrow-down"]').isExisting());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function arrowDownExists() {
        return _arrowDownExists.apply(this, arguments);
      }

      return arrowDownExists;
    }()
  }, {
    key: "arrowUpExists",
    value: function () {
      var _arrowUpExists = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", $(this.rootElement).$('[data-id="internal-dropdown-arrow-up"]').isExisting());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function arrowUpExists() {
        return _arrowUpExists.apply(this, arguments);
      }

      return arrowUpExists;
    }()
  }, {
    key: "emptyMessageExist",
    value: function () {
      var _emptyMessageExist = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", $(this.rootElement).$('[data-id="internal-dropdown-empty-message"]').isExisting());

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function emptyMessageExist() {
        return _emptyMessageExist.apply(this, arguments);
      }

      return emptyMessageExist;
    }()
  }, {
    key: "isLoading",
    value: function () {
      var _isLoading = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9() {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", $(this.rootElement).$('ul[role="presentation"] > div > div').isExisting());

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function isLoading() {
        return _isLoading.apply(this, arguments);
      }

      return isLoading;
    }()
  }, {
    key: "clickSearch",
    value: function () {
      var _clickSearch = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10() {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return $(this.rootElement).$('input[type="search"]').click();

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function clickSearch() {
        return _clickSearch.apply(this, arguments);
      }

      return clickSearch;
    }()
  }, {
    key: "setQuery",
    value: function () {
      var _setQuery = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11(value) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return $(this.rootElement).$('input[type="search"]').setValue(value);

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function setQuery(_x2) {
        return _setQuery.apply(this, arguments);
      }

      return setQuery;
    }()
  }]);
  return PageInternalDropdown;
}();

module.exports = PageInternalDropdown;