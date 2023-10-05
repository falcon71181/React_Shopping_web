"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
describe('<Header />', function () {
  it('should render the days of the week', function () {
    var week = new Date(2020, 3, 5);
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      week: week
    }));
    var daysWrapper = wrapper.find('Days');
    weekDays.forEach(function (weekDay, index) {
      var day = daysWrapper.childAt(index);
      expect(day.find('p').text()).toBe(weekDay);
      expect(day.find('h1').text()).toBe("".concat(5 + index));
    });
  });
  it('should render today', function () {
    var week = new Date(2020, 3, 5);
    var today = new Date(2020, 3, 6);
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      week: week,
      today: today
    }));
    var todayWrapper = wrapper.find({
      isToday: true
    });
    expect(todayWrapper.find('p').text()).toBe('Mon');
    expect(todayWrapper.find('h1').text()).toBe('6');
  });
});