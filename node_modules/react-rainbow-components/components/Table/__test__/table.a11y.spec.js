"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axe = _interopRequireDefault(require("../../../../axe"));

var _ = _interopRequireDefault(require(".."));

var _Column = _interopRequireDefault(require("../../Column"));

var _Badge = _interopRequireDefault(require("../../Badge"));

var data = [{
  name: 'Leandro Torres',
  company: 'nexxtway',
  email: 'leandro@gmail.com',
  status: 'verified',
  id: '1234qwerty'
}];

var StatusBadge = function StatusBadge(_ref) {
  var value = _ref.value;
  return _react["default"].createElement(_Badge["default"], {
    label: value,
    variant: "lightest"
  });
};

StatusBadge.propTypes = {
  value: _propTypes["default"].string
};
StatusBadge.defaultProps = {
  value: undefined
};
describe('<Table/>', function () {
  it('should be accessible', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var html, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = _server["default"].renderToString(_react["default"].createElement(_["default"], {
              keyField: "id",
              showCheckboxColumn: true,
              data: data
            }, _react["default"].createElement(_Column["default"], {
              header: "Name",
              field: "name"
            }), _react["default"].createElement(_Column["default"], {
              header: "Status",
              field: "status",
              component: StatusBadge
            }), _react["default"].createElement(_Column["default"], {
              header: "Company",
              field: "company"
            }), _react["default"].createElement(_Column["default"], {
              header: "Email",
              field: "email"
            })));
            _context.next = 4;
            return (0, _axe["default"])(html);

          case 4:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});