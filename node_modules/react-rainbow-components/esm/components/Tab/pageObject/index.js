import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageTab = function () {
  function PageTab(rootElement) {
    _classCallCheck(this, PageTab);

    this.rootElement = rootElement;
  }

  _createClass(PageTab, [{
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('button[role="tab"]').click();

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
    key: "hasFocus",
    value: function () {
      var _hasFocus = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", $(this.rootElement).$('button[role="tab"]').isFocused());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hasFocus() {
        return _hasFocus.apply(this, arguments);
      }

      return hasFocus;
    }()
  }, {
    key: "isSelected",
    value: function () {
      var _isSelected = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$('button[role="tab"]').getAttribute('data-active');

              case 2:
                return _context3.abrupt("return", !!_context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isSelected() {
        return _isSelected.apply(this, arguments);
      }

      return isSelected;
    }()
  }, {
    key: "isVisibleWithinViewport",
    value: function () {
      var _isVisibleWithinViewport = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", $(this.rootElement).$('button[role="tab"]').isDisplayedInViewport());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isVisibleWithinViewport() {
        return _isVisibleWithinViewport.apply(this, arguments);
      }

      return isVisibleWithinViewport;
    }()
  }, {
    key: "getLabelText",
    value: function () {
      var _getLabelText = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", $(this.rootElement).getText());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getLabelText() {
        return _getLabelText.apply(this, arguments);
      }

      return getLabelText;
    }()
  }]);

  return PageTab;
}();

module.exports = PageTab;