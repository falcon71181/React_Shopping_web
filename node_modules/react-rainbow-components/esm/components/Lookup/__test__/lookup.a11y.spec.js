import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import Lookup from '..';
describe('<Lookup/>', function () {
  it.skip('should be accessible when the value typed do not match', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(Lookup, {
              label: "Place of Birth",
              value: "London"
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
  it('should be accessible when a value is selected', _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(Lookup, {
              label: "Place of Birth",
              value: {
                label: 'London'
              }
            }));
            _context2.next = 4;
            return axe(html);

          case 4:
            results = _context2.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});