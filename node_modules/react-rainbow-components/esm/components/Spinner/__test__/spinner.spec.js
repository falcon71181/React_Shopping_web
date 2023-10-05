import React from 'react';
import { mount } from 'enzyme';
import Spinner from '..';
describe('<Spinner/>', function () {
  it('should not render the spinner when isVisible is false', function () {
    var component = mount(React.createElement(Spinner, {
      isVisible: false
    }));
    expect(component.children().length).toBe(0);
  });
  it('should not render the spinner when isVisible is true', function () {
    var component = mount(React.createElement(Spinner, {
      isVisible: true
    }));
    expect(component.children().length).toBe(1);
  });
  it('should pass assistiveText to the prop text of AssistiveText component', function () {
    var component = mount(React.createElement(Spinner, {
      assistiveText: "for screen readers"
    }));
    expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
  });
});