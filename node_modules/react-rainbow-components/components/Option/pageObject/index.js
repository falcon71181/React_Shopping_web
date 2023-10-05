"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function isPointWithinRect(_x, _x2) {
  return _isPointWithinRect.apply(this, arguments);
}

function _isPointWithinRect() {
  _isPointWithinRect = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10(point, rect) {
    var x, y, left, top, right, bottom;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            x = point.x, y = point.y;
            left = rect.left, top = rect.top, right = rect.right, bottom = rect.bottom;
            return _context10.abrupt("return", x >= left && y >= top && x <= right && y <= bottom);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _isPointWithinRect.apply(this, arguments);
}

var PageOption = function () {
  function PageOption(rootElement, containerRect) {
    (0, _classCallCheck2["default"])(this, PageOption);
    this.rootElement = rootElement;
    this.containerRect = containerRect;
  }

  (0, _createClass2["default"])(PageOption, [{
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.rootElement.click();

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
    key: "hover",
    value: function () {
      var _hover = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var itemElement;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.rootElement.$('div[role="option"]');

              case 2:
                itemElement = _context2.sent;
                _context2.next = 5;
                return itemElement.scrollIntoView();

              case 5:
                _context2.next = 7;
                return itemElement.moveTo();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hover() {
        return _hover.apply(this, arguments);
      }

      return hover;
    }()
  }, {
    key: "getLabel",
    value: function () {
      var _getLabel = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.rootElement.$('div[role="option"]');

              case 2:
                return _context3.abrupt("return", _context3.sent.getText());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getLabel() {
        return _getLabel.apply(this, arguments);
      }

      return getLabel;
    }()
  }, {
    key: "isActive",
    value: function () {
      var _isActive = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.rootElement.$('div[aria-selected="true"]');

              case 2:
                return _context4.abrupt("return", _context4.sent.isExisting());

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isActive() {
        return _isActive.apply(this, arguments);
      }

      return isActive;
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
                return this.rootElement.getAttribute('data-selected');

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
  }, {
    key: "isVisible",
    value: function () {
      var _isVisible = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        var _yield$yield$this$roo, x, y, _yield$yield$this$roo2, width, height;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.rootElement.$('div[role="option"]');

              case 2:
                _context6.next = 4;
                return _context6.sent.getLocation();

              case 4:
                _yield$yield$this$roo = _context6.sent;
                x = _yield$yield$this$roo.x;
                y = _yield$yield$this$roo.y;
                _context6.next = 9;
                return this.rootElement.$('div[role="option"]');

              case 9:
                _context6.next = 11;
                return _context6.sent.getSize();

              case 11:
                _yield$yield$this$roo2 = _context6.sent;
                width = _yield$yield$this$roo2.width;
                height = _yield$yield$this$roo2.height;
                _context6.next = 16;
                return this.rootElement.isDisplayedInViewport();

              case 16:
                _context6.t0 = _context6.sent;

                if (!_context6.t0) {
                  _context6.next = 26;
                  break;
                }

                _context6.next = 20;
                return isPointWithinRect({
                  x: x,
                  y: y
                }, this.containerRect);

              case 20:
                _context6.t1 = _context6.sent;

                if (!_context6.t1) {
                  _context6.next = 25;
                  break;
                }

                _context6.next = 24;
                return isPointWithinRect({
                  x: x + width,
                  y: y + height
                }, this.containerRect);

              case 24:
                _context6.t1 = _context6.sent;

              case 25:
                _context6.t0 = _context6.t1;

              case 26:
                return _context6.abrupt("return", _context6.t0);

              case 27:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function isVisible() {
        return _isVisible.apply(this, arguments);
      }

      return isVisible;
    }()
  }, {
    key: "waitUntilIsVisible",
    value: function () {
      var _waitUntilIsVisible = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
                  return _regenerator["default"].wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this.isVisible();

                        case 2:
                          return _context7.abrupt("return", _context7.sent);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })), 30000);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function waitUntilIsVisible() {
        return _waitUntilIsVisible.apply(this, arguments);
      }

      return waitUntilIsVisible;
    }()
  }, {
    key: "scrollIntoView",
    value: function () {
      var _scrollIntoView = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9() {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.rootElement.scrollIntoView();

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function scrollIntoView() {
        return _scrollIntoView.apply(this, arguments);
      }

      return scrollIntoView;
    }()
  }]);
  return PageOption;
}();

module.exports = PageOption;