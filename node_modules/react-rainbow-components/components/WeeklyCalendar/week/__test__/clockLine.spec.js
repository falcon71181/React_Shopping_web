"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _clockLine = _interopRequireDefault(require("../clockLine"));

var _clockLine2 = _interopRequireDefault(require("../styled/clockLine"));

jest.mock('../../hooks', function () {
  return {
    useTimer: function useTimer() {
      return new Date().setHours(8, 0, 0, 0);
    }
  };
});
describe('<ClockLine />', function () {
  it('should render on top 320px when the clock is 8:00 AM', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_clockLine["default"], null));
    expect(wrapper.find(_clockLine2["default"]).prop('style').top).toBe('320px');
  });
});