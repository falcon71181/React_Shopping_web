import React from 'react';
import { mount } from 'enzyme';
import Icon from '../icon';
import StyledIcon from '../styled/icon';
describe('<Icon/>', function () {
  it('should return the icon passed', function () {
    var component = mount(React.createElement(Icon, {
      icon: React.createElement("svg", {
        "data-id": "custom-icon"
      })
    }));
    expect(component.find('svg[data-id="custom-icon"]').exists()).toBe(true);
  });
  it('should render the fallback icon when no icon is passed', function () {
    var component = mount(React.createElement(Icon, null));
    expect(component.find('MarkerIcon').exists()).toBe(true);
  });
  it('should set the same text as title in span element and text in AssistiveText when no icon is passed', function () {
    var component = mount(React.createElement(Icon, null));
    expect(component.find(StyledIcon).prop('title')).toBe('marker icon');
    expect(component.find('AssistiveText').prop('text')).toBe('marker icon');
  });
});