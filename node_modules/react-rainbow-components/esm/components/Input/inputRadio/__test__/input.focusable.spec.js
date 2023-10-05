import React from 'react';
import { mount } from 'enzyme';
import InputRadio from '..';
describe('<InputRadio/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(InputRadio, {
      label: "Input Label"
    }));
    expect(component).toBeFocusable();
  });
});