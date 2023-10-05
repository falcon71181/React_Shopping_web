import React from 'react';
import { mount } from 'enzyme';
import CheckboxToggle from '..';
describe('<CheckboxToggle/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(CheckboxToggle, {
      label: "Toggle label"
    }));
    expect(component).toBeFocusable();
  });
});