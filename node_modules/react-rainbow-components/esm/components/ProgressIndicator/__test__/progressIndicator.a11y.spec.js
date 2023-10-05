import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import ProgressIndicator from '..';
import ProgressStep from '../../ProgressStep';
describe('<ProgressIndicator/>', function () {
  it('should be accessible when label is passed', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(ProgressIndicator, null, React.createElement(ProgressStep, {
              name: "step-1",
              label: "Step 1"
            }), React.createElement(ProgressStep, {
              name: "step-2",
              label: "Step 2"
            }), React.createElement(ProgressStep, {
              name: "step-3",
              label: "Step 3"
            }), React.createElement(ProgressStep, {
              name: "step-4",
              label: "Step 4"
            }), React.createElement(ProgressStep, {
              name: "step-5",
              label: "Step 5"
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
  it('should be accessible when label is not passed', _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(ProgressIndicator, null, React.createElement(ProgressStep, {
              name: "step-1"
            }), React.createElement(ProgressStep, {
              name: "step-2"
            }), React.createElement(ProgressStep, {
              name: "step-3"
            }), React.createElement(ProgressStep, {
              name: "step-4"
            }), React.createElement(ProgressStep, {
              name: "step-5"
            })));
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