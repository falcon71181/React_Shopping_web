import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageCarouselCardIndicator = function () {
  function PageCarouselCardIndicator(rootElement) {
    _classCallCheck(this, PageCarouselCardIndicator);

    this.rootElement = rootElement;
  }

  _createClass(PageCarouselCardIndicator, [{
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('button').click();

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
                return _context2.abrupt("return", $(this.rootElement).$('button').isFocused());

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
                return $(this.rootElement).$('button').getAttribute('aria-selected');

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

      function isSelected() {
        return _isSelected.apply(this, arguments);
      }

      return isSelected;
    }()
  }]);

  return PageCarouselCardIndicator;
}();

module.exports = PageCarouselCardIndicator;