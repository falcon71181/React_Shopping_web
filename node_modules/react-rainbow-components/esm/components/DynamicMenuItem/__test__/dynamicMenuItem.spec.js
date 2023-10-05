import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { mount } from 'enzyme';
import DynamicMenuItem from '..';
describe('<DynamicMenuItem />', function () {
  it('should render when renderIf returns true', function () {
    var component = mount(React.createElement(DynamicMenuItem, {
      renderIf: function renderIf() {
        return true;
      }
    }));
    expect(component.find('MenuItem').exists()).toBe(true);
  });
  it('should not render when renderIf returns false', function () {
    var component = mount(React.createElement(DynamicMenuItem, {
      renderIf: function renderIf() {
        return false;
      }
    }));
    expect(component.find('MenuItem').exists()).toBe(false);
  });
  it('should render when renderIf prop receives an invalid value', function () {
    var component = mount(React.createElement(DynamicMenuItem, {
      renderIf: true
    }));
    expect(component.find('MenuItem').exists()).toBe(true);
  });
  it('should render as disabled when disabled returns true', function () {
    var component = mount(React.createElement(DynamicMenuItem, {
      disabled: function disabled() {
        return true;
      }
    }));
    expect(component.find('MenuItem').prop('disabled')).toBe(true);
  });
  it('should render as enabled when disabled returns false', function () {
    var component = mount(React.createElement(DynamicMenuItem, {
      disabled: function disabled() {
        return false;
      }
    }));
    expect(component.find('MenuItem').prop('disabled')).toBe(false);
  });
  it('should render as enabled when disabled props receives an invalid value', function () {
    var component = mount(React.createElement(DynamicMenuItem, {
      disabled: true
    }));
    expect(component.find('MenuItem').prop('disabled')).toBe(false);
  });
  it('should pass the item props to the MenuItem', function () {
    var onClick = jest.fn();
    var props = {
      className: 'test-class',
      style: {},
      label: 'Menu item',
      variant: 'header',
      icon: 'icon',
      iconPosition: 'right',
      title: 'title',
      onClick: onClick
    };
    var component = mount(React.createElement(DynamicMenuItem, props));
    expect(component.find('MenuItem').props()).toEqual(_objectSpread(_objectSpread({}, props), {}, {
      disabled: false
    }));
  });
});