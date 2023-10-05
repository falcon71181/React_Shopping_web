import React from 'react';
import { mount } from 'enzyme';
import Badge from '../index';
describe('<Badge/>', function () {
  it('should render the "Badge" with the label passed', function () {
    var component = mount(React.createElement(Badge, {
      label: "Testing label in Badge"
    }));
    expect(component.find('Content').text()).toBe('Testing label in Badge');
  });
  it('should render the "Badge" with the children passed', function () {
    var component = mount(React.createElement(Badge, null, "Testing children in Badge"));
    expect(component.find('Content').text()).toBe('Testing children in Badge');
  });
  it('should not render the "Badge" when label and children are not passed', function () {
    var component = mount(React.createElement(Badge, null));
    expect(component.children().length).toBe(0);
  });
});