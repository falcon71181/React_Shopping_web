import React from 'react';
import { mount } from 'enzyme';
import { SPACE_KEY, ENTER_KEY } from '../../../libs/constants';
import DateTimePicker from '../index';
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
    var component = mount(React.createElement(DateTimePicker, {
      label: "unit-testing-dateTimePicker",
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onBlur with the value passed', function () {
    var onBlurMockFn = jest.fn();
    var component = mount(React.createElement(DateTimePicker, {
      label: "unit-testing-dateTimePicker",
      value: value,
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(value);
  });
  it('should fire onFocus with undefined when there is not value', function () {
    var onFocusMockFn = jest.fn();
    var component = mount(React.createElement(DateTimePicker, {
      label: "unit-testing-dateTimePicker",
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onFocus with the value passed', function () {
    var onFocusMockFn = jest.fn();
    var component = mount(React.createElement(DateTimePicker, {
      label: "unit-testing-dateTimePicker",
      value: value,
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledWith(value);
  });
  it('should set isOpen to true and fire onClick when readOnly is not passed', function () {
    var onClickMockFn = jest.fn();
    var component = mount(React.createElement(DateTimePicker, {
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
    var component = mount(React.createElement(DateTimePicker, {
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
    var values = [ENTER_KEY, SPACE_KEY];
    values.forEach(function (keyCode) {
      var component = mount(React.createElement(DateTimePicker, {
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
    var values = [ENTER_KEY, SPACE_KEY];
    values.forEach(function (keyCode) {
      var component = mount(React.createElement(DateTimePicker, {
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
    var component = mount(React.createElement(DateTimePicker, {
      label: "unit-testing-dateTimePicker",
      value: value
    }));
    expect(component.find('input').prop('value')).toBe('10/24/2019, 10:48 AM');
  });
  it('should render the passed icon', function () {
    var component = mount(React.createElement(DateTimePicker, {
      icon: React.createElement("span", {
        id: "test"
      })
    }));
    expect(component.find('span#test').exists()).toBe(true);
  });
});