"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageSingleCalendar = function () {
  function PageSingleCalendar(rootElement) {
    (0, _classCallCheck2["default"])(this, PageSingleCalendar);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageSingleCalendar, [{
    key: "clickPrevMonthButton",
    value: function () {
      var _clickPrevMonthButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]')[0].click();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickPrevMonthButton() {
        return _clickPrevMonthButton.apply(this, arguments);
      }

      return clickPrevMonthButton;
    }()
  }, {
    key: "clickNextMonthButton",
    value: function () {
      var _clickNextMonthButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]')[1].click();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickNextMonthButton() {
        return _clickNextMonthButton.apply(this, arguments);
      }

      return clickNextMonthButton;
    }()
  }, {
    key: "clickSelectYear",
    value: function () {
      var _clickSelectYear = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$('select').click();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clickSelectYear() {
        return _clickSelectYear.apply(this, arguments);
      }

      return clickSelectYear;
    }()
  }, {
    key: "clickDay",
    value: function () {
      var _clickDay = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(day) {
        var buttonEl;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$('table').$("button=".concat(day));

              case 2:
                buttonEl = _context4.sent;
                _context4.next = 5;
                return buttonEl.isExisting();

              case 5:
                if (!_context4.sent) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 8;
                return buttonEl.click();

              case 8:
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
    key: "getSelectedMonth",
    value: function () {
      var _getSelectedMonth = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", $(this.rootElement).$('h3[data-id=month]').getText());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSelectedMonth() {
        return _getSelectedMonth.apply(this, arguments);
      }

      return getSelectedMonth;
    }()
  }, {
    key: "getSelectedYear",
    value: function () {
      var _getSelectedYear = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", $(this.rootElement).$('select').getValue());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getSelectedYear() {
        return _getSelectedYear.apply(this, arguments);
      }

      return getSelectedYear;
    }()
  }, {
    key: "getSelectedDay",
    value: function () {
      var _getSelectedDay = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", $(this.rootElement).$('button[data-selected=true]').getText());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getSelectedDay() {
        return _getSelectedDay.apply(this, arguments);
      }

      return getSelectedDay;
    }()
  }, {
    key: "isDaySelected",
    value: function () {
      var _isDaySelected = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8(day) {
        var buttonEl;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return $(this.rootElement).$('table').$("button=".concat(day));

              case 2:
                buttonEl = _context8.sent;
                _context8.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context8.t0 = _context8.sent;

                if (!_context8.t0) {
                  _context8.next = 11;
                  break;
                }

                _context8.next = 9;
                return buttonEl.getAttribute('data-selected');

              case 9:
                _context8.t1 = _context8.sent;
                _context8.t0 = _context8.t1 === 'true';

              case 11:
                return _context8.abrupt("return", _context8.t0);

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function isDaySelected(_x2) {
        return _isDaySelected.apply(this, arguments);
      }

      return isDaySelected;
    }()
  }, {
    key: "isDayEnabled",
    value: function () {
      var _isDayEnabled = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(day) {
        var spanEl;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return $(this.rootElement).$('table').$("button=".concat(day));

              case 2:
                spanEl = _context9.sent;
                return _context9.abrupt("return", spanEl.isExisting());

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function isDayEnabled(_x3) {
        return _isDayEnabled.apply(this, arguments);
      }

      return isDayEnabled;
    }()
  }, {
    key: "setYear",
    value: function () {
      var _setYear = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10(value) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return $(this.rootElement).$('select').selectByVisibleText(value);

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function setYear(_x4) {
        return _setYear.apply(this, arguments);
      }

      return setYear;
    }()
  }, {
    key: "isDayFocused",
    value: function () {
      var _isDayFocused = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11(day) {
        var buttonEl;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return $(this.rootElement).$('table').$("button=".concat(day));

              case 2:
                buttonEl = _context11.sent;
                _context11.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context11.t0 = _context11.sent;

                if (!_context11.t0) {
                  _context11.next = 10;
                  break;
                }

                _context11.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context11.t0 = _context11.sent;

              case 10:
                return _context11.abrupt("return", _context11.t0);

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function isDayFocused(_x5) {
        return _isDayFocused.apply(this, arguments);
      }

      return isDayFocused;
    }()
  }, {
    key: "isPrevMonthButtonDisabled",
    value: function () {
      var _isPrevMonthButtonDisabled = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee12() {
        var buttonEl;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context12.sent[0];
                _context12.next = 5;
                return buttonEl.isEnabled();

              case 5:
                return _context12.abrupt("return", !_context12.sent);

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function isPrevMonthButtonDisabled() {
        return _isPrevMonthButtonDisabled.apply(this, arguments);
      }

      return isPrevMonthButtonDisabled;
    }()
  }, {
    key: "isNextMonthButtonDisabled",
    value: function () {
      var _isNextMonthButtonDisabled = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee13() {
        var buttonEl;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context13.sent[1];
                _context13.next = 5;
                return buttonEl.isEnabled();

              case 5:
                return _context13.abrupt("return", !_context13.sent);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function isNextMonthButtonDisabled() {
        return _isNextMonthButtonDisabled.apply(this, arguments);
      }

      return isNextMonthButtonDisabled;
    }()
  }, {
    key: "isPrevMonthButtonFocused",
    value: function () {
      var _isPrevMonthButtonFocused = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee14() {
        var buttonEl;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context14.sent[0];
                _context14.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context14.t0 = _context14.sent;

                if (!_context14.t0) {
                  _context14.next = 10;
                  break;
                }

                _context14.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context14.t0 = _context14.sent;

              case 10:
                return _context14.abrupt("return", _context14.t0);

              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function isPrevMonthButtonFocused() {
        return _isPrevMonthButtonFocused.apply(this, arguments);
      }

      return isPrevMonthButtonFocused;
    }()
  }, {
    key: "isNextMonthButtonFocused",
    value: function () {
      var _isNextMonthButtonFocused = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee15() {
        var buttonEl;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context15.sent[1];
                _context15.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context15.t0 = _context15.sent;

                if (!_context15.t0) {
                  _context15.next = 10;
                  break;
                }

                _context15.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context15.t0 = _context15.sent;

              case 10:
                return _context15.abrupt("return", _context15.t0);

              case 11:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function isNextMonthButtonFocused() {
        return _isNextMonthButtonFocused.apply(this, arguments);
      }

      return isNextMonthButtonFocused;
    }()
  }, {
    key: "isYearSelectFocused",
    value: function () {
      var _isYearSelectFocused = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee16() {
        var selectEl;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return $(this.rootElement).$('select');

              case 2:
                selectEl = _context16.sent;
                _context16.next = 5;
                return selectEl.isExisting();

              case 5:
                _context16.t0 = _context16.sent;

                if (!_context16.t0) {
                  _context16.next = 10;
                  break;
                }

                _context16.next = 9;
                return selectEl.isFocused();

              case 9:
                _context16.t0 = _context16.sent;

              case 10:
                return _context16.abrupt("return", _context16.t0);

              case 11:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function isYearSelectFocused() {
        return _isYearSelectFocused.apply(this, arguments);
      }

      return isYearSelectFocused;
    }()
  }]);
  return PageSingleCalendar;
}();

module.exports = PageSingleCalendar;