"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageNodeItem = require('./node');

var PageTree = function () {
  function PageTree(rootElement) {
    (0, _classCallCheck2["default"])(this, PageTree);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageTree, [{
    key: "getNode",
    value: function () {
      var _getNode = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(path) {
        var nodePath, node;
        return _regenerator["default"].wrap(function _callee$(_context) {
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