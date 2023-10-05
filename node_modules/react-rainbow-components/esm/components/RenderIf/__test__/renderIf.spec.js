import React from 'react';
import { mount } from 'enzyme';
import RenderIf from '..';
describe('<RenderIf/>', function () {
  it('should not render the children when isTrue is false', function () {
    var component = mount(React.createElement(RenderIf, null, React.createElement("svg", null)));
    expect(component.find('svg').exists()).toBe(false);
  });
  it('should render the children when isTrue is true', function () {
    var component = mount(React.createElement(RenderIf, {
      isTrue: true
    }, React.createElement("svg", null)));
    expect(component.find('svg').exists()).toBe(true);
  });
});