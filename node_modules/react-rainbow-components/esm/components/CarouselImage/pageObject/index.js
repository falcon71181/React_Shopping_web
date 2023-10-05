import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageCarouselImage = function () {
  function PageCarouselImage(rootElement) {
    _classCallCheck(this, PageCarouselImage);

    this.rootElement = rootElement;
  }

  _createClass(PageCarouselImage, [{
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _getHeaderText = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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