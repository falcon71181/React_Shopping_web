import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import CheckboxGroup from '..';
var options = [{
  value: 'checkboxOne',
  label: 'Checkbox One'
}, {
  value: 'checkboxTwo',
  label: 'Checkbox Two'
}, {
  value: 'checkboxThree',
  label: 'Checkbox Three'
}];
describe('<CheckboxGroup/>', function () {
  it('should be accessible when all options have a label passed', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(CheckboxGroup, {
              label: "Checkbox Group Label",
              options: options
            }));
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