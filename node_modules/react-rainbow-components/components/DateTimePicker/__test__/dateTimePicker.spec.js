"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../../libs/constants");

var _index = _interopRequireDefault(require("../index"));

var value = new Date('06/01/2019 20:48:34');
jest.mock('../helpers/formatDateTime', function () {
  return jest.fn(function () {
    return '10/24/2019, 10:48 AM';
  });
});
describe('<DateTimePicker/>', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it('should fire onBlur with undefined when there is not value', function () {
    var onBlurMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "unit-testing-dateTimePicker",
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onBlur with the value passed', function () {
    var onBlurMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "unit-testing-dateTimePicker",
      value: value,
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(value);
  });
  it('should fire onFocus with undefined when there is not value', function () {
    var onFocusMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "unit-testing-dateTimePicker",
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onFocus with the value passed', function () {
    var onFocusMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "unit-testing-dateTimePicker",
      value: value,
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledWith(value);
  });
  it('should set isOpen to true and fire onClick when readOnly is not passed', function () {
    var onClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "unit-testing-dateTimePicker",
      value: value,
      onClick: onClickMockFn
    }));
    component.find('input').simulate('click');
    expect(onClickMockFn).toHaveBeenCalledTimes(1);
    expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(true);
  });
  it('should not set isOpen to true and not fire onClick when readOnly is passed', function () {
    var onClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      readOnly: true,
      label: "unit-testing-dateTimePicker",
      value: value,
      onClick: onClickMockFn
    }));
    component.find('input').simulate('click');
    expect(onClickMockFn).toHaveBeenCalledTimes(0);
    expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(false);
  });
  it('should open the modal when enter key or space key is pressed while input is focused and readOnly is not passed', function () {
    var values = [_constants.ENTER_KEY, _constants.SPACE_KEY];
    values.forEach(function (keyCode) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        label: "unit-testing-dateTimePicker"
      }));
      var input = component.find('input');
      input.simulate('focus');
      input.simulate('keyDown', {
        keyCode: keyCode
      });
      expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(true);
    });
  });
  it('should not open the modal when enter key or space key is pressed while input is focused and readOnly is passed', function () {
    var values = [_constants.ENTER_KEY, _constants.SPACE_KEY];
    values.forEach(function (keyCode) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        label: "unit-testing-dateTimePicker",
        readOnly: true
      }));
      var input = component.find('input');
      input.simulate('focus');
      input.simulate('keyDown', {
        keyCode: keyCode
      });
      expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(false);
    });
  });
  it('should set the right input value', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "unit-testing-dateTimePicker",
      value: value
    }));
    expect(component.find('input').prop('value')).toBe('10/24/2019, 10:48 AM');
  });
  it('should render the passed icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      icon: _react["default"].createElement("span", {
        id: "test"
      })
    }));
    expect(component.find('span#test').exists()).toBe(true);
  });
});