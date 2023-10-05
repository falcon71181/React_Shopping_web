import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageNodeItem = require('./node');

var PageTree = function () {
  function PageTree(rootElement) {
    _classCallCheck(this, PageTree);

    this.rootElement = rootElement;
  }

  _createClass(PageTree, [{
    key: "getNode",
    value: function () {
      var _getNode = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(path) {
        var nodePath, node;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nodePath = path.join('.');
                _context.next = 3;
                return $(this.rootElement).$("[data-path=\"".concat(nodePath, "\"]"));

              case 3:
                node = _context.sent;

                if (!node) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", new PageNodeItem("".concat(this.rootElement, " [data-path=\"").concat(nodePath, "\"]")));

              case 6:
                return _context.abrupt("return", null);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getNode(_x) {
        return _getNode.apply(this, arguments);
      }

      return getNode;
    }()
  }]);

  return PageTree;
}();

module.exports = PageTree;