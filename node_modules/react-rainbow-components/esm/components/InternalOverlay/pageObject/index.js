import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageInternalOverlay = function () {
  function PageInternalOverlay(rootElement) {
    _classCallCheck(this, PageInternalOverlay);

    this.rootElement = rootElement;
  }

  _createClass(PageInternalOverlay, [{
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", $(this.rootElement).isExisting());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function exists() {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }]);

  return PageInternalOverlay;
}();

module.exports = PageInternalOverlay;