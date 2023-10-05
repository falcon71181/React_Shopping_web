import React from 'react';
import { mount } from 'enzyme';
import LoadingCells from '../loadingCells';
describe('<LoadingCells />', function () {
  it('should not render anything when value is 0', function () {
    var component = mount(React.createElement(LoadingCells, {
      value: 0
    }));
    expect(component.children().length).toBe(0);
  });
  it('should render the amount of children that match with the value passed', function () {
    var component = mount(React.createElement(LoadingCells, {
      value: 3,
      columns: [{}, {}, {}]
    }));
    expect(component.children().length).toBe(3);
  });
});