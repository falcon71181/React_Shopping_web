import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageVerticalItem = require('../../VerticalItem/pageObject');

var PageVerticalSectionOverflow = require('../../VerticalSectionOverflow/pageObject');

var PageVerticalNavigation = function () {
  function PageVerticalNavigation(rootElement) {
    _classCallCheck(this, PageVerticalNavigation);

    this.rootElement = rootElement;
  }

  _createClass(PageVerticalNavigation, [{
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$$('[data-id="vertical-item"]');

              case 2:
                items = _context.sent;

                if (!items[itemPosition]) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new PageVerticalItem("".concat(this.rootElement, " [data-id=\"vertical-item\"]:nth-child(").concat(itemPosition + 1, ")")));

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
    key: "getSectionOverflow",
    value: function () {
      var _getSectionOverflow = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$$('[data-id="vertical-overflow-container"]');

              case 2:
                items = _context2.sent;

                if (!items[itemPosition]) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", new PageVerticalSectionOverflow("".concat(this.rootElement, " [data-id=\"vertical-overflow-container\"]:nth-child(").concat(itemPosition + 1, ")")));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSectionOverflow(_x2) {
        return _getSectionOverflow.apply(this, arguments);
      }

      return getSectionOverflow;
    }()
  }]);

  return PageVerticalNavigation;
}();

module.exports = PageVerticalNavigation;