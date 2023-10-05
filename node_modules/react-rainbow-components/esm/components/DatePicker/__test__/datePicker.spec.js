import React from 'react';
import { mount } from 'enzyme';
import { SPACE_KEY, ENTER_KEY } from '../../../libs/constants';
import DatePicker from '..';
var value = new Date('06/01/2019');
jest.mock('../helpers/formatDate', function () {
  return jest.fn(function () {
    return '10/13/2019';
  });
});
describe('<DatePicker/>', function () {
  it('should fire onBlur with undefined when there is not value', function () {
    var onBlurMockFn = jest.fn();
    var component = mount(React.createElement(DatePicker, {
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onBlur with the value passed', function () {
    var onBlurMockFn = jest.fn();
    var component = mount(React.createElement(DatePicker, {
      value: value,
      onBlur: onBlurMockFn
    }));
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(value);
  });
  it('should fire onFocus with undefined when there is not value', function () {
    var onFocusMockFn = jest.fn();
    var component = mount(React.createElement(DatePicker, {
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
  });
  it('should fire onFocus with the value passed', function () {
    var onFocusMockFn = jest.fn();
    var component = mount(React.createElement(DatePicker, {
      value: value,
      onFocus: onFocusMockFn
    }));
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onFocusMockFn).toHaveBeenCalledWith(value);
  });
  it('should call onChange with the right value when selectionType is single and the Calendar date is changed', function () {
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(DatePicker, {
      value: value,
      onChange: onChangeMockFn
    }));
    component.find('input').simulate('click');
    component.find('button').at('14').simulate('click');
    expect(onChangeMockFn).toHaveBeenCalledWith(new Date('06/12/2019'));
  });
  it('should call onChange with the right values when selectionType is range', function () {
    var onChangeMockFn = jest.fn();
    var date1 = new Date();
    date1.setDate(4);
    date1.setHours(0, 0, 0, 0);
    var date2 = new Date();
    date2.setDate(12);
    date2.setHours(23, 59, 59, 999);
    var component = mount(React.createElement(DatePicker, {
      value: [],
      onChange: onChangeMockFn,
      selectionType: "range"
    }));
    component.find('input').simulate('click');
    component.find('button').at('6').simulate('click');
    expect(onChangeMockFn).toHaveBeenCalledWith([date1]);
    component.setProps({
      value: [date1]
    });
    component.update();
    component.find('button').at('14').simulate('click');
    expect(onChangeMockFn).toHaveBeenCalledWith([date1, date2]);
  });
  it('should close the modal when the Calendar date is changed', function () {
    var component = mount(React.createElement(DatePicker, {
      value: value
    }));
    component.find('input').simulate('click');
    component.find('button').at('14').simulate('click');
    expect(component.find('Modal').prop('isOpen')).toBe(false);
  });
  it('should open the modal when enter or space key is pressed while DatePicker is focused and readOnly is not passed', function () {
    var values = [ENTER_KEY, SPACE_KEY];
    values.forEach(function (keyCode) {
      var component = mount(React.createElement(DatePicker, null));
      var input = component.find('input');
      input.simulate('focus');
      input.simulate('keyDown', {
        keyCode: keyCode
      });
      expect(component.find('Modal').prop('isOpen')).toBe(true);
    });
  });
  it('should not open the modal when enter or space key is pressed while DatePicker is focused and readOnly is passed', function () {
    var values = [ENTER_KEY, SPACE_KEY];
    values.forEach(function (keyCode) {
      var component = mount(React.createElement(DatePicker, {
        readOnly: true
      }));
      var input = component.find('input');
      input.simulate('focus');
      input.simulate('keyDown', {
        keyCode: keyCode
      });
      expect(component.find('Modal').prop('isOpen')).toBe(false);
    });
  });
  it('should open the modal and fire onClick when DatePicker is clicked and readOnly is not passed', function () {
    var onClickMockFn = jest.fn();
    var component = mount(React.createElement(DatePicker, {
      onClick: onClickMockFn
    }));
    component.find('input').simulate('click');
    expect(onClickMockFn).toHaveBeenCalledTimes(1);
    expect(component.find('Modal').prop('isOpen')).toBe(true);
  });
  it('should not open the modal and not fire onClick when DatePicker is clicked and readOnly is passed', function () {
    var onClickMockFn = jest.fn();
    var component = mount(React.createElement(DatePicker, {
      onClick: onClickMockFn,
      readOnly: true
    }));
    component.find('input').simulate('click');
    expect(onClickMockFn).toHaveBeenCalledTimes(0);
    expect(component.find('Modal').prop('isOpen')).toBe(false);
  });
  it('should pass the right value to Input component', function () {
    var component = mount(React.createElement(DatePicker, {
      value: value
    }));
    expect(component.find('input').prop('value')).toBe('10/13/2019');
  });
  it('should render the passed icon', function () {
    var component = mount(React.createElement(DatePicker, {
      icon: React.createElement("span", {
        id: "test"
      })
    }));
    expect(component.find('span#test').exists()).toBe(true);
  });
});