import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { render } from '@testing-library/react';
import CarouselCard from '../index';
import CarouselImage from '../../CarouselImage';
describe('<CarouselCard />', function () {
  it('should render the children passed', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var _render, getAllByRole;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = render(React.createElement(CarouselCard, {
              disableAutoScroll: true
            }, React.createElement(CarouselImage, {
              src: "images/illustrations/rainbows-background.svg",
              header: "First Card",
              description: "First card description.",
              alternativeText: "First card accessible description.",
              href: "/"
            }), React.createElement(CarouselImage, {
              src: "images/illustrations/rainbow-background-2.svg",
              header: "Second Card",
              description: "Second card description.",
              alternativeText: "Second card accessible description.",
              href: "/"
            }), React.createElement(CarouselImage, {
              src: "images/illustrations/Illustration-rainbow-1.svg",
              header: "Third Card",
              description: "Third card description.",
              alternativeText: "Third card accessible description.",
              href: "/"
            }))), getAllByRole = _render.getAllByRole;
            expect(getAllByRole('tab').length).toBe(3);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should set the right state when disableAutoScroll is passed', function () {
    var _render2 = render(React.createElement(CarouselCard, {
      disableAutoScroll: true
    })),
        getByTitle = _render2.getByTitle;

    expect(getByTitle('play')).toBeDefined();
  });
});