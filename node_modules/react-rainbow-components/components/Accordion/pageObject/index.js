"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageAccordionSection = require('../../AccordionSection/pageObject');

var PageAccordion = function () {
  function PageAccordion(rootElement) {
    (0, _classCallCheck2["default"])(this, PageAccordion);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageAccordion, [{
    key: "getItem",
    value: function () {
      var _getItem = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(itemPosition) {
        var items;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$$('[data-id="accordion-section-li"]');

              case 2:
                items = _context.sent;

                if (!items[itemPosition]) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new PageAccordionSection("".concat(this.rootElement, " [data-id=\"accordion-section-li\"]:nth-child(").concat(itemPosition + 1, ")")));

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
  return PageAccordion;
}();

module.exports = PageAccordion;