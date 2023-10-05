"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<PrimitiveCheckbox/>', function () {
  it('should set an id in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find('input').prop('id')).toMatch(/input/);
  });
  it('should set the value passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "Input value"
    }));
    expect(component.find('input').prop('value')).toBe('Input value');
  });
  it('should fire an event when the user change the input', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      tabIndex: 0
    }));
    expect(component.find('input').prop('tabIndex')).toBe(0);
  });
  it('should set the disabled passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should pass a generated inputId to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      bottomHelpText: "Help text"
    }));
    expect(component.find('Label').prop('inputId')).toMatch(/input-checkbox/);
  });
  it('should pass the right props to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "custom label"
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      inputId: expect.any(String)
    });
  });
  it('should set indeterminate prop to true in input reference when checked prop is "indeterminate" and it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      checked: "indeterminate"
    }));
    expect(component.instance().inputRef.current.indeterminate).toBe(true);
  });
  it('should set indeterminate prop to true in input reference when checked prop is "indeterminate" and it is passed later the component is mounted', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.setProps({
      checked: 'indeterminate'
    });
    expect(component.instance().inputRef.current.indeterminate).toBe(true);
  });
  it('should set checked prop passed in input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      checked: true
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
});