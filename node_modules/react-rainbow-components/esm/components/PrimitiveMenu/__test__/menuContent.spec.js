import React from 'react';
import { mount } from 'enzyme';
import MenuContent from '../menuContent';
describe('<MenuContent/>', function () {
  it('should render the Spinner when isLoading is true', function () {
    var component = mount(React.createElement(MenuContent, {
      isLoading: true
    }, React.createElement("span", null)));
    expect(component.find('Spinner').exists()).toBe(true);
  });
  it('should pass the right props to Spinner when isLoading is true', function () {
    var component = mount(React.createElement(MenuContent, {
      isLoading: true
    }, React.createElement("span", null)));
    expect(component.find('Spinner').props()).toEqual(expect.objectContaining({
      assistiveText: 'loading menu',
      isVisible: true,
      size: 'small'
    }));
  });
  it('should render the children passed when isLoading is false', function () {
    var component = mount(React.createElement(MenuContent, {
      isLoading: false
    }, React.createElement("span", null, "content")));
    expect(component.find('Spinner').exists()).toBe(false);
    expect(component.find('span').text()).toBe('content');
  });
});