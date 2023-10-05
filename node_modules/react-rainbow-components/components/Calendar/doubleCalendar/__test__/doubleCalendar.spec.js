"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ButtonIcon = _interopRequireDefault(require("../../../ButtonIcon"));

var _ = _interopRequireDefault(require(".."));

describe('DoubleCalendar', function () {
  it('should render the component when pass falsy values', function () {
    var values = ['', undefined, null, 0];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        value: value
      }));
      expect(component.exists()).toBe(true);
    });
  });
  it('should render the right months', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    expect(component.find('h3[data-id="month"]').at(0).text()).toBe('April');
    expect(component.find('h3[data-id="month"]').at(1).text()).toBe('May');
  });
  it('should render right months when click prev month button', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    var prevMonthButton = component.find(_ButtonIcon["default"]).at(0);
    prevMonthButton.simulate('click');
    expect(component.find('h3[data-id="month"]').at(0).text()).toBe('March');
    expect(component.find('h3[data-id="month"]').at(1).text()).toBe('April');
  });
  it('should render right months when click next month button', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    var prevMonthButton = component.find(_ButtonIcon["default"]).at(1);
    prevMonthButton.simulate('click');
    expect(component.find('h3[data-id="month"]').at(0).text()).toBe('May');
    expect(component.find('h3[data-id="month"]').at(1).text()).toBe('June');
  });
  it('should set to disable the prevMonthButton when minDate is greater than prev month date', function () {
    var value = new Date('04/24/2019');
    var minDate = new Date('04/01/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      minDate: minDate
    }));
    var prevMonthButton = component.find(_ButtonIcon["default"]).at(0);
    expect(prevMonthButton.prop('disabled')).toBe(true);
  });
  it('should set to disable the nextMonthButton when maxDate is less than next month date', function () {
    var value = new Date('04/24/2019');
    var maxDate = new Date('04/30/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      maxDate: maxDate
    }));
    var prevMonthButton = component.find(_ButtonIcon["default"]).at(1);
    expect(prevMonthButton.prop('disabled')).toBe(true);
  });
  it('should render the right month when value is updated', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    component.setProps({
      value: new Date('10/24/2019')
    });
    expect(component.find('h3[data-id="month"]').at(0).text()).toBe('October');
    expect(component.find('h3[data-id="month"]').at(1).text()).toBe('November');
  });
  it('should fire onChange with a date as parameter', function () {
    var value = new Date('04/24/2019');
    var mockChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      onChange: mockChangeFn
    }));
    component.find('table').find('button').at(7).simulate('click');
    expect(mockChangeFn).toHaveBeenCalledWith(new Date('04/08/2019'));
  });
  it('should change right month year when left month year changed', function () {
    var value = new Date('12/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    component.find('select').at(0).simulate('change', {
      target: {
        value: 2020
      }
    });
    expect(component.find('select').at(0).prop('value')).toBe(2020);
    expect(component.find('select').at(1).prop('value')).toBe(2021);
  });
  it('should change left month year when right month year changed', function () {
    var value = new Date('12/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    component.find('select').at(1).simulate('change', {
      target: {
        value: 2023
      }
    });
    expect(component.find('select').at(0).prop('value')).toBe(2022);
    expect(component.find('select').at(1).prop('value')).toBe(2023);
  });
});