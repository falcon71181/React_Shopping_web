"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../ButtonGroupPicker/index");

var _context = require("../../ButtonGroupPicker/context");

var _index2 = _interopRequireDefault(require("../index"));

jest.mock('../helpers/isOptionSelected', function () {
  return jest.fn(function () {
    return true;
  });
});
describe('<ButtonOption />', function () {
  it('should set disabled prop of input to true when disabled prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, null, _react["default"].createElement(_index2["default"], {
      label: "Option 1",
      disabled: true
    })));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should set the label passed as label for the input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, null, _react["default"].createElement(_index2["default"], {
      label: "Option 1"
    })));
    expect(component.find('label').text()).toBe('Option 1');
  });
  it('should fire onclick callback when clicked', function () {
    var onClickFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, null, _react["default"].createElement(_index2["default"], {
      label: "Option 1",
      onClick: onClickFn
    })));
    component.find('label').simulate('click');
    expect(onClickFn).toHaveBeenCalledWith({
      isSelected: true
    });
  });
  it('should pass a generated id to the input element and set the same id to the htmFor of the label element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, null, _react["default"].createElement(_index2["default"], {
      label: "Option 1"
    })));
    var htmlFor = component.find('label').prop('htmlFor');
    var inputId = component.find('input').prop('id');
    expect(htmlFor).toBe(inputId);
  });
  it('should set the name passed through context to the name prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.ButtonGroupPickerContext.Provider, {
      value: {
        name: 'group-name'
      }
    }, _react["default"].createElement(_index2["default"], {
      label: "Option 1"
    })));
    var inputName = component.find('input').prop('name');
    expect(inputName).toBe('group-name');
  });
  it('should set the prop name passed to the value prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, null, _react["default"].createElement(_index2["default"], {
      label: "Option 1",
      name: "option1"
    })));
    var value = component.find('input').prop('value');
    expect(value).toBe('option1');
  });
  it('should set the ariaDescribedBy passed through context to the aria-describedby prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.ButtonGroupPickerContext.Provider, {
      value: {
        ariaDescribedBy: 'aria-describedby'
      }
    }, _react["default"].createElement(_index2["default"], {
      label: "Option 1"
    })));
    var inputAriaDescribedBy = component.find('input').prop('aria-describedby');
    expect(inputAriaDescribedBy).toBe('aria-describedby');
  });
  it('should set the type passed through context to the type prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.ButtonGroupPickerContext.Provider, {
      value: {
        type: 'checkbox'
      }
    }, _react["default"].createElement(_index2["default"], {
      label: "Option 1"
    })));
    var inputType = component.find('input').prop('type');
    expect(inputType).toBe('checkbox');
  });
  it('should pass the right checked value to the input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, null, _react["default"].createElement(_index2["default"], {
      label: "Option 1"
    })));
    expect(component.find('input').prop('checked')).toBe(true);
  });
});