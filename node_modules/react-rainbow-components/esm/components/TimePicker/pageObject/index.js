import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var timePickerModalId = '#time-picker_modal';
var timeInputId = '#time-picker_time-input';

var PageTimePicker = function () {
  function PageTimePicker(rootElement) {
    _classCallCheck(this, PageTimePicker);

    this.rootElement = rootElement;
  }

  _createClass(PageTimePicker, [{
    key: "clickTimeInput",
    value: function () {
      var _clickTimeInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$(timeInputId).$('input').click();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickTimeInput() {
        return _clickTimeInput.apply(this, arguments);
      }

      return clickTimeInput;
    }()
  }, {
    key: "clickLabel",
    value: function () {
      var _clickLabel = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('label').click();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickLabel() {
        return _clickLabel.apply(this, arguments);
      }

      return clickLabel;
    }()
  }, {
    key: "clickUpButton",
    value: function () {
      var _clickUpButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(timePickerModalId).$('button[id="time-picker_up-button"]').click();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function clickUpButton() {
        return _clickUpButton.apply(this, arguments);
      }

      return clickUpButton;
    }()
  }, {
    key: "clickDownButton",
    value: function () {
      var _clickDownButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(timePickerModalId).$('button[id="time-picker_down-button"]').click();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function clickDownButton() {
        return _clickDownButton.apply(this, arguments);
      }

      return clickDownButton;
    }()
  }, {
    key: "clickCancelButton",
    value: function () {
      var _clickCancelButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return $(timePickerModalId).$('button[id="time-picker_cancel-button"]').click();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function clickCancelButton() {
        return _clickCancelButton.apply(this, arguments);
      }

      return clickCancelButton;
    }()
  }, {
    key: "clickOkButton",
    value: function () {
      var _clickOkButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6() {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(timePickerModalId).$('button[id="time-picker_ok-button"]').click();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function clickOkButton() {
        return _clickOkButton.apply(this, arguments);
      }

      return clickOkButton;
    }()
  }, {
    key: "isOpen",
    value: function () {
      var _isOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return $(timePickerModalId).isDisplayed();

              case 2:
                _context7.t6 = _context7.sent;

                if (!_context7.t6) {
                  _context7.next = 9;
                  break;
                }

                _context7.next = 6;
                return $(timePickerModalId).$('button[id="time-picker_cancel-button"]');

              case 6:
                _context7.next = 8;
                return _context7.sent.isDisplayed();

              case 8:
                _context7.t6 = _context7.sent;

              case 9:
                _context7.t5 = _context7.t6;

                if (!_context7.t5) {
                  _context7.next = 16;
                  break;
                }

                _context7.next = 13;
                return $(timePickerModalId).$('button[id="time-picker_ok-button"]');

              case 13:
                _context7.next = 15;
                return _context7.sent.isDisplayed();

              case 15:
                _context7.t5 = _context7.sent;

              case 16:
                _context7.t4 = _context7.t5;

                if (!_context7.t4) {
                  _context7.next = 23;
                  break;
                }

                _context7.next = 20;
                return $(timePickerModalId).$('button[id="time-picker_up-button"]');

              case 20:
                _context7.next = 22;
                return _context7.sent.isDisplayed();

              case 22:
                _context7.t4 = _context7.sent;

              case 23:
                _context7.t3 = _context7.t4;

                if (!_context7.t3) {
                  _context7.next = 30;
                  break;
                }

                _context7.next = 27;
                return $(timePickerModalId).$('button[id="time-picker_down-button"]');

              case 27:
                _context7.next = 29;
                return _context7.sent.isDisplayed();

              case 29:
                _context7.t3 = _context7.sent;

              case 30:
                _context7.t2 = _context7.t3;

                if (!_context7.t2) {
                  _context7.next = 37;
                  break;
                }

                _context7.next = 34;
                return $(timePickerModalId).$('input[data-id="minutes"]');

              case 34:
                _context7.next = 36;
                return _context7.sent.isDisplayed();

              case 36:
                _context7.t2 = _context7.sent;

              case 37:
                _context7.t1 = _context7.t2;

                if (!_context7.t1) {
                  _context7.next = 44;
                  break;
                }

                _context7.next = 41;
                return $(timePickerModalId).$('input[data-id="hour"]');

              case 41:
                _context7.next = 43;
                return _context7.sent.isDisplayed();

              case 43:
                _context7.t1 = _context7.sent;

              case 44:
                _context7.t0 = _context7.t1;

                if (!_context7.t0) {
                  _context7.next = 51;
                  break;
                }

                _context7.next = 48;
                return $(timePickerModalId).$('input[aria-label="am-pm selector"]');

              case 48:
                _context7.next = 50;
                return _context7.sent.isDisplayed();

              case 50:
                _context7.t0 = _context7.sent;

              case 51:
                return _context7.abrupt("return", _context7.t0);

              case 52:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function isOpen() {
        return _isOpen.apply(this, arguments);
      }

      return isOpen;
    }()
  }, {
    key: "getTimeValue",
    value: function () {
      var _getTimeValue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8() {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", $(this.rootElement).$(timeInputId).$('input').getValue());

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getTimeValue() {
        return _getTimeValue.apply(this, arguments);
      }

      return getTimeValue;
    }()
  }, {
    key: "hasFocusTimeInput",
    value: function () {
      var _hasFocusTimeInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee9() {
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", $(this.rootElement).$(timeInputId).$('input').isFocused());

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function hasFocusTimeInput() {
        return _hasFocusTimeInput.apply(this, arguments);
      }

      return hasFocusTimeInput;
    }()
  }, {
    key: "hasFocusHourInput",
    value: function () {
      var _hasFocusHourInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee10() {
        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", $(timePickerModalId).$('input[data-id="hour"]').isFocused());

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function hasFocusHourInput() {
        return _hasFocusHourInput.apply(this, arguments);
      }

      return hasFocusHourInput;
    }()
  }, {
    key: "getHourValue",
    value: function () {
      var _getHourValue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee11() {
        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", $(timePickerModalId).$('input[data-id="hour"]').getValue());

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function getHourValue() {
        return _getHourValue.apply(this, arguments);
      }

      return getHourValue;
    }()
  }, {
    key: "hasFocusMinutesInput",
    value: function () {
      var _hasFocusMinutesInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee12() {
        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", $(timePickerModalId).$('input[data-id="minutes"]').isFocused());

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function hasFocusMinutesInput() {
        return _hasFocusMinutesInput.apply(this, arguments);
      }

      return hasFocusMinutesInput;
    }()
  }, {
    key: "getMinutesValue",
    value: function () {
      var _getMinutesValue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee13() {
        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", $(timePickerModalId).$('input[data-id="minutes"]').getValue());

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function getMinutesValue() {
        return _getMinutesValue.apply(this, arguments);
      }

      return getMinutesValue;
    }()
  }, {
    key: "hasFocusAmPmSelect",
    value: function () {
      var _hasFocusAmPmSelect = _asyncToGenerator(_regeneratorRuntime.mark(function _callee14() {
        return _regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", $(timePickerModalId).$('fieldset[role="presentation"]').isFocused());

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function hasFocusAmPmSelect() {
        return _hasFocusAmPmSelect.apply(this, arguments);
      }

      return hasFocusAmPmSelect;
    }()
  }, {
    key: "isAmSelected",
    value: function () {
      var _isAmSelected = _asyncToGenerator(_regeneratorRuntime.mark(function _callee16() {
        return _regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee15() {
                  return _regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          return _context15.abrupt("return", $(timePickerModalId).$('fieldset[role="presentation"]').isFocused());

                        case 1:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15);
                })));

              case 2:
                return _context16.abrupt("return", $(timePickerModalId).$('input[value="AM"]').isSelected());

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      function isAmSelected() {
        return _isAmSelected.apply(this, arguments);
      }

      return isAmSelected;
    }()
  }, {
    key: "isPmSelected",
    value: function () {
      var _isPmSelected = _asyncToGenerator(_regeneratorRuntime.mark(function _callee18() {
        return _regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee17() {
                  return _regeneratorRuntime.wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          return _context17.abrupt("return", $(timePickerModalId).$('fieldset[role="presentation"]').isFocused());

                        case 1:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee17);
                })));

              case 2:
                return _context18.abrupt("return", $(timePickerModalId).$('input[value="PM"]').isSelected());

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function isPmSelected() {
        return _isPmSelected.apply(this, arguments);
      }

      return isPmSelected;
    }()
  }, {
    key: "setHourValue",
    value: function () {
      var _setHourValue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee19(value) {
        return _regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return $(timePickerModalId).$('input[data-id="hour"]').setValue(value);

              case 2:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      function setHourValue(_x) {
        return _setHourValue.apply(this, arguments);
      }

      return setHourValue;
    }()
  }, {
    key: "setMinutesValue",
    value: function () {
      var _setMinutesValue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee20(value) {
        return _regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return $(timePickerModalId).$('input[data-id="minutes"]').setValue(value);

              case 2:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function setMinutesValue(_x2) {
        return _setMinutesValue.apply(this, arguments);
      }

      return setMinutesValue;
    }()
  }, {
    key: "waitUntilOpen",
    value: function () {
      var _waitUntilOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee22() {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee21() {
                  return _regeneratorRuntime.wrap(function _callee21$(_context21) {
                    while (1) {
                      switch (_context21.prev = _context21.next) {
                        case 0:
                          return _context21.abrupt("return", _this.isOpen());

                        case 1:
                        case "end":
                          return _context21.stop();
                      }
                    }
                  }, _callee21);
                })));

              case 2:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }));

      function waitUntilOpen() {
        return _waitUntilOpen.apply(this, arguments);
      }

      return waitUntilOpen;
    }()
  }, {
    key: "waitUntilClose",
    value: function () {
      var _waitUntilClose = _asyncToGenerator(_regeneratorRuntime.mark(function _callee24() {
        var _this2 = this;

        return _regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee23() {
                  return _regeneratorRuntime.wrap(function _callee23$(_context23) {
                    while (1) {
                      switch (_context23.prev = _context23.next) {
                        case 0:
                          _context23.next = 2;
                          return _this2.isOpen();

                        case 2:
                          return _context23.abrupt("return", !_context23.sent);

                        case 3:
                        case "end":
                          return _context23.stop();
                      }
                    }
                  }, _callee23);
                })));

              case 2:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }));

      function waitUntilClose() {
        return _waitUntilClose.apply(this, arguments);
      }

      return waitUntilClose;
    }()
  }]);

  return PageTimePicker;
}();

module.exports = PageTimePicker;