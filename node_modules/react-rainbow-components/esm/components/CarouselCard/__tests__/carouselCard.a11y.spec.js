import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import CarouselCard from '..';
import CarouselImage from '../../CarouselImage';
describe('<CarouselCard/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(CarouselCard, null, React.createElement(CarouselImage, {
              src: "images/illustrations/Illustration-rainbow-4.svg",
              header: "First Card",
              description: "First card description.",
              alternativeText: "First card accessible description.",
              href: "/"
            }), React.createElement(CarouselImage, {
              src: "images/illustrations/Illustration-rainbow-3.svg",
              header: "Second Card",
              description: "Second card description.",
              alternativeText: "Second card accessible description.",
              href: "/"
            }), React.createElement(CarouselImage, {
              src: "images/illustrations/Illustration-rainbow-5.svg",
              header: "Third Card",
              description: "Third card description.",
              alternativeText: "Third card accessible description.",
              href: "/"
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