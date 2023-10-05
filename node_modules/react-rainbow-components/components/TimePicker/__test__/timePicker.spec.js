"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _constants = require("../../../libs/constants");

describe('<TimePicker/>', function () {
  it('should fire onBlur with undefined when there is not value', function () {
    var onBlurMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onBlur with the value passed', function () {
    var onBlurMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      value: "18:36",
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith('18:36');
  });
  it('should fire onFocus with undefined when there is not value', function () {
    var onFocusMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onFocus with the value passed', function () {
    var onFocusMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      value: "18:35",
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledWith('18:35');
  });
  it('should set isOpen to true and fire onClick when readOnly is not passed', function () {
    var onClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      value: "18:35",
      onClick: onClickMockFn
    }));
    component.find('input').simulate('click');
    expect(onClickMockFn).toHaveBeenCalledTimes(1);
    expect(component.find('Modal').prop('isOpen')).toBe(true);
  });
  it('should not set isOpen to true and not fire onClick when readOnly is passed', function () {
    var onClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      readOnly: true,
      label: "unit-testing-timePicker",
      value: "18:35",
      onClick: onClickMockFn
    }));
    component.find('input').simulate('click');
    expect(onClickMockFn).toHaveBeenCalledTimes(0);
    expect(component.find('Modal').prop('isOpen')).toBe(false);
  });
  it('should open the modal when enter key or space key is pressed while input is focused and readOnly is not passed', function () {
    var values = [_constants.ENTER_KEY, _constants.SPACE_KEY];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "unit-testing-timePicker"
      }));
      var timePickerInput = component.find('input');
      timePickerInput.simulate('focus');
      timePickerInput.simulate('keyDown', {
        keyCode: value
      });
      expect(component.find('Modal').prop('isOpen')).toBe(true);
    });
  });
  it('should not open the modal when enter key or space key is pressed while input is focused and readOnly is passed', function () {
    var values = [_constants.ENTER_KEY, _constants.SPACE_KEY];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "unit-testing-timePicker",
        readOnly: true
      }));
      var timePickerInput = component.find('input');
      timePickerInput.simulate('focus');
      timePickerInput.simulate('keyDown', {
        keyCode: value
      });
      expect(component.find('Modal').prop('isOpen')).toBe(false);
    });
  });
  it('should focus hour input when modal is open', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker"
    }));
    wrapper.find('input').simulate('click');
    expect(wrapper.find('input[aria-label="hour"]').is(':focus')).toBe(true);
  });
  it('should set the right input value when value change dynamically', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      value: "22:59"
    }));
    component.setProps({
      value: '23:01'
    });
    component.update();
    expect(component.find('input').prop('value')).toBe('11:01 PM');
  });
  it('should initialize value state to the right value when hour24 is passed', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      value: "18:35",
      hour24: true
    }));
    expect(wrapper.find('input').props().value).toBe('18:35');
  });
  it('should initialize value state to the right value when hour24 is not passed', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      value: "18:35"
    }));
    expect(wrapper.find('input').props().value).toBe('06:35 PM');
  });
  it('should set the right value state when value prop is changed dynamically', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "unit-testing-timePicker",
      value: "22:59",
      hour24: true
    }));
    wrapper.setProps({
      value: '23:01'
    });
    wrapper.update();
    expect(wrapper.find('input').props().value).toBe('23:01');
  });
  it('should render the passed icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      icon: _react["default"].createElement("span", {
        id: "test"
      })
    }));
    expect(component.find('span#test').exists()).toBe(true);
  });
});