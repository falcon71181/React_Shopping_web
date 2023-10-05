import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageButtonOption = function () {
  function PageButtonOption(rootElement) {
    _classCallCheck(this, PageButtonOption);

    this.rootElement = rootElement;
  }

  _createClass(PageButtonOption, [{
    key: "root",
    get: function get() {
      return $(this.rootElement);
    }
  }, {
    key: "input",
    get: function get() {
      return this.root.then(function (root) {
        return root.$('input');
      });
    }
  }, {
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.root;

              case 2:
                return _context.abrupt("return", _context.sent.click());

              case 3:
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
                _context2.next = 2;
                return this.input;

              case 2:
                return _context2.abrupt("return", _context2.sent.isFocused());

              case 3:
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
    key: "isChecked",
    value: function () {
      var _isChecked = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.input;

              case 2:
                return _context3.abrupt("return", _context3.sent.isSelected());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isChecked() {
        return _isChecked.apply(this, arguments);
      }

      return isChecked;
    }()
  }]);

  return PageButtonOption;
}();

module.exports = PageButtonOption;