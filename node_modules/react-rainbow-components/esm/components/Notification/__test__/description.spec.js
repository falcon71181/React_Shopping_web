import React from 'react';
import { mount } from 'enzyme';
import Description from '../description';
describe('<NotificationDescription/>', function () {
  it('should render the string passed as text in the tag "p"', function () {
    var component = mount(React.createElement(Description, {
      text: "test-description"
    }));
    expect(component.find('p').text()).toBe('test-description');
  });
  it('should render the "span" passed as text', function () {
    var component = mount(React.createElement(Description, {
      text: React.createElement("span", null)
    }));
    expect(component.find('span').exists()).toBe(true);
  });
});