import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

var PageWeekDayPicker = function () {
  function PageWeekDayPicker(rootElement) {
    _classCallCheck(this, PageWeekDayPicker);

    this.rootElement = rootElement;
  }

  _createClass(PageWeekDayPicker, [{
    key: "clickOn",
    value: function () {
      var _clickOn = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(weekDay) {
        var inputRef;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getInputRef(weekDay);

              case 2:
                inputRef = _context.sent;
                _context.next = 5;
                return inputRef.click();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickOn(_x) {
        return _clickOn.apply(this, arguments);
      }

      return clickOn;
    }()
  }, {
    key: "getSelectedDays",
    value: function () {
      var _getSelectedDays = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        var _this = this;

        var selected;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all(weekDays.map(function () {
                  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(weekDay) {
                    var input;
                    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this.getInput(weekDay);

                          case 2:
                            input = _context2.sent;
                            _context2.next = 5;
                            return input.isSelected();

                          case 5:
                            if (!_context2.sent) {
                              _context2.next = 9;
                              break;
                            }

                            _context2.t0 = weekDay;
                            _context2.next = 10;
                            break;

                          case 9:
                            _context2.t0 = undefined;

                          case 10:
                            return _context2.abrupt("return", _context2.t0);

                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 2:
                selected = _context3.sent.filter(function (value) {
                  return value;
                });
                return _context3.abrupt("return", selected);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getSelectedDays() {
        return _getSelectedDays.apply(this, arguments);
      }

      return getSelectedDays;
    }()
  }, {
    key: "getFocusedDay",
    value: function () {
      var _getFocusedDay = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        var _this2 = this;

        var focusedDay;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Promise.all(weekDays.map(function () {
                  var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4(weekDay) {
                    var input;
                    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return _this2.getInput(weekDay);

                          case 2:
                            input = _context4.sent;
                            _context4.next = 5;
                            return input.isFocused();

                          case 5:
                            if (!_context4.sent) {
                              _context4.next = 9;
                              break;
                            }

                            _context4.t0 = weekDay;
                            _context4.next = 10;
                            break;

                          case 9:
                            _context4.t0 = undefined;

                          case 10:
                            return _context4.abrupt("return", _context4.t0);

                          case 11:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 2:
                focusedDay = _context5.sent.filter(function (value) {
                  return value;
                });
                return _context5.abrupt("return", focusedDay.length ? focusedDay[0] : undefined);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getFocusedDay() {
        return _getFocusedDay.apply(this, arguments);
      }

      return getFocusedDay;
    }()
  }, {
    key: "getInput",
    value: function () {
      var _getInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6(weekDay) {
        var index, elem;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                index = weekDays.findIndex(function (value) {
                  return value === weekDay;
                });
                _context6.next = 3;
                return $(this.rootElement).$$('input');

              case 3:
                elem = _context6.sent;
                return _context6.abrupt("return", elem[index]);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getInput(_x4) {
        return _getInput.apply(this, arguments);
      }

      return getInput;
    }()
  }, {
    key: "getInputRef",
    value: function () {
      var _getInputRef = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7(weekDay) {
        var index, elem;
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                index = weekDays.findIndex(function (value) {
                  return value === weekDay;
                });
                _context7.next = 3;
                return $(this.rootElement).$$('span');

              case 3:
                elem = _context7.sent;
                return _context7.abrupt("return", elem[index].$('label'));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getInputRef(_x5) {
        return _getInputRef.apply(this, arguments);
      }

      return getInputRef;
    }()
  }]);

  return PageWeekDayPicker;
}();

module.exports = PageWeekDayPicker;