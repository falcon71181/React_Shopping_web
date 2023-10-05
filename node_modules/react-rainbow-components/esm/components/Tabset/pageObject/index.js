import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageTab = require('../../Tab/pageObject');

var BUTTON_SELECTOR = '[data-id="button-icon-element"]';

var PageTabset = function () {
  function PageTabset(rootElement) {
    _classCallCheck(this, PageTabset);

    this.rootElement = rootElement;
  }

  _createClass(PageTabset, [{
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$$('li[role="presentation"]');

              case 2:
                items = _context.sent;

                if (!items[itemPosition]) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new PageTab("".concat(this.rootElement, " li[role=\"presentation\"]:nth-child(").concat(itemPosition + 1, ")")));

              case 5:
                return _context.abrupt("return", null);

              case 6:
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
    key: "isButtonsVisible",
    value: function () {
      var _isButtonsVisible = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        var buttons;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$$(BUTTON_SELECTOR);

              case 2:
                buttons = _context3.sent;

                if (!(buttons && buttons.length)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
                  return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return buttons[0].isDisplayed();

                        case 2:
                          _context2.t0 = _context2.sent;

                          if (!_context2.t0) {
                            _context2.next = 7;
                            break;
                          }

                          _context2.next = 6;
                          return buttons[1].isDisplayed();

                        case 6:
                          _context2.t0 = _context2.sent;

                        case 7:
                          return _context2.abrupt("return", _context2.t0);

                        case 8:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }))));

              case 5:
                return _context3.abrupt("return", false);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isButtonsVisible() {
        return _isButtonsVisible.apply(this, arguments);
      }

      return isButtonsVisible;
    }()
  }, {
    key: "isLeftButtonEnabled",
    value: function () {
      var _isLeftButtonEnabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", $(this.rootElement).$$(BUTTON_SELECTOR)[0].isEnabled());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isLeftButtonEnabled() {
        return _isLeftButtonEnabled.apply(this, arguments);
      }

      return isLeftButtonEnabled;
    }()
  }, {
    key: "isRightButtonEnabled",
    value: function () {
      var _isRightButtonEnabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", $(this.rootElement).$$(BUTTON_SELECTOR)[1].isEnabled());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function isRightButtonEnabled() {
        return _isRightButtonEnabled.apply(this, arguments);
      }

      return isRightButtonEnabled;
    }()
  }, {
    key: "clickLeftButton",
    value: function () {
      var _clickLeftButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6() {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", $(this.rootElement).$$(BUTTON_SELECTOR)[0].click());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function clickLeftButton() {
        return _clickLeftButton.apply(this, arguments);
      }

      return clickLeftButton;
    }()
  }, {
    key: "clickRightButton",
    value: function () {
      var _clickRightButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", $(this.rootElement).$$(BUTTON_SELECTOR)[1].click());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function clickRightButton() {
        return _clickRightButton.apply(this, arguments);
      }

      return clickRightButton;
    }()
  }]);

  return PageTabset;
}();

module.exports = PageTabset;