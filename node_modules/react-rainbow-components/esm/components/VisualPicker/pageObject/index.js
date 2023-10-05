import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageVisualPickerOption = require('../../VisualPickerOption/pageObject/index');

var PageVisualPicker = function () {
  function PageVisualPicker(rootElement) {
    _classCallCheck(this, PageVisualPicker);

    this.rootElement = rootElement;
  }

  _createClass(PageVisualPicker, [{
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$$('span[data-id="visual-picker_option-container"]');

              case 2:
                items = _context.sent;

                if (!items[itemPosition]) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new PageVisualPickerOption("".concat(this.rootElement, " span[data-id=\"visual-picker_option-container\"]:nth-child(").concat(itemPosition + 1, ")")));

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

  return PageVisualPicker;
}();

module.exports = PageVisualPicker;