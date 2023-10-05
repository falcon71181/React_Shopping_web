"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageTableRow = require('./row');

var HEAD_CHECKBOX_LABEL_SELECTOR = 'label[data-id="table-input-checkbox_label"]';
var HEAD_CHECKBOX_INPUT_SELECTOR = 'input[type="checkbox"]';

var PageTable = function () {
  function PageTable(rootElement) {
    (0, _classCallCheck2["default"])(this, PageTable);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageTable, [{
    key: "selectAllRows",
    value: function () {
      var _selectAllRows = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var headCheckbox;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('thead').$(HEAD_CHECKBOX_INPUT_SELECTOR);

              case 2:
                headCheckbox = _context.sent;
                _context.next = 5;
                return headCheckbox.isSelected();

              case 5:
                _context.t0 = !_context.sent;

                if (!_context.t0) {
                  _context.next = 10;
                  break;
                }

                _context.next = 9;
                return headCheckbox.getAttribute('indeterminate');

              case 9:
                _context.t0 = !_context.sent;

              case 10:
                if (!_context.t0) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return $(this.rootElement).$('thead').$(HEAD_CHECKBOX_LABEL_SELECTOR).click();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function selectAllRows() {
        return _selectAllRows.apply(this, arguments);
      }

      return selectAllRows;
    }()
  }, {
    key: "deselectAllRows",
    value: function () {
      var _deselectAllRows = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var headCheckbox;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('thead').$(HEAD_CHECKBOX_INPUT_SELECTOR);

              case 2:
                headCheckbox = _context2.sent;
                _context2.next = 5;
                return headCheckbox.isSelected();

              case 5:
                _context2.t0 = _context2.sent;

                if (_context2.t0) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 9;
                return headCheckbox.getAttribute('indeterminate');

              case 9:
                _context2.t0 = _context2.sent;

              case 10:
                if (!_context2.t0) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 13;
                return $(this.rootElement).$('thead').$(HEAD_CHECKBOX_LABEL_SELECTOR).click();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deselectAllRows() {
        return _deselectAllRows.apply(this, arguments);
      }

      return deselectAllRows;
    }()
  }, {
    key: "getRow",
    value: function () {
      var _getRow = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(rowPosition) {
        var rows;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).$$('tbody > tr[data-id="table_body-row"]');

              case 2:
                rows = _context3.sent;

                if (!rows[rowPosition]) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", new PageTableRow("".concat(this.rootElement, " tr[data-id=\"table_body-row\"]:nth-child(").concat(rowPosition + 1, ")")));

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getRow(_x) {
        return _getRow.apply(this, arguments);
      }

      return getRow;
    }()
  }, {
    key: "waitUntilDataIsLoaded",
    value: function () {
      var _waitUntilDataIsLoaded = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return $(_this.rootElement).$('div[data-id="table_body--loading"]').isDisplayed();

                        case 2:
                          _context4.t0 = !_context4.sent;

                          if (!_context4.t0) {
                            _context4.next = 7;
                            break;
                          }

                          _context4.next = 6;
                          return $(_this.rootElement).$('tr[data-id="table_body-row"]').isDisplayed();

                        case 6:
                          _context4.t0 = _context4.sent;

                        case 7:
                          return _context4.abrupt("return", _context4.t0);

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                })));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function waitUntilDataIsLoaded() {
        return _waitUntilDataIsLoaded.apply(this, arguments);
      }

      return waitUntilDataIsLoaded;
    }()
  }]);
  return PageTable;
}();

module.exports = PageTable;