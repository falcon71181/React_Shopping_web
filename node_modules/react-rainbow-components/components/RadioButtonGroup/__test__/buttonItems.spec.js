"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _buttonItems = _interopRequireDefault(require("../buttonItems"));

describe('<ButtonItems />', function () {
  it('should return the 3 radios when 3 options are passed', function () {
    var options = [{
      value: 'admin',
      label: 'Admin',
      disabled: true
    }, {
      value: 'user',
      label: 'User'
    }, {
      value: 'anonymous',
      label: 'Anonymous'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_buttonItems["default"], {
      options: options
    }));
    expect(component.children().length).toBe(3);
  });
  it('should pass the right props to the RadioButtonItem component', function () {
    var option = [{
      optionRef: '000',
      value: 'admin',
      label: 'Admin',
      disabled: true
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_buttonItems["default"], {
      options: option,
      name: "name-1",
      ariaDescribedby: "error-1",
      onChange: function onChange() {},
      variant: "inverse",
      size: "small"
    }));
    expect(component.find('RadioButtonItem').props()).toEqual({
      optionRef: option[0].optionRef,
      itemRef: option[0].optionRef,
      value: option[0].value,
      label: option[0].label,
      disabled: option[0].disabled,
      ariaDescribedby: 'error-1',
      name: 'name-1',
      onChange: expect.any(Function),
      isChecked: false,
      required: undefined,
      size: 'small',
      variant: 'inverse'
    });
  });
});