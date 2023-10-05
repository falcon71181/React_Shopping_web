import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import { Chart } from '..';
import Dataset from '../../Dataset';
describe('<Chart/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(Chart, {
              labels: ['A', 'B', 'C', 'D'],
              type: "line"
            }, React.createElement(Dataset, {
              title: "Dataset 1",
              values: [23, 45, 123, 56]
            }), React.createElement(Dataset, {
              title: "Dataset 2",
              values: [66, 100, 30, 156]
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