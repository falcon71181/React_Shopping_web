import React from 'react';
import { mount } from 'enzyme';
import ButtonTrigger from '../buttonTrigger';
describe('<ButtonTrigger/>', function () {
  it('should render a Button with label only when no icon is passed', function () {
    var component = mount(React.createElement(ButtonTrigger, {
      label: "Menu"
    }));
    expect(component.render().html()).toBe('Menu');
  });
  it('should render a Button with label and left icon when iconPosition value is different from "right"', function () {
    var component = mount(React.createElement(ButtonTrigger, {
      icon: React.createElement("svg", null),
      label: "Menu"
    }));
    expect(component.render().html()).toMatch(/<span class="[A-Za-z\- ]*"><svg><\/svg><\/span>Menu/);
  });
  it('should render a Button with label and right icon when iconPosition value is "right"', function () {
    var component = mount(React.createElement(ButtonTrigger, {
      icon: React.createElement("svg", null),
      iconPosition: "right",
      label: "Menu"
    }));
    expect(component.render().html()).toMatch(/Menu<span class="[A-Za-z\- ]*"><svg><\/svg><\/span>/);
  });
});