import React from 'react';
import { mount } from 'enzyme';
import VisualPickerOption from '../index';
describe('<VisualPickerOption/>', function () {
  it('should set type radio to the input element', function () {
    var component = mount(React.createElement(VisualPickerOption, {
      name: "option1"
    }));
    expect(component.find('input').prop('type')).toBe('radio');
  });
  it('should set type checkbox to the input element', function () {
    var component = mount(React.createElement(VisualPickerOption, {
      name: "option1",
      multiple: true
    }));
    expect(component.find('input').prop('type')).toBe('checkbox');
  });
  it('should set correct name to the input element', function () {
    var groupName = 'group-1';
    var component = mount(React.createElement(VisualPickerOption, {
      name: "option1",
      groupName: groupName
    }));
    expect(component.find('input').prop('name')).toBe(groupName);
  });
  it('should mark the input element as checked when is not multiple', function () {
    var value = 'option1';
    var component = mount(React.createElement(VisualPickerOption, {
      name: "option1",
      value: value
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should mark the input element as checked when is multiple', function () {
    var value = ['option1'];
    var component = mount(React.createElement(VisualPickerOption, {
      name: "option1",
      multiple: true,
      value: value
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should not mark the input element as checked when is multiple and value passed is not an array', function () {
    var value = 'option1';
    var component = mount(React.createElement(VisualPickerOption, {
      name: "option1",
      multiple: true,
      value: value
    }));
    expect(component.find('input').prop('checked')).toBe(false);
  });
});