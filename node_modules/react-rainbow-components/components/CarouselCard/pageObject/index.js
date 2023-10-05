"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageCarouselCardIndicator = require('./indicator');

var PageCarouselImage = require('../../CarouselImage/pageObject');

var PageCarouselCard = function () {
  function PageCarouselCard(rootElement) {
    (0, _classCallCheck2["default"])(this, PageCarouselCard);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageCarouselCard, [{
    key: "getIndicatorItem",
    value: function () {
      var _getIndicatorItem = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(itemPosition) {
        var items;
        return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _getImageItem = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(itemPosition) {
        var items;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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