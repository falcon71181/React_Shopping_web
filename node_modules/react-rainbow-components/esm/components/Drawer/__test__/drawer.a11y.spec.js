import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { mount } from 'enzyme';
import axe from '../../../../axe';
import Drawer from '..';
import Button from '../../Button';
describe('<Drawer/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var wrapper, html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            wrapper = mount(React.createElement(Drawer, {
              isOpen: true,
              header: "Drawer a11y",
              footer: React.createElement(Button, {
                label: "button in drawer footer"
              })
            }, React.createElement("p", null, "A rainbow is a meteorological phenomenon ...")));
            html = wrapper.html();
            _context.next = 5;
            return axe(html);

          case 5:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});