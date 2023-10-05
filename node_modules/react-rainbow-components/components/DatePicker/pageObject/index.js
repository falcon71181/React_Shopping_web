"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageCalendar = require('../../Calendar/pageObject');

var PageDatePicker = function () {
  function PageDatePicker(rootElement) {
    (0, _classCallCheck2["default"])(this, PageDatePicker);
    this.rootElement = rootElement;
    this.modalRootEl = "".concat(rootElement, "_modal");
    this.calendarRootEl = "".concat(rootElement, "_modal_calendar");
  }

  (0, _createClass2["default"])(PageDatePicker, [{
    key: "getValue",
    value: function () {
      var _getValue = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", $(this.rootElement).$('input[type="text"]').getValue());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getValue() {
        return _getValue.apply(this, arguments);
      }

      return getValue;
    }()
  }, {
    key: "click",
    value: function () {
      var _click = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('input[type="text"]').click();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function click() {
        return _click.apply(this, arguments);
      }

      return click;
    }()
  }, {
    key: "clickLabel",
    value: function () {
      var _clickLabel = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$('label').click();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clickLabel() {
        return _clickLabel.apply(this, arguments);
      }

      return clickLabel;
    }()
  }, {
    key: "clickDay",
    value: function () {
      var _clickDay = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(day) {
        var calendar;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return PageCalendar(this.calendarRootEl);

              case 2:
                calendar = _context4.sent;
                _context4.next = 5;
                return calendar.clickDay(day);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function clickDay(_x) {
        return _clickDay.apply(this, arguments);
      }

      return clickDay;
    }()
  }, {
    key: "isOpen",
    value: function () {
      var _isOpen = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return $(this.modalRootEl).isDisplayed();

              case 2:
                _context5.t1 = _context5.sent;

                if (!_context5.t1) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 6;
                return $(this.modalRootEl).$('h1').isDisplayed();

              case 6:
                _context5.t1 = _context5.sent;

              case 7:
                _context5.t0 = _context5.t1;

                if (!_context5.t0) {
                  _context5.next = 12;
                  break;
                }

                _context5.next = 11;
                return $(this.modalRootEl).$('select').isDisplayed();

              case 11:
                _context5.t0 = _context5.sent;

              case 12:
                return _context5.abrupt("return", _context5.t0);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function isOpen() {
        return _isOpen.apply(this, arguments);
      }

      return isOpen;
    }()
  }, {
    key: "hasFocusInput",
    value: function () {
      var _hasFocusInput = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(this.rootElement).$('input[type="text"]');

              case 2:
                return _context6.abrupt("return", _context6.sent.isFocused());

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function hasFocusInput() {
        return _hasFocusInput.apply(this, arguments);
      }

      return hasFocusInput;
    }()
  }, {
    key: "getDate",
    value: function () {
      var _getDate = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", $(this.modalRootEl).$('h1').getText());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getDate() {
        return _getDate.apply(this, arguments);
      }

      return getDate;
    }()
  }, {
    key: "waitUntilOpen",
    value: function () {
      var _waitUntilOpen = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
                  return _regenerator["default"].wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return _this.isOpen();

                        case 2:
                          return _context8.abrupt("return", _context8.sent);

                        case 3:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                })));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function waitUntilOpen() {
        return _waitUntilOpen.apply(this, arguments);
      }

      return waitUntilOpen;
    }()
  }, {
    key: "waitUntilClose",
    value: function () {
      var _waitUntilClose = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10() {
                  return _regenerator["default"].wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return _this2.isOpen();

                        case 2:
                          return _context10.abrupt("return", !_context10.sent);

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                })));

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function waitUntilClose() {
        return _waitUntilClose.apply(this, arguments);
      }

      return waitUntilClose;
    }()
  }]);
  return PageDatePicker;
}();

module.exports = PageDatePicker;