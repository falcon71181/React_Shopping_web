import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PagePrimitiveMenu = require('../../PrimitiveMenu/pageObject');

var PageButtonMenu = function () {
  function PageButtonMenu(rootElement) {
    _classCallCheck(this, PageButtonMenu);

    this.rootElement = rootElement;
    this.primitiveMenu = new PagePrimitiveMenu("".concat(rootElement, " button"));
  }

  _createClass(PageButtonMenu, [{
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(itemPosition) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.primitiveMenu.getItem(itemPosition));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getItem(_x) {
        return _getItem.apply(this, arguments);
      }

      return getItem;
    }()
  }, {
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.primitiveMenu.clickTrigger();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function click() {
        return _click.apply(this, arguments);
      }

      return click;
    }()
  }, {
    key: "isOpen",
    value: function () {
      var _isOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.primitiveMenu.isDropdownOpen());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isOpen() {
        return _isOpen.apply(this, arguments);
      }

      return isOpen;
    }()
  }, {
    key: "hasFocusButton",
    value: function () {
      var _hasFocusButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.primitiveMenu.hasFocusTrigger());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function hasFocusButton() {
        return _hasFocusButton.apply(this, arguments);
      }

      return hasFocusButton;
    }()
  }]);

  return PageButtonMenu;
}();

module.exports = PageButtonMenu;