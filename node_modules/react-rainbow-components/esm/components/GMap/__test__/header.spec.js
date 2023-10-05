import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';
describe('<Header/>', function () {
  it('should render the text passed inside an h2 element when is a string', function () {
    var component = mount(React.createElement(Header, {
      text: "some title"
    }));
    expect(component.find('h2').text()).toBe('some title');
  });
  it('should return the same text passed when it is not a string', function () {
    var component = mount(React.createElement(Header, {
      text: React.createElement("span", null, "some text")
    }));
    expect(component.find('span').text()).toBe('some text');
  });
});