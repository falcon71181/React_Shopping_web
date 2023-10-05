"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageVerticalItem = require('../../VerticalItem/pageObject');

var PageVerticalSectionOverflow = require('../../VerticalSectionOverflow/pageObject');

var PageVerticalNavigation = function () {
  function PageVerticalNavigation(rootElement) {
    (0, _classCallCheck2["default"])(this, PageVerticalNavigation);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageVerticalNavigation, [{
    key: "getItem",
    value: function () {
      var _getItem = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(itemPosition) {
        var items;
        return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _getSectionOverflow = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(itemPosition) {
        var items;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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