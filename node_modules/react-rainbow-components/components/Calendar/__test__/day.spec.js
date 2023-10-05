"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _day = _interopRequireDefault(require("../day"));

describe('Day', function () {
  it('should render the right day', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth
    }));
    expect(component.find('button').text()).toBe('24');
  });
  it('should call onChange with the right date when click the button', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      onChange: onChangeMockFn
    }));
    component.find('button').simulate('click');
    expect(onChangeMockFn).toHaveBeenCalledWith(new Date('04/24/2019'));
  });
  it('should not call onChange when disabled and press enter', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      onChange: onChangeMockFn,
      disabledDays: ['04/24/2019']
    }));
    component.find('span').simulate('keydown', {
      key: 'Enter'
    });
    expect(onChangeMockFn).not.toBeCalled();
  });
  it('should render the right day when is adjacent', function () {
    var date = new Date('03/29/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth
    }));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').text()).toBe('29');
  });
  it('should render the right day when is maxDate is less than date', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var maxDate = new Date('04/23/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      maxDate: maxDate
    }));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').text()).toBe('24');
  });
  it('should render the right day when is minDate is greater than date', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var minDate = new Date('04/25/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      minDate: minDate
    }));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').text()).toBe('24');
  });
});