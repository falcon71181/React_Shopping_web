import React from 'react';
import { mount } from 'enzyme';
import AssistiveText from '../index';
describe('<AssistiveText/>', function () {
  it('should render the span element when the text is passed', function () {
    var component = mount(React.createElement(AssistiveText, {
      text: "for screen readers"
    }));
    expect(component.find('span').exists()).toBe(true);
  });
  it('should render the text passed', function () {
    var component = mount(React.createElement(AssistiveText, {
      text: "for screen readers"
    }));
    expect(component.text()).toBe('for screen readers');
  });
});