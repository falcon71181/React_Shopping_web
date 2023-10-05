"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isOptionChecked = _interopRequireDefault(require("../isOptionChecked"));

var option = {
  value: 'admin',
  label: 'Admin'
};
var optionDisabled = {
  value: 'admin',
  label: 'Admin',
  disabled: true
};
describe('isOptionChecked', function () {
  it('should return false when value is empty', function () {
    expect((0, _isOptionChecked["default"])(option, undefined)).toBe(false);
    expect((0, _isOptionChecked["default"])(option, null)).toBe(false);
    expect((0, _isOptionChecked["default"])(option, '')).toBe(false);
    expect((0, _isOptionChecked["default"])(option, 0)).toBe(false);
  });
  it('should return true when option is selected and it is not disabled', function () {
    expect((0, _isOptionChecked["default"])(option, 'admin')).toBe(true);
    expect((0, _isOptionChecked["default"])(optionDisabled, 'admin')).toBe(false);
  });
});