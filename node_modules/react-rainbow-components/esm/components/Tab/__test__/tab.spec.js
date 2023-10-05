import React from 'react';
import { mount } from 'enzyme';
import Tab from '..';
describe('<Tab />', function () {
  it('should set the right class names when custom class name is passed', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      className: "custom-class-name"
    }));
    expect(component.find('li.custom-class-name').exists()).toBe(true);
  });
  it('should call onSelect when clicked', function () {
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      onSelect: onSelectMockFn
    }));
    var aComponent = component.find('button');
    aComponent.simulate('click');
    expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'tab-1');
  });
  it('should not call onSelect when clicked if disabled is passed', function () {
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      onSelect: onSelectMockFn,
      disabled: true
    }));
    var button = component.find('button');
    button.simulate('click');
    expect(onSelectMockFn).toHaveBeenCalledTimes(0);
  });
  it('should set role to presentation in li.', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      activeTabName: "tab-2"
    }));
    var listItem = component.find('li');
    expect(listItem.prop('role')).toBe('presentation');
  });
  it('should set the title passed as title in li.', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      title: "tab 1",
      activeTabName: "tab-2"
    }));
    var listItem = component.find('li');
    expect(listItem.prop('title')).toBe('tab 1');
  });
  it('should set role to tab in button element', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      activeTabName: "tab-2"
    }));
    var button = component.find('button');
    expect(button.prop('role')).toBe('tab');
  });
  it('should set aria-selected to true in button element when the tab is selected', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      activeTabName: "tab-1"
    }));
    var button = component.find('button');
    expect(button.prop('aria-selected')).toBe(true);
  });
  it('should set tabIndex to 0 in button element when tab is selected', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      activeTabName: "tab-1"
    }));
    var button = component.find('button');
    expect(button.prop('tabIndex')).toBe(0);
  });
  it('should set tabIndex to -1 in button element when tab is not selected', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      activeTabName: "tab-2"
    }));
    var button = component.find('button');
    expect(button.prop('tabIndex')).toBe(-1);
  });
  it('should set id in the button element', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      id: "tab 1"
    }));
    var button = component.find('button');
    expect(button.prop('id')).toBe('tab 1');
  });
  it('should set id in the button element', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      ariaControls: "tab-content-1"
    }));
    var button = component.find('button');
    expect(button.prop('aria-controls')).toBe('tab-content-1');
  });
  it('should call privateUpdateTab function with right data when a tab is changed', function () {
    var privateUpdateTabMockFn = jest.fn();
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      label: "Tab-1",
      name: "tab-1",
      privateUpdateTab: privateUpdateTabMockFn
    }));
    component.setProps({
      name: 'tab-2'
    });
    var newData = {
      name: 'tab-2',
      ref: expect.any(Object)
    };
    var prevName = 'tab-1';
    expect(privateUpdateTabMockFn).toHaveBeenCalledWith(newData, prevName);
  });
  it('should not call privateUpdateTab function if any tab is changed', function () {
    var privateUpdateTabMockFn = jest.fn();
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      label: "Tab-1",
      name: "tab-1",
      privateUpdateTab: privateUpdateTabMockFn
    }));
    component.setProps({
      name: 'tab-1'
    });
    expect(privateUpdateTabMockFn).toHaveBeenCalledTimes(0);
  });
  it('should set type to "button" in button element', function () {
    var component = mount(React.createElement(Tab, {
      privateRegisterTab: function privateRegisterTab() {},
      name: "tab-1",
      activeTabName: "tab-2"
    }));
    var button = component.find('button');
    expect(button.prop('type')).toBe('button');
  });
});