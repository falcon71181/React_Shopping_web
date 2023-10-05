import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import Accordion from '..';
import AccordionSection from '../../AccordionSection';
describe('<Accordion/>', function () {
  it('should be accessible when assistiveText is passed on AccordionSection', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(Accordion, null, React.createElement(AccordionSection, {
              assistiveText: "first section",
              label: "Rainbow Accordion"
            }, "A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky.")));
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