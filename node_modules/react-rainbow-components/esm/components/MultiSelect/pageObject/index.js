import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageInternalDropdown = require('../../InternalDropdown/pageObject');

var privateGetMenu = Symbol('privateGetMenu');

var PageMultiSelect = function () {
  function PageMultiSelect(rootElement) {
    _classCallCheck(this, PageMultiSelect);

    this.rootElement = rootElement;
  }

  _createClass(PageMultiSelect, [{
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('[role="combobox"]').click();

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
    key: "clickLabel",
    value: function () {
      var _clickLabel = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('label').click();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickLabel() {
        return _clickLabel.apply(this, arguments);
      }

      return clickLabel;
    }()
  }, {
    key: "clickTrigger",
    value: function () {
      var _clickTrigger = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$('[data-id="button-icon-element"]').click();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clickTrigger() {
        return _clickTrigger.apply(this, arguments);
      }

      return clickTrigger;
    }()
  }, {
    key: "isMenuOpen",
    value: function () {
      var _isMenuOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$('div[role="combobox"]').getAttribute('aria-expanded');

              case 2:
                _context4.t0 = _context4.sent;
                return _context4.abrupt("return", _context4.t0 === 'true');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isMenuOpen() {
        return _isMenuOpen.apply(this, arguments);
      }

      return isMenuOpen;
    }()
  }, {
    key: "hasTriggerFocus",
    value: function () {
      var _hasTriggerFocus = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return $(this.rootElement).$('[role="combobox"] > button');

              case 2:
                return _context5.abrupt("return", _context5.sent.isFocused());

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function hasTriggerFocus() {
        return _hasTriggerFocus.apply(this, arguments);
      }

      return hasTriggerFocus;
    }()
  }, {
    key: "hasInputFocus",
    value: function () {
      var _hasInputFocus = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6() {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(this.rootElement).$('[role="textbox"]');

              case 2:
                return _context6.abrupt("return", _context6.sent.isFocused());

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function hasInputFocus() {
        return _hasInputFocus.apply(this, arguments);
      }

      return hasInputFocus;
    }()
  }, {
    key: privateGetMenu,
    value: function () {
      var _value = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        var menuId;
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = "#";
                _context7.next = 3;
                return $(this.rootElement).$('[role="combobox"]').getAttribute('aria-controls');

              case 3:
                _context7.t1 = _context7.sent;
                menuId = _context7.t0.concat.call(_context7.t0, _context7.t1);
                _context7.next = 7;
                return this.isMenuOpen();

              case 7:
                if (!_context7.sent) {
                  _context7.next = 9;
                  break;
                }

                return _context7.abrupt("return", new PageInternalDropdown(menuId));

              case 9:
                return _context7.abrupt("return", null);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  }, {
    key: "getOption",
    value: function () {
      var _getOption = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8(optionIndex) {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this[privateGetMenu]();

              case 2:
                return _context8.abrupt("return", _context8.sent.getOption(optionIndex));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getOption(_x) {
        return _getOption.apply(this, arguments);
      }

      return getOption;
    }()
  }, {
    key: "waitUntilOpen",
    value: function () {
      var _waitUntilOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee10() {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee9() {
                  return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          return _context9.abrupt("return", _this.isMenuOpen());

                        case 1:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                })));

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function waitUntilOpen() {
        return _waitUntilOpen.apply(this, arguments);
      }

      return waitUntilOpen;
    }()
  }]);

  return PageMultiSelect;
}();

module.exports = PageMultiSelect;