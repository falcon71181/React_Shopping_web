import React from 'react';
import { mount } from 'enzyme';
import InputCheckbox from '..';
describe('<InputCheckbox/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(InputCheckbox, {
      label: "Input Label"
    }));
    expect(component).toBeFocusable();
  });
});