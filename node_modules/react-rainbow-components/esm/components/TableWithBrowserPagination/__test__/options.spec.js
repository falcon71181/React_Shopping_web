import React from 'react';
import { mount } from 'enzyme';
import Options from '../options';
describe('<Options />', function () {
  it('should not render any option when pages is 0', function () {
    var component = mount(React.createElement(Options, {
      pages: 0
    }));
    expect(component.children().length).toBe(0);
  });
  it('should render the right amount of options when pages is greater than 1', function () {
    var component = mount(React.createElement(Options, {
      pages: 4
    }));
    expect(component.children().length).toBe(4);
  });
});