import React from 'react';
import { mount } from 'enzyme';
import Avatar from '../index';
describe('<Avatar/>', function () {
  it('should pass assistiveText to the prop text of AssistiveText component', function () {
    var component = mount(React.createElement(Avatar, {
      initials: "JD",
      assistiveText: "for screen readers"
    }));
    expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
  });
});