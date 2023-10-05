"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _valuePropValidation = _interopRequireDefault(require("../valuePropValidation"));

describe('valuePropValidation', function () {
  it('should return Error instance when value prop sent for validation is not a week valid day', function () {
    var valueToTest = 'wrong-day';
    var propTest = {
      nameKey: valueToTest
    };
    var propKey = 'nameKey';
    var componentName = 'TestComponent';
    var location = '';
    var propFullName = 'NameKey';
    var response = (0, _valuePropValidation["default"])(propTest, propKey, componentName, location, propFullName);
    expect(response).toBeInstanceOf(Error);
  });
  it('should return null when value prop sent for validation is a valid week day', function () {
    var valueToTest = 'monday';
    var propTest = {
      nameKey: valueToTest
    };
    var propKey = 'nameKey';
    var componentName = 'TestComponent';
    var location = '';
    var propFullName = 'NameKey';
    var response = (0, _valuePropValidation["default"])(propTest, propKey, componentName, location, propFullName);
    expect(response).toBe(null);
  });
});