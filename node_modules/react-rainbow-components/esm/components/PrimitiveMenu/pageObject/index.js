import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageMenuItem = require('../../MenuItem/pageObject');

var PagePrimitiveMenu = function () {
  function PagePrimitiveMenu(triggerElement, dropdownElement) {
    _classCallCheck(this, PagePrimitiveMenu);

    this.triggerElement = triggerElement;
    this.dropdownElement = dropdownElement || 'div[data-id="primitive-menu_dropdown"]';
  }

  _createClass(PagePrimitiveMenu, [{
    key: "dropdown",
    get: function get() {
      return $(this.dropdownElement);
    }
  }, {
    key: "trigger",
    get: function get() {
      return $(this.triggerElement);
    }
  }, {
    key: "clickTrigger",
    value: function () {
      var _clickTrigger = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.trigger;

              case 2:
                _context.next = 4;
                return _context.sent.click();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickTrigger() {
        return _clickTrigger.apply(this, arguments);
      }

      return clickTrigger;
    }()
  }, {
    key: "isDropdownOpen",
    value: function () {
      var _isDropdownOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        var dropdown, exists, visible;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.dropdown;

              case 2:
                dropdown = _context2.sent;
                _context2.next = 5;
                return dropdown.isExisting();

              case 5:
                exists = _context2.sent;
                _context2.next = 8;
                return dropdown.isDisplayed();

              case 8:
                visible = _context2.sent;
                return _context2.abrupt("return", exists && visible);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isDropdownOpen() {
        return _isDropdownOpen.apply(this, arguments);
      }

      return isDropdownOpen;
    }()
  }, {
    key: "hasFocusTrigger",
    value: function () {
      var _hasFocusTrigger = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.trigger;

              case 2:
                return _context3.abrupt("return", _context3.sent.isFocused());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hasFocusTrigger() {
        return _hasFocusTrigger.apply(this, arguments);
      }

      return hasFocusTrigger;
    }()
  }, {
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4(itemPosition) {
        var menuItems;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.dropdown.$$('li[role="menuitem"]');

              case 2:
                menuItems = _context4.sent;

                if (!menuItems[itemPosition]) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", new PageMenuItem(menuItems[itemPosition]));

              case 5:
                return _context4.abrupt("return", null);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getItem(_x) {
        return _getItem.apply(this, arguments);
      }

      return getItem;
    }()
  }]);

  return PagePrimitiveMenu;
}();

module.exports = PagePrimitiveMenu;