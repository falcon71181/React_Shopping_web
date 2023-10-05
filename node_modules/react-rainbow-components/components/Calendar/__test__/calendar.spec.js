"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _ = _interopRequireWildcard(require(".."));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Calendar', function () {
  it('should render the component when pass falsy values', function () {
    var values = ['', undefined, null, 0];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        value: value
      }));
      expect(component.exists()).toBe(true);
    });
  });
  it('should render the right month', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    expect(component.find('h3[data-id="month"]').text()).toBe('April');
  });
  it('should render the prev month', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    var prevMonthButton = component.find(_ButtonIcon["default"]).at(0);
    prevMonthButton.simulate('click');
    expect(component.find('h3[data-id="month"]').text()).toBe('March');
  });
  it('should render the next month', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    var nextMonthButton = component.find(_ButtonIcon["default"]).at(1);
    nextMonthButton.simulate('click');
    expect(component.find('h3[data-id="month"]').text()).toBe('May');
  });
  it('should set to disable the prev month button when minDate is greater than prev month date', function () {
    var value = new Date('04/24/2019');
    var minDate = new Date('04/01/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      minDate: minDate
    }));
    var prevMonthButton = component.find(_ButtonIcon["default"]).at(0);
    expect(prevMonthButton.prop('disabled')).toBe(true);
  });
  it('should set to disable the next month button when maxDate is less than next month date', function () {
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
    expect(component.find('h3[data-id="month"]').text()).toBe('October');
  });
  it('should change the year', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    var select = component.find('Select');
    expect(select.prop('value')).toBe(2019);
    component.find('select').simulate('change', {
      target: {
        value: 2022
      }
    });
    expect(component.find('Select').prop('value')).toBe(2022);
  });
  it('should set the right attributes in table element', function () {
    var value = new Date('04/24/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      value: value
    }));

    var _component$instance = component.instance(),
        monthLabelId = _component$instance.monthLabelId;

    expect(component.find('table').props()).toEqual(expect.objectContaining({
      'aria-labelledby': monthLabelId,
      role: 'grid'
    }));
  });
  it('should fire onChange with a date as parameter when selectionType is single', function () {
    var value = new Date('04/24/2019');
    var mockChangeFn = jest.fn();
    var simpleCalendar = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      onChange: mockChangeFn
    }));
    simpleCalendar.find('table').find('button').at(7).simulate('click');
    expect(mockChangeFn).toHaveBeenCalledWith(new Date('04/08/2019'));
  });
  it('should fire onChange with an array of dates as parameter when selectionType is range', function () {
    var value = new Date(2019, 3, 3);
    var date1 = new Date(2019, 3, 8, 23, 59, 59, 999);
    var mockChangeFn = jest.fn();
    var simpleCalendar = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      selectionType: "range",
      onChange: mockChangeFn
    }));
    simpleCalendar.find('table').find('button').at(7).simulate('click');
    expect(mockChangeFn).toHaveBeenCalledWith([value, date1]);
  });
});