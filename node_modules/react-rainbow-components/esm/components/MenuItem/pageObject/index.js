import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageMenuItem = function () {
  function PageMenuItem(rootElement) {
    _classCallCheck(this, PageMenuItem);

    this.rootElement = rootElement;
  }

  _createClass(PageMenuItem, [{
    key: "click",
    value: function click() {
      this.rootElement.click();
    }
  }, {
    key: "hasFocus",
    value: function hasFocus() {
      return this.rootElement.isFocused();
    }
  }, {
    key: "hover",
    value: function () {
      var _hover = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.rootElement.moveTo();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function hover() {
        return _hover.apply(this, arguments);
      }

      return hover;
    }()
  }, {
    key: "getLabelText",
    value: function getLabelText() {
      return this.rootElement.getText();
    }
  }]);

  return PageMenuItem;
}();

module.exports = PageMenuItem;