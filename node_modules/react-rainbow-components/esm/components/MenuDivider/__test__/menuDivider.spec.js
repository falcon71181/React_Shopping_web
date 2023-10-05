import React from 'react';
import { mount } from 'enzyme';
import MenuDivider from '..';
describe('<MenuDivider />', function () {
  it('should set the prop role as separator in li element', function () {
    var component = mount(React.createElement(MenuDivider, null));
    expect(component.find('li').prop('role')).toBe('separator');
  });
});