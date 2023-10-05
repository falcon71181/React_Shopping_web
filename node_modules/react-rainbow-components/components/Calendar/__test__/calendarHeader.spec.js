"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _calendarHeader = _interopRequireDefault(require("../calendarHeader"));

var mockFn = jest.fn();
jest.mock('../hooks/useHeaderArrowNav', function () {
  return jest.fn(function () {
    return {
      updateFocusedItem: mockFn
    };
  });
});
describe('CalendarHeader', function () {
  beforeAll(function () {
    jest.clearAllMocks();
  });
  it('should call updateFocusedItem with correct value when click on year select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_calendarHeader["default"], null));
    component.find('select').at(0).simulate('click');
    expect(mockFn).toHaveBeenCalledWith(2);
  });
  it('should call updateFocusedItem with correct value when click on prev month button element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_calendarHeader["default"], null));
    component.find(_ButtonIcon["default"]).at(0).simulate('click');
    expect(mockFn).toHaveBeenCalledWith(0);
  });
  it('should call updateFocusedItem with correct value when click on next month button element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_calendarHeader["default"], null));
    component.find(_ButtonIcon["default"]).at(1).simulate('click');
    expect(mockFn).toHaveBeenCalledWith(1);
  });
  it('should call updateFocusedItem with correct value when year select element is focused', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_calendarHeader["default"], null));
    component.find('select').at(0).simulate('focus');
    expect(mockFn).toHaveBeenCalledWith(2);
  });
  it('should call updateFocusedItem with correct value prev month button element is focused', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_calendarHeader["default"], null));
    component.find(_ButtonIcon["default"]).at(0).simulate('focus');
    expect(mockFn).toHaveBeenCalledWith(0);
  });
  it('should call updateFocusedItem with correct value next month button element is focused', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_calendarHeader["default"], null));
    component.find(_ButtonIcon["default"]).at(1).simulate('focus');
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});