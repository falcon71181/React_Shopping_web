import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import Table from '..';
import Column from '../../Column';
import Badge from '../../Badge';
var data = [{
  name: 'Leandro Torres',
  company: 'nexxtway',
  email: 'leandro@gmail.com',
  status: 'verified',
  id: '1234qwerty'
}];

var StatusBadge = function StatusBadge(_ref) {
  var value = _ref.value;
  return React.createElement(Badge, {
    label: value,
    variant: "lightest"
  });
};

StatusBadge.propTypes = {
  value: PropTypes.string
};
StatusBadge.defaultProps = {
  value: undefined
};
describe('<Table/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(Table, {
              keyField: "id",
              showCheckboxColumn: true,
              data: data
            }, React.createElement(Column, {
              header: "Name",
              field: "name"
            }), React.createElement(Column, {
              header: "Status",
              field: "status",
              component: StatusBadge
            }), React.createElement(Column, {
              header: "Company",
              field: "company"
            }), React.createElement(Column, {
              header: "Email",
              field: "email"
            })));
            _context.next = 4;
            return axe(html);

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