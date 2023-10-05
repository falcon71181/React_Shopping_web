import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageCalendar = require('../../Calendar/pageObject');

var PageTimeSelect = require('./pageTimeSelect');

var PageDateTimePicker = function () {
  function PageDateTimePicker(rootElement) {
    _classCallCheck(this, PageDateTimePicker);

    this.rootElement = rootElement;
    this.modalRootEl = "".concat(rootElement, "_modal");
  }

  _createClass(PageDateTimePicker, [{
    key: "getTimeValue",
    value: function () {
      var _getTimeValue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new PageTimeSelect(this.modalRootEl).getValue());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTimeValue() {
        return _getTimeValue.apply(this, arguments);
      }

      return getTimeValue;
    }()
  }, {
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", $(this.rootElement).$('input[type="text"]').getValue());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getValue() {
        return _getValue.apply(this, arguments);
      }

      return getValue;
    }()
  }, {
    key: "click",
    value: function () {
      var _click = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$('input[type="text"]').click();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function click() {
        return _click.apply(this, arguments);
      }

      return click;
    }()
  }, {
    key: "clickLabel",
    value: function () {
      var _clickLabel = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$('label').click();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function clickLabel() {
        return _clickLabel.apply(this, arguments);
      }

      return clickLabel;
    }()
  }, {
    key: "clickDay",
    value: function () {
      var _clickDay = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5(day) {
        var calendar;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return PageCalendar(this.modalRootEl);

              case 2:
                calendar = _context5.sent;
                _context5.next = 5;
                return calendar.clickDay(day);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function clickDay(_x) {
        return _clickDay.apply(this, arguments);
      }

      return clickDay;
    }()
  }, {
    key: "clickOKButton",
    value: function () {
      var _clickOKButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6() {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(this.modalRootEl).$('button[id="time-picker_ok-button"]').click();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function clickOKButton() {
        return _clickOKButton.apply(this, arguments);
      }

      return clickOKButton;
    }()
  }, {
    key: "clickCancelButton",
    value: function () {
      var _clickCancelButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return $(this.modalRootEl).$('button[id="time-picker_cancel-button"]').click();

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function clickCancelButton() {
        return _clickCancelButton.apply(this, arguments);
      }

      return clickCancelButton;
    }()
  }, {
    key: "isOpen",
    value: function () {
      var _isOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8() {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return $(this.modalRootEl).isDisplayed();

              case 2:
                _context8.t1 = _context8.sent;

                if (!_context8.t1) {
                  _context8.next = 7;
                  break;
                }

                _context8.next = 6;
                return $(this.modalRootEl).$('button[id="time-picker_ok-button"]').isDisplayed();

              case 6:
                _context8.t1 = _context8.sent;

              case 7:
                _context8.t0 = _context8.t1;

                if (!_context8.t0) {
                  _context8.next = 12;
                  break;
                }

                _context8.next = 11;
                return $(this.modalRootEl).$('button[id="time-picker_cancel-button"]').isDisplayed();

              case 11:
                _context8.t0 = _context8.sent;

              case 12:
                return _context8.abrupt("return", _context8.t0);

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function isOpen() {
        return _isOpen.apply(this, arguments);
      }

      return isOpen;
    }()
  }, {
    key: "waitUntilOpen",
    value: function () {
      var _waitUntilOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee10() {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee9() {
                  return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return _this.isOpen();

                        case 2:
                          return _context9.abrupt("return", _context9.sent);

                        case 3:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                })));

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function waitUntilOpen() {
        return _waitUntilOpen.apply(this, arguments);
      }

      return waitUntilOpen;
    }()
  }, {
    key: "waitUntilClose",
    value: function () {
      var _waitUntilClose = _asyncToGenerator(_regeneratorRuntime.mark(function _callee12() {
        var _this2 = this;

        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee11() {
                  return _regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return _this2.isOpen();

                        case 2:
                          return _context11.abrupt("return", !_context11.sent);

                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                })));

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function waitUntilClose() {
        return _waitUntilClose.apply(this, arguments);
      }

      return waitUntilClose;
    }()
  }]);

  return PageDateTimePicker;
}();

module.exports = PageDateTimePicker;