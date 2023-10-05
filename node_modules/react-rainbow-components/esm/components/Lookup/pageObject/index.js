import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageLookupMenuItem = require('./menuItem');

var PageLookup = function () {
  function PageLookup(rootElement) {
    _classCallCheck(this, PageLookup);

    this.rootElement = rootElement;
  }

  _createClass(PageLookup, [{
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('input[type="search"]').click();

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
    key: "clickCloseButton",
    value: function () {
      var _clickCloseButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('button[title="close"]').click();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickCloseButton() {
        return _clickCloseButton.apply(this, arguments);
      }

      return clickCloseButton;
    }()
  }, {
    key: "clickSelectedOptionInput",
    value: function () {
      var _clickSelectedOptionInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$('input[type="text"]').parentElement().click();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clickSelectedOptionInput() {
        return _clickSelectedOptionInput.apply(this, arguments);
      }

      return clickSelectedOptionInput;
    }()
  }, {
    key: "clickLabel",
    value: function () {
      var _clickLabel = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$('label').click();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function clickLabel() {
        return _clickLabel.apply(this, arguments);
      }

      return clickLabel;
    }()
  }, {
    key: "clickRemoveSelectedOptionButton",
    value: function () {
      var _clickRemoveSelectedOptionButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return $(this.rootElement).$('button[title="Close"]').click();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function clickRemoveSelectedOptionButton() {
        return _clickRemoveSelectedOptionButton.apply(this, arguments);
      }

      return clickRemoveSelectedOptionButton;
    }()
  }, {
    key: "hasFocusInput",
    value: function () {
      var _hasFocusInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6() {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", $(this.rootElement).$('input[type="search"]').isFocused());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function hasFocusInput() {
        return _hasFocusInput.apply(this, arguments);
      }

      return hasFocusInput;
    }()
  }, {
    key: "hasFocusSelectedOptionInput",
    value: function () {
      var _hasFocusSelectedOptionInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", $(this.rootElement).$('input[type="text"]').isFocused());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function hasFocusSelectedOptionInput() {
        return _hasFocusSelectedOptionInput.apply(this, arguments);
      }

      return hasFocusSelectedOptionInput;
    }()
  }, {
    key: "hasFocusRemoveSelectedOptionButton",
    value: function () {
      var _hasFocusRemoveSelectedOptionButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8() {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", $(this.rootElement).$('button[title="Close"]').isFocused());

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function hasFocusRemoveSelectedOptionButton() {
        return _hasFocusRemoveSelectedOptionButton.apply(this, arguments);
      }

      return hasFocusRemoveSelectedOptionButton;
    }()
  }, {
    key: "setQuery",
    value: function () {
      var _setQuery = _asyncToGenerator(_regeneratorRuntime.mark(function _callee9(value) {
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return $(this.rootElement).$('input[type="search"]').setValue(value);

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function setQuery(_x) {
        return _setQuery.apply(this, arguments);
      }

      return setQuery;
    }()
  }, {
    key: "clearQuery",
    value: function () {
      var _clearQuery = _asyncToGenerator(_regeneratorRuntime.mark(function _callee10() {
        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return $(this.rootElement).$('input[type="search"]').clearValue();

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function clearQuery() {
        return _clearQuery.apply(this, arguments);
      }

      return clearQuery;
    }()
  }, {
    key: "getQuery",
    value: function () {
      var _getQuery = _asyncToGenerator(_regeneratorRuntime.mark(function _callee11() {
        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", $(this.rootElement).$('input[type="search"]').getValue());

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getQuery() {
        return _getQuery.apply(this, arguments);
      }

      return getQuery;
    }()
  }, {
    key: "getOptionsLength",
    value: function () {
      var _getOptionsLength = _asyncToGenerator(_regeneratorRuntime.mark(function _callee12() {
        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return $('[data-id="lookup-options-container"]').$$('li[role="presentation"]');

              case 2:
                return _context12.abrupt("return", _context12.sent.length);

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function getOptionsLength() {
        return _getOptionsLength.apply(this, arguments);
      }

      return getOptionsLength;
    }()
  }, {
    key: "getOption",
    value: function () {
      var _getOption = _asyncToGenerator(_regeneratorRuntime.mark(function _callee13(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return $('[data-id="lookup-options-container"]').$$('li[role="presentation"]');

              case 2:
                items = _context13.sent;

                if (!items[itemPosition]) {
                  _context13.next = 5;
                  break;
                }

                return _context13.abrupt("return", new PageLookupMenuItem(items[itemPosition]));

              case 5:
                return _context13.abrupt("return", null);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function getOption(_x2) {
        return _getOption.apply(this, arguments);
      }

      return getOption;
    }()
  }, {
    key: "getSelectedOptionLabel",
    value: function () {
      var _getSelectedOptionLabel = _asyncToGenerator(_regeneratorRuntime.mark(function _callee14() {
        var content;
        return _regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return $(this.rootElement).$('input[type="text"]');

              case 2:
                content = _context14.sent;

                if (!content) {
                  _context14.next = 5;
                  break;
                }

                return _context14.abrupt("return", content.getValue());

              case 5:
                return _context14.abrupt("return", '');

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getSelectedOptionLabel() {
        return _getSelectedOptionLabel.apply(this, arguments);
      }

      return getSelectedOptionLabel;
    }()
  }, {
    key: "isMenuOpen",
    value: function () {
      var _isMenuOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee15() {
        return _regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return $(this.rootElement).$('div[role="combobox"]').getAttribute('aria-expanded');

              case 2:
                _context15.t0 = _context15.sent;
                return _context15.abrupt("return", _context15.t0 === 'true');

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function isMenuOpen() {
        return _isMenuOpen.apply(this, arguments);
      }

      return isMenuOpen;
    }()
  }, {
    key: "isMenuEmpty",
    value: function () {
      var _isMenuEmpty = _asyncToGenerator(_regeneratorRuntime.mark(function _callee16() {
        return _regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", $('[data-id="lookup-options-empty-container"]').isDisplayed());

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      function isMenuEmpty() {
        return _isMenuEmpty.apply(this, arguments);
      }

      return isMenuEmpty;
    }()
  }, {
    key: "waitUntilOpen",
    value: function () {
      var _waitUntilOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee18() {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee17() {
                  return _regeneratorRuntime.wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          return _context17.abrupt("return", _this.isMenuOpen());

                        case 1:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee17);
                })));

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function waitUntilOpen() {
        return _waitUntilOpen.apply(this, arguments);
      }

      return waitUntilOpen;
    }()
  }, {
    key: "hoverScrollUpArrow",
    value: function () {
      var _hoverScrollUpArrow = _asyncToGenerator(_regeneratorRuntime.mark(function _callee19() {
        var upArrow;
        return _regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return $('[data-id="lookup-options-container"]').$('[data-id=lookup-arrow-button-up]');

              case 2:
                upArrow = _context19.sent;
                _context19.next = 5;
                return upArrow.scrollIntoView();

              case 5:
                return _context19.abrupt("return", upArrow.moveTo());

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      function hoverScrollUpArrow() {
        return _hoverScrollUpArrow.apply(this, arguments);
      }

      return hoverScrollUpArrow;
    }()
  }, {
    key: "mouseLeaveScrollUpArrow",
    value: function () {
      var _mouseLeaveScrollUpArrow = _asyncToGenerator(_regeneratorRuntime.mark(function _callee20() {
        return _regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return $(this.rootElement).$('input[type="text"]');

              case 2:
                return _context20.abrupt("return", _context20.sent.moveTo());

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function mouseLeaveScrollUpArrow() {
        return _mouseLeaveScrollUpArrow.apply(this, arguments);
      }

      return mouseLeaveScrollUpArrow;
    }()
  }, {
    key: "hoverScrollDownArrow",
    value: function () {
      var _hoverScrollDownArrow = _asyncToGenerator(_regeneratorRuntime.mark(function _callee21() {
        var downArrow;
        return _regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return $('[data-id="lookup-options-container"]').$('[data-id="lookup-arrow-button-down"]');

              case 2:
                downArrow = _context21.sent;
                _context21.next = 5;
                return downArrow.scrollIntoView();

              case 5:
                return _context21.abrupt("return", downArrow.moveTo());

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function hoverScrollDownArrow() {
        return _hoverScrollDownArrow.apply(this, arguments);
      }

      return hoverScrollDownArrow;
    }()
  }, {
    key: "mouseLeaveScrollDownArrow",
    value: function () {
      var _mouseLeaveScrollDownArrow = _asyncToGenerator(_regeneratorRuntime.mark(function _callee22() {
        return _regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return $(this.rootElement).$('input[type="text"]');

              case 2:
                return _context22.abrupt("return", _context22.sent.moveTo());

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function mouseLeaveScrollDownArrow() {
        return _mouseLeaveScrollDownArrow.apply(this, arguments);
      }

      return mouseLeaveScrollDownArrow;
    }()
  }, {
    key: "arrowDownExists",
    value: function () {
      var _arrowDownExists = _asyncToGenerator(_regeneratorRuntime.mark(function _callee23() {
        return _regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return $('[data-id="lookup-options-container"]').$('[data-id="lookup-arrow-button-down"]');

              case 2:
                return _context23.abrupt("return", _context23.sent.isExisting());

              case 3:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23);
      }));

      function arrowDownExists() {
        return _arrowDownExists.apply(this, arguments);
      }

      return arrowDownExists;
    }()
  }, {
    key: "arrowUpExists",
    value: function () {
      var _arrowUpExists = _asyncToGenerator(_regeneratorRuntime.mark(function _callee24() {
        return _regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return $('[data-id="lookup-options-container"]').$('[data-id="lookup-arrow-button-up"]');

              case 2:
                return _context24.abrupt("return", _context24.sent.isExisting());

              case 3:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }));

      function arrowUpExists() {
        return _arrowUpExists.apply(this, arguments);
      }

      return arrowUpExists;
    }()
  }]);

  return PageLookup;
}();

module.exports = PageLookup;