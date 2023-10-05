import React from 'react';
import { mount } from 'enzyme';
import Title from '../title';
describe('<NotificationTitle/>', function () {
  it('should render the string passed as text in the tag "h1"', function () {
    var component = mount(React.createElement(Title, {
      text: "test-title"
    }));
    expect(component.find('h1').text()).toBe('test-title');
  });
  it('should render the "title" passed as text', function () {
    var component = mount(React.createElement(Title, {
      text: React.createElement("title", null)
    }));
    expect(component.find('title').exists()).toBe(true);
  });
});