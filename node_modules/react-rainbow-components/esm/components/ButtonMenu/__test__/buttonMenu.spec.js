import React from 'react';
import { mount } from 'enzyme';
import ButtonMenu from '..';
import ButtonTrigger from '../buttonTrigger';
import ButtonIcon from '../../ButtonIcon';
describe('<ButtonMenu/>', function () {
  it('should pass the icon passed to the ButtonIcon', function () {
    var component = mount(React.createElement(ButtonMenu, {
      icon: React.createElement("svg", null)
    }, React.createElement("span", null)));
    expect(component.find(ButtonIcon).prop('icon')).toEqual(React.createElement("svg", null));
  });
  it('should set the title passed in the ButtonIcon', function () {
    var component = mount(React.createElement(ButtonMenu, {
      title: "my title"
    }, React.createElement("span", null)));
    expect(component.find(ButtonIcon).prop('title')).toBe('my title');
  });
  it('should set the buttonVariant passed as variant in the ButtonIcon', function () {
    var component = mount(React.createElement(ButtonMenu, {
      buttonVariant: "brand"
    }, React.createElement("span", null)));
    expect(component.find(ButtonIcon).prop('variant')).toBe('brand');
  });
  it('should set the buttonSize passed in the ButtonIcon', function () {
    var component = mount(React.createElement(ButtonMenu, {
      buttonSize: "small"
    }, React.createElement("span", null)));
    expect(component.find(ButtonIcon).prop('size')).toBe('small');
  });
  it('should set the disabled passed in the ButtonIcon', function () {
    var component = mount(React.createElement(ButtonMenu, {
      disabled: true
    }, React.createElement("span", null)));
    expect(component.find(ButtonIcon).prop('disabled')).toBe(true);
  });
  it('should set the buttonShaded passed in the ButtonIcon', function () {
    var component = mount(React.createElement(ButtonMenu, {
      buttonShaded: true
    }, React.createElement("span", null)));
    expect(component.find(ButtonIcon).prop('shaded')).toBe(true);
  });
  it('should set the tabIndex passed in the ButtonIcon', function () {
    var component = mount(React.createElement(ButtonMenu, {
      tabIndex: 0
    }, React.createElement("span", null)));
    expect(component.find(ButtonIcon).prop('tabIndex')).toBe(0);
  });
  it('should render a ButtonIcon when no label is passed', function () {
    var component = mount(React.createElement(ButtonMenu, null, React.createElement("span", null)));
    expect(component.find(ButtonIcon).exists()).toBe(true);
  });
  it('should render a Button when label is passed', function () {
    var component = mount(React.createElement(ButtonMenu, {
      label: "Menu",
      buttonVariant: "base"
    }, React.createElement("span", null)));
    expect(component.find('Button').exists()).toBe(true);
  });
  it('should pass the right icon, label and iconPosition to ButtonTrigger', function () {
    var component = mount(React.createElement(ButtonMenu, {
      label: "Menu",
      icon: React.createElement("svg", null),
      iconPosition: "right",
      buttonVariant: "base"
    }, React.createElement("span", null)));
    var trigger = component.find(ButtonTrigger);
    expect(trigger.prop('icon')).toEqual(React.createElement("svg", null));
    expect(trigger.prop('label')).toEqual('Menu');
    expect(trigger.prop('iconPosition')).toEqual('right');
  });
});