import React from 'react';
import { mount } from 'enzyme';
import Slider from '..';
describe('<Slider/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(Slider, {
      label: "Slider Label"
    }));
    expect(component).toBeFocusable();
  });
});