import React from 'react';
import { render } from '@testing-library/react';
import Indicators from '../indicators';
var carouselItems = [{
  id: 'indicator-1',
  containerId: 'container-1',
  ref: {
    click: jest.fn()
  },
  header: 'Header'
}, {
  id: 'indicator-2',
  containerId: 'container-2',
  ref: {
    click: jest.fn()
  },
  header: 'Header 2'
}];
describe('<Indicators />', function () {
  it('should render the right amount of indicators', function () {
    var _render = render(React.createElement(Indicators, {
      carouselChildren: carouselItems
    })),
        getAllByRole = _render.getAllByRole;

    expect(getAllByRole('tab').length).toBe(2);
  });
});