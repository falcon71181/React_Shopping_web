"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isChecked = _interopRequireDefault(require("../isChecked"));

describe('isChecked', function () {
  it('should return true when value is equal to inputValue and value is truthy', function () {
    var values = [{
      value: 'AM',
      inputValue: 'AM',
      defaultValue: 'PM'
    }, {
      value: true,
      inputValue: true,
      defaultValue: 'PM'
    }, {
      value: 3,
      inputValue: 3,
      defaultValue: 'PM'
    }];
    values.forEach(function (value) {
      return expect((0, _isChecked["default"])(value)).toBe(true);
    });
  });
  it('should return true when defaultValue is equal to inputValue and value is falsy', function () {
    var values = [{
      value: null,
      inputValue: 'PM',
      defaultValue: 'PM'
    }, {
      value: undefined,
      inputValue: 'AM',
      defaultValue: 'AM'
    }, {
      value: false,
      inputValue: 3,
      defaultValue: 3
    }];
    values.forEach(function (value) {
      return expect((0, _isChecked["default"])(value)).toBe(true);
    });
  });
  it('should return true when inputValue is equal to "AM" and defaultValue and value are falsy', function () {
    var values = [{
      value: null,
      inputValue: 'AM',
      defaultValue: null
    }, {
      value: false,
      inputValue: 'AM',
      defaultValue: false
    }, {
      value: NaN,
      inputValue: 'AM',
      defaultValue: NaN
    }, {
      value: 0,
      inputValue: 'AM',
      defaultValue: 0
    }, {
      value: undefined,
      inputValue: 'AM',
      defaultValue: undefined
    }];
    values.forEach(function (value) {
      return expect((0, _isChecked["default"])(value)).toBe(true);
    });
  });
});