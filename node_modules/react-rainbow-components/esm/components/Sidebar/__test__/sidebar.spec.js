import React from 'react';
import { mount } from 'enzyme';
import Sidebar from '../index';
describe('<Sidebar>', function () {
  it('should render the children passed', function () {
    var component = mount(React.createElement(Sidebar, null, React.createElement("p", null, "Test Child")));
    expect(component.find('p').text()).toBe('Test Child');
  });
  it('should set the ariaLabel passed as aria-label in the nav element', function () {
    var component = mount(React.createElement(Sidebar, {
      ariaLabel: "my label"
    }));
    expect(component.find('nav').prop('aria-label')).toBe('my label');
  });
});