import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var CHECKBOX_LABEL_SELECTOR = '.rainbow-table_cell-checkbox label';
var CHECKBOX_INPUT_SELECTOR = '.rainbow-table_cell-checkbox input';

var PageTableRow = function () {
  function PageTableRow(rootElement) {
    _classCallCheck(this, PageTableRow);

    this.rootElement = rootElement;
  }

  _createClass(PageTableRow, [{
    key: "selectRow",
    value: function () {
      var _selectRow = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.isRowSelected();

              case 2:
                if (_context.sent) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return $(this.rootElement).$(CHECKBOX_LABEL_SELECTOR).click();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function selectRow() {
        return _selectRow.apply(this, arguments);
      }

      return selectRow;
    }()
  }, {
    key: "deselectRow",
    value: function () {
      var _deselectRow = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.isRowSelected();

              case 2:
                if (!_context2.sent) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return $(this.rootElement).$(CHECKBOX_LABEL_SELECTOR).click();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deselectRow() {
        return _deselectRow.apply(this, arguments);
      }

      return deselectRow;
    }()
  }, {
    key: "isRowSelected",
    value: function () {
      var _isRowSelected = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", $(this.rootElement).$(CHECKBOX_INPUT_SELECTOR).isSelected());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isRowSelected() {
        return _isRowSelected.apply(this, arguments);
      }

      return isRowSelected;
    }()
  }, {
    key: "isRowSelectionDisabled",
    value: function () {
      var _isRowSelectionDisabled = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$(CHECKBOX_INPUT_SELECTOR).isEnabled();

              case 2:
                return _context4.abrupt("return", !_context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isRowSelectionDisabled() {
        return _isRowSelectionDisabled.apply(this, arguments);
      }

      return isRowSelectionDisabled;
    }()
  }]);

  return PageTableRow;
}();

module.exports = PageTableRow;