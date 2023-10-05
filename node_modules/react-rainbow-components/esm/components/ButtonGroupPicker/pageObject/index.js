import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageButtonOption = require('../../ButtonOption/pageObject');

var PageButtonGroupPicker = function () {
  function PageButtonGroupPicker(rootElement) {
    _classCallCheck(this, PageButtonGroupPicker);

    this.rootElement = rootElement;
  }

  _createClass(PageButtonGroupPicker, [{
    key: "root",
    get: function get() {
      return $(this.rootElement);
    }
  }, {
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$$('label');

              case 2:
                items = _context.sent;

                if (!items[itemPosition]) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new PageButtonOption("".concat(this.rootElement, " label:nth-child(").concat(itemPosition + 1, ")")));

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
  }]);

  return PageButtonGroupPicker;
}();

module.exports = PageButtonGroupPicker;