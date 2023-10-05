import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageDoubleCalendar = function () {
  function PageDoubleCalendar(rootElement) {
    _classCallCheck(this, PageDoubleCalendar);

    this.rootElement = rootElement;
  }

  _createClass(PageDoubleCalendar, [{
    key: "clickPrevMonthButton",
    value: function () {
      var _clickPrevMonthButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _clickNextMonthButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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
    key: "isPrevMonthButtonDisabled",
    value: function () {
      var _isPrevMonthButtonDisabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context3.sent[0];
                _context3.next = 5;
                return buttonEl.isEnabled();

              case 5:
                return _context3.abrupt("return", !_context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isPrevMonthButtonDisabled() {
        return _isPrevMonthButtonDisabled.apply(this, arguments);
      }

      return isPrevMonthButtonDisabled;
    }()
  }, {
    key: "isNextMonthButtonDisabled",
    value: function () {
      var _isNextMonthButtonDisabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context4.sent[1];
                _context4.next = 5;
                return buttonEl.isEnabled();

              case 5:
                return _context4.abrupt("return", !_context4.sent);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isNextMonthButtonDisabled() {
        return _isNextMonthButtonDisabled.apply(this, arguments);
      }

      return isNextMonthButtonDisabled;
    }()
  }, {
    key: "isPrevMonthButtonFocused",
    value: function () {
      var _isPrevMonthButtonFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context5.sent[0];
                _context5.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context5.t0 = _context5.sent;

                if (!_context5.t0) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context5.t0 = _context5.sent;

              case 10:
                return _context5.abrupt("return", _context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function isPrevMonthButtonFocused() {
        return _isPrevMonthButtonFocused.apply(this, arguments);
      }

      return isPrevMonthButtonFocused;
    }()
  }, {
    key: "isNextMonthButtonFocused",
    value: function () {
      var _isNextMonthButtonFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6() {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context6.sent[1];
                _context6.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context6.t0 = _context6.sent;

                if (!_context6.t0) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context6.t0 = _context6.sent;

              case 10:
                return _context6.abrupt("return", _context6.t0);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function isNextMonthButtonFocused() {
        return _isNextMonthButtonFocused.apply(this, arguments);
      }

      return isNextMonthButtonFocused;
    }()
  }, {
    key: "clickLeftMonthSelectYear",
    value: function () {
      var _clickLeftMonthSelectYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return $(this.rootElement).$$('select')[0].click();

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function clickLeftMonthSelectYear() {
        return _clickLeftMonthSelectYear.apply(this, arguments);
      }

      return clickLeftMonthSelectYear;
    }()
  }, {
    key: "clickLeftMonthDay",
    value: function () {
      var _clickLeftMonthDay = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[0].$("button=".concat(day));

              case 2:
                buttonEl = _context8.sent;
                _context8.next = 5;
                return buttonEl.isExisting();

              case 5:
                if (!_context8.sent) {
                  _context8.next = 10;
                  break;
                }

                _context8.next = 8;
                return buttonEl.scrollIntoView();

              case 8:
                _context8.next = 10;
                return buttonEl.click();

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function clickLeftMonthDay(_x) {
        return _clickLeftMonthDay.apply(this, arguments);
      }

      return clickLeftMonthDay;
    }()
  }, {
    key: "getLeftSelectedMonth",
    value: function () {
      var _getLeftSelectedMonth = _asyncToGenerator(_regeneratorRuntime.mark(function _callee9() {
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", $(this.rootElement).$$('h3[data-id=month]')[0].getText());

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getLeftSelectedMonth() {
        return _getLeftSelectedMonth.apply(this, arguments);
      }

      return getLeftSelectedMonth;
    }()
  }, {
    key: "getLeftMonthSelectedYear",
    value: function () {
      var _getLeftMonthSelectedYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee10() {
        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", $(this.rootElement).$$('select')[0].getValue());

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getLeftMonthSelectedYear() {
        return _getLeftMonthSelectedYear.apply(this, arguments);
      }

      return getLeftMonthSelectedYear;
    }()
  }, {
    key: "getLeftMonthSelectedDay",
    value: function () {
      var _getLeftMonthSelectedDay = _asyncToGenerator(_regeneratorRuntime.mark(function _callee11() {
        var day;
        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[0].$('button[data-selected=true]');

              case 2:
                day = _context11.sent;
                _context11.next = 5;
                return day.isExisting();

              case 5:
                if (!_context11.sent) {
                  _context11.next = 7;
                  break;
                }

                return _context11.abrupt("return", day.getText());

              case 7:
                return _context11.abrupt("return", undefined);

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getLeftMonthSelectedDay() {
        return _getLeftMonthSelectedDay.apply(this, arguments);
      }

      return getLeftMonthSelectedDay;
    }()
  }, {
    key: "setLeftMonthYear",
    value: function () {
      var _setLeftMonthYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee12(value) {
        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return $(this.rootElement).$$('select')[0].selectByVisibleText(value);

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function setLeftMonthYear(_x2) {
        return _setLeftMonthYear.apply(this, arguments);
      }

      return setLeftMonthYear;
    }()
  }, {
    key: "isLeftMonthDayFocused",
    value: function () {
      var _isLeftMonthDayFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee13(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[0].$("button=".concat(day));

              case 2:
                buttonEl = _context13.sent;
                _context13.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context13.t0 = _context13.sent;

                if (!_context13.t0) {
                  _context13.next = 10;
                  break;
                }

                _context13.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context13.t0 = _context13.sent;

              case 10:
                return _context13.abrupt("return", _context13.t0);

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function isLeftMonthDayFocused(_x3) {
        return _isLeftMonthDayFocused.apply(this, arguments);
      }

      return isLeftMonthDayFocused;
    }()
  }, {
    key: "isLeftMonthDaySelected",
    value: function () {
      var _isLeftMonthDaySelected = _asyncToGenerator(_regeneratorRuntime.mark(function _callee14(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[0].$("button=".concat(day));

              case 2:
                buttonEl = _context14.sent;
                _context14.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context14.t0 = _context14.sent;

                if (!_context14.t0) {
                  _context14.next = 11;
                  break;
                }

                _context14.next = 9;
                return buttonEl.getAttribute('data-selected');

              case 9:
                _context14.t1 = _context14.sent;
                _context14.t0 = _context14.t1 === 'true';

              case 11:
                return _context14.abrupt("return", _context14.t0);

              case 12:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function isLeftMonthDaySelected(_x4) {
        return _isLeftMonthDaySelected.apply(this, arguments);
      }

      return isLeftMonthDaySelected;
    }()
  }, {
    key: "isLeftMonthDayEnabled",
    value: function () {
      var _isLeftMonthDayEnabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee15(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[0].$("button=".concat(day));

              case 2:
                buttonEl = _context15.sent;
                return _context15.abrupt("return", buttonEl.isExisting());

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function isLeftMonthDayEnabled(_x5) {
        return _isLeftMonthDayEnabled.apply(this, arguments);
      }

      return isLeftMonthDayEnabled;
    }()
  }, {
    key: "isLeftYearSelectFocused",
    value: function () {
      var _isLeftYearSelectFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee16() {
        var selectEl;
        return _regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return $(this.rootElement).$$('select');

              case 2:
                selectEl = _context16.sent[0];
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

      function isLeftYearSelectFocused() {
        return _isLeftYearSelectFocused.apply(this, arguments);
      }

      return isLeftYearSelectFocused;
    }()
  }, {
    key: "clickRightMonthSelectYear",
    value: function () {
      var _clickRightMonthSelectYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee17() {
        return _regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return $(this.rootElement).$$('select')[1].click();

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function clickRightMonthSelectYear() {
        return _clickRightMonthSelectYear.apply(this, arguments);
      }

      return clickRightMonthSelectYear;
    }()
  }, {
    key: "clickRightMonthDay",
    value: function () {
      var _clickRightMonthDay = _asyncToGenerator(_regeneratorRuntime.mark(function _callee18(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[1].$("button=".concat(day));

              case 2:
                buttonEl = _context18.sent;
                _context18.next = 5;
                return buttonEl.isExisting();

              case 5:
                if (!_context18.sent) {
                  _context18.next = 10;
                  break;
                }

                _context18.next = 8;
                return buttonEl.scrollIntoView();

              case 8:
                _context18.next = 10;
                return buttonEl.click();

              case 10:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function clickRightMonthDay(_x6) {
        return _clickRightMonthDay.apply(this, arguments);
      }

      return clickRightMonthDay;
    }()
  }, {
    key: "getRightSelectedMonth",
    value: function () {
      var _getRightSelectedMonth = _asyncToGenerator(_regeneratorRuntime.mark(function _callee19() {
        return _regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", $(this.rootElement).$$('h3[data-id=month]')[1].getText());

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getRightSelectedMonth() {
        return _getRightSelectedMonth.apply(this, arguments);
      }

      return getRightSelectedMonth;
    }()
  }, {
    key: "getRightMonthSelectedYear",
    value: function () {
      var _getRightMonthSelectedYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee20() {
        return _regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", $(this.rootElement).$$('select')[1].getValue());

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getRightMonthSelectedYear() {
        return _getRightMonthSelectedYear.apply(this, arguments);
      }

      return getRightMonthSelectedYear;
    }()
  }, {
    key: "getRightMonthSelectedDay",
    value: function () {
      var _getRightMonthSelectedDay = _asyncToGenerator(_regeneratorRuntime.mark(function _callee21() {
        var day;
        return _regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[1].$('button[data-selected=true]');

              case 2:
                day = _context21.sent;
                _context21.next = 5;
                return day.isExisting();

              case 5:
                if (!_context21.sent) {
                  _context21.next = 7;
                  break;
                }

                return _context21.abrupt("return", day.getText());

              case 7:
                return _context21.abrupt("return", undefined);

              case 8:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function getRightMonthSelectedDay() {
        return _getRightMonthSelectedDay.apply(this, arguments);
      }

      return getRightMonthSelectedDay;
    }()
  }, {
    key: "setRightMonthYear",
    value: function () {
      var _setRightMonthYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee22(value) {
        return _regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return $(this.rootElement).$$('select')[1].selectByVisibleText(value);

              case 2:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function setRightMonthYear(_x7) {
        return _setRightMonthYear.apply(this, arguments);
      }

      return setRightMonthYear;
    }()
  }, {
    key: "isRightMonthDayFocused",
    value: function () {
      var _isRightMonthDayFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee23(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[1].$("button=".concat(day));

              case 2:
                buttonEl = _context23.sent;
                _context23.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context23.t0 = _context23.sent;

                if (!_context23.t0) {
                  _context23.next = 10;
                  break;
                }

                _context23.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context23.t0 = _context23.sent;

              case 10:
                return _context23.abrupt("return", _context23.t0);

              case 11:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function isRightMonthDayFocused(_x8) {
        return _isRightMonthDayFocused.apply(this, arguments);
      }

      return isRightMonthDayFocused;
    }()
  }, {
    key: "isRightMonthDaySelected",
    value: function () {
      var _isRightMonthDaySelected = _asyncToGenerator(_regeneratorRuntime.mark(function _callee24(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[1].$("button=".concat(day));

              case 2:
                buttonEl = _context24.sent;
                _context24.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context24.t0 = _context24.sent;

                if (!_context24.t0) {
                  _context24.next = 11;
                  break;
                }

                _context24.next = 9;
                return buttonEl.getAttribute('data-selected');

              case 9:
                _context24.t1 = _context24.sent;
                _context24.t0 = _context24.t1 === 'true';

              case 11:
                return _context24.abrupt("return", _context24.t0);

              case 12:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function isRightMonthDaySelected(_x9) {
        return _isRightMonthDaySelected.apply(this, arguments);
      }

      return isRightMonthDaySelected;
    }()
  }, {
    key: "isRightMonthDayEnabled",
    value: function () {
      var _isRightMonthDayEnabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee25(day) {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return $(this.rootElement).$$('table[role=grid]')[1].$("button=".concat(day));

              case 2:
                buttonEl = _context25.sent;
                return _context25.abrupt("return", buttonEl.isExisting());

              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function isRightMonthDayEnabled(_x10) {
        return _isRightMonthDayEnabled.apply(this, arguments);
      }

      return isRightMonthDayEnabled;
    }()
  }, {
    key: "isRightYearSelectFocused",
    value: function () {
      var _isRightYearSelectFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee26() {
        var selectEl;
        return _regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return $(this.rootElement).$$('select');

              case 2:
                selectEl = _context26.sent[1];
                _context26.next = 5;
                return selectEl.isExisting();

              case 5:
                _context26.t0 = _context26.sent;

                if (!_context26.t0) {
                  _context26.next = 10;
                  break;
                }

                _context26.next = 9;
                return selectEl.isFocused();

              case 9:
                _context26.t0 = _context26.sent;

              case 10:
                return _context26.abrupt("return", _context26.t0);

              case 11:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function isRightYearSelectFocused() {
        return _isRightYearSelectFocused.apply(this, arguments);
      }

      return isRightYearSelectFocused;
    }()
  }]);

  return PageDoubleCalendar;
}();

module.exports = PageDoubleCalendar;