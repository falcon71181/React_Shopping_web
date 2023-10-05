"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getFileFieldsOptions = _interopRequireDefault(require("../getFileFieldsOptions"));

var defaultOption = {
  label: 'Select database field to assign',
  value: 'default',
  disabled: true
};
describe('getFileFieldsOptions', function () {
  it('should return default option when no options are passed', function () {
    var options = (0, _getFileFieldsOptions["default"])();
    var expectedOptions = [defaultOption];
    expect(options).toEqual(expectedOptions);
  });
  it('should return default option when empty options are passed', function () {
    var options = (0, _getFileFieldsOptions["default"])([]);
    var expectedOptions = [defaultOption];
    expect(options).toEqual(expectedOptions);
  });
  it('should return default option when pass falsy values', function () {
    var values = [undefined, null, '', 0, true];
    var expectedOptions = [defaultOption];
    values.forEach(function (value) {
      var options = (0, _getFileFieldsOptions["default"])(value);
      expect(options).toEqual(expectedOptions);
    });
  });
  it('should return 3 options when pass an array list of 2 fields', function () {
    var optionsList = ['First_Name', 'Last_Name'];
    var options = (0, _getFileFieldsOptions["default"])(optionsList);
    var expectedOptions = [defaultOption, {
      label: 'First_Name',
      value: 'First_Name'
    }, {
      label: 'Last_Name',
      value: 'Last_Name'
    }];
    expect(options).toEqual(expectedOptions);
  });
});