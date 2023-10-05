import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import Picklist from '..';
import PicklistOption from '../../PicklistOption';
describe('<Picklist/>', function () {
  it.skip('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(Picklist, {
              name: "Picklist testing a11y",
              title: "Picklist testing a11y",
              label: "Select Building",
              hideLabel: true,
              assistiveText: "Picklist",
              value: {
                name: 'option 1',
                label: 'Experimental Building'
              }
            }, React.createElement(PicklistOption, {
              name: "header",
              label: "Your Buildings",
              variant: "header"
            }), React.createElement(PicklistOption, {
              name: "option 1",
              label: "Experimental Building"
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