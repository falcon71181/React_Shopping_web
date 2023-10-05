import React from 'react';
import { mount } from 'enzyme';
import RequiredAsterisk from '..';
import StyledAsterisk from '../styledAsterisk';
describe('<InputRequiredAsterisk/>', function () {
  it('should render the abbr element when is required', function () {
    var component = mount(React.createElement(RequiredAsterisk, {
      required: true
    }));
    expect(component.find('abbr').exists()).toBe(true);
  });
  it('should set the title prop as required in the abbr element when is required', function () {
    var component = mount(React.createElement(RequiredAsterisk, {
      required: true
    }));
    var asterisk = component.find(StyledAsterisk);
    expect(asterisk.prop('title')).toBe('required');
  });
});