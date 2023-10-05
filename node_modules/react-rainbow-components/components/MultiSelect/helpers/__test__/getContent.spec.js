"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getContent = _interopRequireDefault(require("../getContent"));

describe('getContent', function () {
  it('should return null', function () {
    var values = [false, true, undefined, null];
    values.forEach(function (value) {
      expect((0, _getContent["default"])(value)).toBe(null);
    });
  });
  it('should return the right string', function () {
    var values = [{
      label: 'Label'
    }, [{
      label: 'Label 1'
    }, {
      label: 'Label 2'
    }]];
    var expected = ['Label', 'Label 1, Label 2'];
    values.forEach(function (value, index) {
      expect((0, _getContent["default"])(value)).toBe(expected[index]);
    });
  });
});