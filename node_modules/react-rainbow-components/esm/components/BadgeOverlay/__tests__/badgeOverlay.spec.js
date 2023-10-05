import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { mount } from 'enzyme';
import BadgeOverlay from '..';
import StyledBadge from '../styled/badge';
var defaultProps = {
  value: undefined,
  overlap: 'rectangle',
  variant: 'error',
  isHidden: false,
  position: 'top-right',
  className: undefined,
  style: undefined
};
describe('<BadgeOverlay/>', function () {
  it('should render the children when is passed', function () {
    var children = React.createElement("div", {
      id: "child"
    });
    var component = mount(React.createElement(BadgeOverlay, null, children));
    expect(component.contains(children)).toBe(true);
  });
  it('should not render when the children is not passed', function () {
    var component = mount(React.createElement(BadgeOverlay, defaultProps));
    expect(component.find(StyledBadge).exists()).toBe(false);
  });
  it('should render with right default props', function () {
    var children = React.createElement("div", {
      id: "child"
    });
    var component = mount(React.createElement(BadgeOverlay, defaultProps, children));
    expect(component.find(BadgeOverlay).props()).toEqual(_objectSpread(_objectSpread({}, defaultProps), {}, {
      children: children
    }));
  });
  it('should render the right value', function () {
    var children = React.createElement("div", {
      id: "child"
    });
    var component = mount(React.createElement(BadgeOverlay, defaultProps, children));
    expect(component.find(StyledBadge).text()).toBe('');
    component.setProps({
      value: 3
    });
    expect(component.find(StyledBadge).text()).toBe('3');
    component.setProps({
      value: 1000
    });
    expect(component.find(StyledBadge).text()).toBe('1k');
  });
});