import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageCarouselCardIndicator = require('./indicator');

var PageCarouselImage = require('../../CarouselImage/pageObject');

var PageCarouselCard = function () {
  function PageCarouselCard(rootElement) {
    _classCallCheck(this, PageCarouselCard);

    this.rootElement = rootElement;
  }

  _createClass(PageCarouselCard, [{
    key: "getIndicatorItem",
    value: function () {
      var _getIndicatorItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$$('li[role="presentation"]');

              case 2:
                items = _context.sent;

                if (!items[itemPosition]) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new PageCarouselCardIndicator("".concat(this.rootElement, " li[role=\"presentation\"]:nth-child(").concat(itemPosition + 1, ")")));

              case 5:
                return _context.abrupt("return", null);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getIndicatorItem(_x) {
        return _getIndicatorItem.apply(this, arguments);
      }

      return getIndicatorItem;
    }()
  }, {
    key: "getImageItem",
    value: function () {
      var _getImageItem = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(itemPosition) {
        var items;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$$('li[role="tabpanel"]');

              case 2:
                items = _context2.sent;

                if (!items[itemPosition]) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", new PageCarouselImage("".concat(this.rootElement, " li[role=\"tabpanel\"]:nth-child(").concat(itemPosition + 1, ")")));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getImageItem(_x2) {
        return _getImageItem.apply(this, arguments);
      }

      return getImageItem;
    }()
  }]);

  return PageCarouselCard;
}();

module.exports = PageCarouselCard;