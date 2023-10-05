import React from 'react';
import { mount } from 'enzyme';
import ColorPicker from '..';
import * as Commons from '../commons';
describe('<ColorPicker />', function () {
  it('should render all common component', function () {
    var wrapper = mount(React.createElement(ColorPicker, null));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba', 'DefaultColors'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(1);
    });
  });
  it('should render all common component variant is not valid', function () {
    var wrapper = mount(React.createElement(ColorPicker, {
      variant: "foo"
    }));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba', 'DefaultColors'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(1);
    });
  });
  it('should not render DefaultColors common component when defaultColors do not have some valid color', function () {
    var wrapper = mount(React.createElement(ColorPicker, {
      defaultColors: []
    }));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(1);
    });
    expect(wrapper.find(Commons.DefaultColors).length).toBe(0);
  });
  it('should render only the DefaultColors common component when the variant is colors-fixed', function () {
    var wrapper = mount(React.createElement(ColorPicker, {
      variant: "colors-fixed"
    }));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(0);
    });
    expect(wrapper.find(Commons.DefaultColors).length).toBe(1);
  });
});