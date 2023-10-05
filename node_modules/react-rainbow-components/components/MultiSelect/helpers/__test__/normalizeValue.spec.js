"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _normalizeValue = _interopRequireDefault(require("../normalizeValue"));

describe('normalizeValue', function () {
  it('should return an empty array', function () {
    var values = [undefined, null, 0, true, []];
    values.forEach(function (val) {
      expect((0, _normalizeValue["default"])(val)).toEqual([]);
    });
  });
  it('should return the right values', function () {
    var values = [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon',
      extra: 'value'
    }, [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon',
      extra: 'value'
    }]];
    var expected = [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon'
    }, [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon'
    }]];
    values.forEach(function (val, index) {
      expect((0, _normalizeValue["default"])(val)).toEqual(expected[index]);
    });
  });
});