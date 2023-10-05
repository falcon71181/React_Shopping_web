"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _weekDay = _interopRequireDefault(require("../weekDay"));

var _hooks = require("../../../libs/hooks");

jest.mock('../../../libs/hooks/useUniqueIdentifier', function () {
  return jest.fn(function () {
    return 'week-day';
  });
});
describe('<WeekDay />', function () {
  it('should have checked as true when isChecked is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDay["default"], {
      isChecked: true
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should have checked as false when isChecked is not set', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDay["default"], null));
    expect(component.find('input').prop('checked')).toBe(false);
  });
  it('should have disabled as true when disabled is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDay["default"], {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should have checked as false when disabled is not set', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDay["default"], null));
    expect(component.find('input').prop('disabled')).toBe(false);
  });
  it('should have readOnly as true when readOnly is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDay["default"], {
      readOnly: true
    }));
    expect(component.find('input').prop('readOnly')).toBe(true);
  });
  it('should have readonly as false when readOnly is not set', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDay["default"], null));
    expect(component.find('input').prop('readOnly')).toBe(false);
  });
  it('should call useUniqueIdentifier to generate input ID with the right value', function () {
    _hooks.useUniqueIdentifier.mockReset();

    (0, _enzyme.mount)(_react["default"].createElement(_weekDay["default"], null));
    expect(_hooks.useUniqueIdentifier).toHaveBeenCalledTimes(1);
    expect(_hooks.useUniqueIdentifier).toHaveBeenCalledWith('week-day');
  });
});