import React from 'react';
import { mount } from 'enzyme';
import { Component as ButtonGroupPicker } from '../../ButtonGroupPicker/index';
import { ButtonGroupPickerContext } from '../../ButtonGroupPicker/context';
import ButtonOption from '../index';
jest.mock('../helpers/isOptionSelected', function () {
  return jest.fn(function () {
    return true;
  });
});
describe('<ButtonOption />', function () {
  it('should set disabled prop of input to true when disabled prop is true', function () {
    var component = mount(React.createElement(ButtonGroupPicker, null, React.createElement(ButtonOption, {
      label: "Option 1",
      disabled: true
    })));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should set the label passed as label for the input', function () {
    var component = mount(React.createElement(ButtonGroupPicker, null, React.createElement(ButtonOption, {
      label: "Option 1"
    })));
    expect(component.find('label').text()).toBe('Option 1');
  });
  it('should fire onclick callback when clicked', function () {
    var onClickFn = jest.fn();
    var component = mount(React.createElement(ButtonGroupPicker, null, React.createElement(ButtonOption, {
      label: "Option 1",
      onClick: onClickFn
    })));
    component.find('label').simulate('click');
    expect(onClickFn).toHaveBeenCalledWith({
      isSelected: true
    });
  });
  it('should pass a generated id to the input element and set the same id to the htmFor of the label element', function () {
    var component = mount(React.createElement(ButtonGroupPicker, null, React.createElement(ButtonOption, {
      label: "Option 1"
    })));
    var htmlFor = component.find('label').prop('htmlFor');
    var inputId = component.find('input').prop('id');
    expect(htmlFor).toBe(inputId);
  });
  it('should set the name passed through context to the name prop of the input element', function () {
    var component = mount(React.createElement(ButtonGroupPickerContext.Provider, {
      value: {
        name: 'group-name'
      }
    }, React.createElement(ButtonOption, {
      label: "Option 1"
    })));
    var inputName = component.find('input').prop('name');
    expect(inputName).toBe('group-name');
  });
  it('should set the prop name passed to the value prop of the input element', function () {
    var component = mount(React.createElement(ButtonGroupPicker, null, React.createElement(ButtonOption, {
      label: "Option 1",
      name: "option1"
    })));
    var value = component.find('input').prop('value');
    expect(value).toBe('option1');
  });
  it('should set the ariaDescribedBy passed through context to the aria-describedby prop of the input element', function () {
    var component = mount(React.createElement(ButtonGroupPickerContext.Provider, {
      value: {
        ariaDescribedBy: 'aria-describedby'
      }
    }, React.createElement(ButtonOption, {
      label: "Option 1"
    })));
    var inputAriaDescribedBy = component.find('input').prop('aria-describedby');
    expect(inputAriaDescribedBy).toBe('aria-describedby');
  });
  it('should set the type passed through context to the type prop of the input element', function () {
    var component = mount(React.createElement(ButtonGroupPickerContext.Provider, {
      value: {
        type: 'checkbox'
      }
    }, React.createElement(ButtonOption, {
      label: "Option 1"
    })));
    var inputType = component.find('input').prop('type');
    expect(inputType).toBe('checkbox');
  });
  it('should pass the right checked value to the input', function () {
    var component = mount(React.createElement(ButtonGroupPicker, null, React.createElement(ButtonOption, {
      label: "Option 1"
    })));
    expect(component.find('input').prop('checked')).toBe(true);
  });
});