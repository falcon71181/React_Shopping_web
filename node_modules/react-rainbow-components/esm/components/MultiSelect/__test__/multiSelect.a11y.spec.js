import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { mount } from 'enzyme';
import axe from '../../../../axe';
import MultiSelect from '..';
import Option from '../../Option';
describe('<MultiSelect/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var value, component, html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            value = [{
              label: 'First',
              name: 'first'
            }, {
              label: 'Second',
              name: 'second'
            }];
            component = mount(React.createElement(MultiSelect, {
              value: value,
              label: "Label"
            }, React.createElement(Option, {
              name: "first",
              label: "First"
            }), React.createElement(Option, {
              name: "second",
              label: "Second"
            })));
            html = component.html();
            _context.next = 6;
            return axe(html);

          case 6:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});