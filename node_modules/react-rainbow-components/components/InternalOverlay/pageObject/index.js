"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageInternalOverlay = function () {
  function PageInternalOverlay(rootElement) {
    (0, _classCallCheck2["default"])(this, PageInternalOverlay);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageInternalOverlay, [{
    key: "exists",
    value: function () {
      var _exists = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
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