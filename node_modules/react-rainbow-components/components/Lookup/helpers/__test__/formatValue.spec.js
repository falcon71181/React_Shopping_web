"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _formatValue = _interopRequireDefault(require("../formatValue"));

describe('formatValue', function () {
  it('should return empty object', function () {
    var values = [undefined, null, [], {}, 12];
    values.forEach(function (value) {
      expect((0, _formatValue["default"])(value)).toEqual({});
    });
  });
  it('should return fomatted values', function () {
    var unformattedValues = [{
      label: 'Paris'
    }, {
      label: 'New York',
      icon: 'theIcon'
    }];
    var formattedValues = [{
      label: 'Paris',
      icon: undefined
    }, {
      label: 'New York',
      icon: 'theIcon'
    }];
    unformattedValues.forEach(function (value, index) {
      expect((0, _formatValue["default"])(value)).toEqual(formattedValues[index]);
    });
  });
});