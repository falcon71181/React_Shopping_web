"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _event = _interopRequireDefault(require("../event"));

var _eventTitle = _interopRequireDefault(require("../styled/eventTitle"));

var _event2 = _interopRequireDefault(require("../styled/event"));

var _eventItem = _interopRequireDefault(require("../styled/eventItem"));

var startDate = new Date();
startDate.setHours(8, 0, 0, 0);
var endDate = new Date();
endDate.setHours(9, 30, 0, 0);
var event = {
  id: 1,
  title: 'Yuri V. Munayev',
  startDate: startDate,
  endDate: endDate
};
describe('<Event />', function () {
  it('should render the right event data', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_event["default"], event));
    expect(wrapper.find(_eventTitle["default"]).text()).toBe(event.title);
    expect(wrapper.find(_eventItem["default"]).at(1).text()).toBe('8 - 9:30 AM');
  });
  it('should render on top 320px and height 60px when the startDate is 8:00 AM and endDate 9:30 AM', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_event["default"], event));
    var style = wrapper.find(_event2["default"]).prop('style');
    expect(style.top).toBe('320px');
    expect(style.height).toBe('60px');
  });
  it('should call onEventClick with the right event when click the button', function () {
    var onEventClickMockFn = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_event["default"], (0, _extends2["default"])({}, event, {
      onEventClick: onEventClickMockFn
    })));
    wrapper.find(_event2["default"]).simulate('click');
    expect(onEventClickMockFn).toHaveBeenCalledWith(event);
  });
});