"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageNodeItem = function () {
  function PageNodeItem(rootElement) {
    (0, _classCallCheck2["default"])(this, PageNodeItem);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageNodeItem, [{
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).click();

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
    key: "hasFocus",
    value: function () {
      var _hasFocus = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var nodeEl;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                nodeEl = $(this.rootElement);
                _context2.next = 3;
                return nodeEl.isExisting();

              case 3:
                _context2.t0 = _context2.sent;

                if (!_context2.t0) {
                  _context2.next = 6;
                  break;
                }

                _context2.t0 = nodeEl.isFocused();

              case 6:
                return _context2.abrupt("return", _context2.t0);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hasFocus() {
        return _hasFocus.apply(this, arguments);
      }

      return hasFocus;
    }()
  }, {
    key: "clickExpandButton",
    value: function () {
      var _clickExpandButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$('[data-id="node-element"] button').click();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clickExpandButton() {
        return _clickExpandButton.apply(this, arguments);
      }

      return clickExpandButton;
    }()
  }, {
    key: "isExpanded",
    value: function () {
      var _isExpanded = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        var childEl;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$('[data-id="node-element-li"]');

              case 2:
                childEl = _context4.sent;
                _context4.next = 5;
                return childEl.isExisting();

              case 5:
                _context4.t0 = _context4.sent;

                if (!_context4.t0) {
                  _context4.next = 8;
                  break;
                }

                _context4.t0 = childEl.isDisplayed();

              case 8:
                return _context4.abrupt("return", _context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isExpanded() {
        return _isExpanded.apply(this, arguments);
      }

      return isExpanded;
    }()
  }, {
    key: "isSelected",
    value: function () {
      var _isSelected = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return $(this.rootElement).getAttribute('aria-selected');

              case 2:
                _context5.t0 = _context5.sent;
                return _context5.abrupt("return", _context5.t0 === 'true');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function isSelected() {
        return _isSelected.apply(this, arguments);
      }

      return isSelected;
    }()
  }]);
  return PageNodeItem;
}();

module.exports = PageNodeItem;