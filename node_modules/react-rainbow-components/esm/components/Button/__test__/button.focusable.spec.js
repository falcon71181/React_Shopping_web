import React from 'react';
import { mount } from 'enzyme';
import Button from '..';
describe('<Button />', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(Button, {
      label: "button label"
    }));
    expect(component).toBeFocusable();
  });
});