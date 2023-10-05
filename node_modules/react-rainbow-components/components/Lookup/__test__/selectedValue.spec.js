"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _clipboardCopy = _interopRequireDefault(require("clipboard-copy"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _selectedValue = _interopRequireDefault(require("../selectedValue"));

var _selectedIconContainer = _interopRequireDefault(require("../styled/selectedIconContainer"));

jest.mock('clipboard-copy');
var value = {
  label: 'this is a test'
};
var valueWithIcon = {
  label: 'this is a test',
  icon: 'ok'
};
describe('<SelectedValue />', function () {
  it('should render an input container', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      value: valueWithIcon
    }));
    expect(component.find('input').prop('type')).toBe('text');
    expect(component.find('input').prop('value')).toBe('this is a test');
  });
  it('should set the id passed as the id prop in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      id: "label-123"
    }));
    expect(component.find('input').prop('id')).toBe('label-123');
  });
  it('should not render an icon container', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      value: value
    }));
    expect(component.find(_selectedIconContainer["default"]).exists()).toBe(false);
  });
  it('should render an icon container', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      value: valueWithIcon
    }));
    expect(component.find(_selectedIconContainer["default"]).exists()).toBe(true);
  });
  it('should render a close button', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      onClearValue: function onClearValue() {}
    }));
    expect(component.find(_ButtonIcon["default"]).exists()).toBe(true);
  });
  it('should fire an event when the close button is clicked', function () {
    var onClearMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      onClearValue: onClearMockFn
    }));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(onClearMockFn).toHaveBeenCalledTimes(1);
  });
  it('should not render the close button when readOnly is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      readOnly: true
    }));
    expect(component.find(_ButtonIcon["default"]).exists()).toBe(false);
  });
  it('should not render the close button when disabled is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      disabled: true
    }));
    expect(component.find(_ButtonIcon["default"]).exists()).toBe(false);
  });
  it('should copy value label to clipboard when input gets focus', function () {
    _clipboardCopy["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectedValue["default"], {
      value: value
    }));
    component.find('input').simulate('focus');
    expect(_clipboardCopy["default"]).toHaveBeenCalledWith(value.label);
  });
});