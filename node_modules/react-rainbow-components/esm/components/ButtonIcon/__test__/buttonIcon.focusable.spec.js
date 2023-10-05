import React from 'react';
import { mount } from 'enzyme';
import ButtonIcon from '../index';
describe('<ButtonIcon />', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(ButtonIcon, null));
    expect(component).toBeFocusable();
  });
});