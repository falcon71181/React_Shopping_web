import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageCheckboxToggle = function () {
  function PageCheckboxToggle(rootElement) {
    _classCallCheck(this, PageCheckboxToggle);

    this.rootElement = rootElement;
  }

  _createClass(PageCheckboxToggle, [{
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).click();

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
    key: "isChecked",
    value: function () {
      var _isChecked = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('input').isSelected();

              case 2:
                return _context2.abrupt("return", !!_context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isChecked() {
        return _isChecked.apply(this, arguments);
      }

      return isChecked;
    }()
  }]);

  return PageCheckboxToggle;
}();

module.exports = PageCheckboxToggle;