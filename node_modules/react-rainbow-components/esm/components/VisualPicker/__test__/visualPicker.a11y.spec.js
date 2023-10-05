import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import VisualPicker from '..';
import VisualPickerOption from '../../VisualPickerOption';
import VisualPickerOptionFooter from '../../VisualPickerOptionFooter';
describe('<VisualPicker/>', function () {
  it('should be accessible when label is passed', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(VisualPicker, {
              label: "Our Rainbow Options",
              value: "option-1"
            }, React.createElement(VisualPickerOption, {
              name: "option-1",
              footer: React.createElement(VisualPickerOptionFooter, {
                label: "Rainbow Basic",
                description: "Complete service for teams of any size."
              })
            }, React.createElement("h3", null, "user/month")), React.createElement(VisualPickerOption, {
              name: "option-2",
              footer: React.createElement(VisualPickerOptionFooter, {
                label: "Rainbow Basic",
                description: "Everything you need to take support."
              })
            }, React.createElement("h3", null, "user/month"))));
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
  it('should be accessible when multiple option are selected', _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(VisualPicker, {
              label: "Our Rainbow Options",
              value: ['option-1', 'option-2']
            }, React.createElement(VisualPickerOption, {
              name: "option-1",
              footer: React.createElement(VisualPickerOptionFooter, {
                label: "Rainbow Basic",
                description: "Complete service for teams of any size."
              })
            }, React.createElement("h3", null, "user/month")), React.createElement(VisualPickerOption, {
              name: "option-2",
              footer: React.createElement(VisualPickerOptionFooter, {
                label: "Rainbow Basic",
                description: "Everything you need to take support."
              })
            }, React.createElement("h3", null, "user/month"))));
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
  it('should be accessible when label or description is not passed on VisualPickerOptionFooter', _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(VisualPicker, {
              label: "Our Rainbow Options",
              value: "option-1"
            }, React.createElement(VisualPickerOption, {
              name: "option-1",
              footer: React.createElement(VisualPickerOptionFooter, {
                description: "Complete service for teams of any size."
              })
            }, React.createElement("h3", null, "user/month")), React.createElement(VisualPickerOption, {
              name: "option-2",
              footer: React.createElement(VisualPickerOptionFooter, {
                label: "Rainbow Basic"
              })
            }, React.createElement("h3", null, "user/month"))));
            _context3.next = 4;
            return axe(html);

          case 4:
            results = _context3.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});