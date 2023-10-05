import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageMonthlyCalendar = function () {
  function PageMonthlyCalendar(rootElement) {
    _classCallCheck(this, PageMonthlyCalendar);

    this.rootElement = rootElement;
  }

  _createClass(PageMonthlyCalendar, [{
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
    key: "clickSelectYear",
    value: function () {
      var _clickSelectYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
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
    key: "getSelectedMonth",
    value: function () {
      var _getSelectedMonth = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", $(this.rootElement).$('h3[data-id=month]').getText());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getSelectedMonth() {
        return _getSelectedMonth.apply(this, arguments);
      }

      return getSelectedMonth;
    }()
  }, {
    key: "getSelectedYear",
    value: function () {
      var _getSelectedYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", $(this.rootElement).$('select').getValue());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSelectedYear() {
        return _getSelectedYear.apply(this, arguments);
      }

      return getSelectedYear;
    }()
  }, {
    key: "setYear",
    value: function () {
      var _setYear = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6(value) {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(this.rootElement).$('select').selectByVisibleText(value);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function setYear(_x) {
        return _setYear.apply(this, arguments);
      }

      return setYear;
    }()
  }, {
    key: "isPrevMonthButtonDisabled",
    value: function () {
      var _isPrevMonthButtonDisabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context7.sent[0];
                _context7.next = 5;
                return buttonEl.isEnabled();

              case 5:
                return _context7.abrupt("return", !_context7.sent);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function isPrevMonthButtonDisabled() {
        return _isPrevMonthButtonDisabled.apply(this, arguments);
      }

      return isPrevMonthButtonDisabled;
    }()
  }, {
    key: "isNextMonthButtonDisabled",
    value: function () {
      var _isNextMonthButtonDisabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8() {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return $(this.rootElement).$$('button[data-id=button-icon-element]');

              case 2:
                buttonEl = _context8.sent[1];
                _context8.next = 5;
                return buttonEl.isEnabled();

              case 5:
                return _context8.abrupt("return", !_context8.sent);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function isNextMonthButtonDisabled() {
        return _isNextMonthButtonDisabled.apply(this, arguments);
      }

      return isNextMonthButtonDisabled;
    }()
  }]);

  return PageMonthlyCalendar;
}();

module.exports = PageMonthlyCalendar;