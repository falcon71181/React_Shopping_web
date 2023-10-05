"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageCarouselImage = function () {
  function PageCarouselImage(rootElement) {
    (0, _classCallCheck2["default"])(this, PageCarouselImage);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageCarouselImage, [{
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('a').click();

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
    key: "getHeaderText",
    value: function () {
      var _getHeaderText = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", $(this.rootElement).$('[title="Imagen Header"]').getHTML(false));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getHeaderText() {
        return _getHeaderText.apply(this, arguments);
      }

      return getHeaderText;
    }()
  }]);
  return PageCarouselImage;
}();

module.exports = PageCarouselImage;