import React from 'react';
import { render } from '@testing-library/react';
import CarouselImage from '../index';
describe('<CarouselImage />', function () {
  it('should render an anchor when href is passed', function () {
    var _render = render(React.createElement(CarouselImage, {
      src: "images/illustrations/rainbows-background.svg",
      header: "First Card",
      description: "First card description.",
      alternativeText: "First card accessible description.",
      href: "/"
    })),
        container = _render.container;

    expect(container.querySelector('a[data-id="carousel-image_inner-container"]')).toHaveAttribute('href', '/');
  });
  it('should render a div when href is not passed', function () {
    var _render2 = render(React.createElement(CarouselImage, {
      src: "images/illustrations/rainbows-background.svg",
      header: "First Card",
      description: "First card description.",
      alternativeText: "First card accessible description."
    })),
        container = _render2.container;

    expect(container.querySelector('div[data-id="carousel-image_inner-container"]')).toBeDefined();
  });
  it('should set tabIndex to -1 when href is passed', function () {
    var _render3 = render(React.createElement(CarouselImage, {
      src: "images/illustrations/rainbows-background.svg",
      header: "First Card",
      description: "First card description.",
      alternativeText: "First card accessible description.",
      href: "/"
    })),
        container = _render3.container;

    expect(container.querySelector('a[data-id="carousel-image_inner-container"]')).toHaveAttribute('tabindex', '-1');
  });
  it('should set tabIndex to undefined when href is not passed', function () {
    var _render4 = render(React.createElement(CarouselImage, {
      src: "images/illustrations/rainbows-background.svg",
      header: "First Card",
      description: "First card description.",
      alternativeText: "First card accessible description."
    })),
        container = _render4.container;

    expect(container.querySelector('div[data-id="carousel-image_inner-container"]')).not.toHaveAttribute('tabindex');
  });
});