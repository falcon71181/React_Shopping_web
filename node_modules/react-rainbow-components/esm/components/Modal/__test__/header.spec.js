import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';
describe('<Header/>', function () {
  it('should set the title passed', function () {
    var component = mount(React.createElement(Header, {
      title: "my title"
    }));
    expect(component.find('h1').text()).toBe('my title');
  });
  it('should render the title passed if is not a string', function () {
    var component = mount(React.createElement(Header, {
      title: React.createElement("p", null, "my title")
    }));
    expect(component.find('p').text()).toBe('my title');
  });
});