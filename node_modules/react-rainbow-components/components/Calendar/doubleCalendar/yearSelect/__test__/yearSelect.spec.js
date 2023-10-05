"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('YearSelect', function () {
  it('should set an id in the select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find('select').prop('id')).toMatch(/select/);
  });
  it('should set the year passed as value in the select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentYear: 2019
    }));
    expect(component.find('select').prop('value')).toBe(2019);
  });
  it('should fire an event when the user selects a year', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentYear: 2019,
      onYearChange: onChangeFn
    }));
    component.find('select').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
});