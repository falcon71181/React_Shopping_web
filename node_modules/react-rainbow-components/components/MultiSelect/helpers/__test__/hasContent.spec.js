"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _hasContent = _interopRequireDefault(require("../hasContent"));

describe('hasContent', function () {
  it('should return true', function () {
    var values = [{
      label: 'Label',
      name: 'Name'
    }, [{
      label: 'Label',
      name: 'Name'
    }]];
    values.forEach(function (value) {
      expect((0, _hasContent["default"])(value)).toBe(true);
    });
  });
  it('should return false', function () {
    var values = [undefined, null, 0, false, true, []];
    values.forEach(function (value) {
      expect((0, _hasContent["default"])(value)).toBe(false);
    });
  });
});