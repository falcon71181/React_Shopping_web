"use strict";

var _color = require("../color");

describe('hexToRgb', function () {
  var colors = [{
    hex: '#01b6f5',
    rgb: 'rgb(1, 182, 245)'
  }, {
    hex: '#fff',
    rgb: 'rgb(255, 255, 255)'
  }];
  var EMPTY_STRING = '';
  it('should return the right value in rgb format', function () {
    colors.forEach(function (value) {
      expect((0, _color.hexToRgb)(value.hex)).toBe(value.rgb);
    });
  });
  it('should return an empty string when wrong color is passed', function () {
    ['#f00000000', '#f0', 'f00000'].forEach(function (value) {
      expect((0, _color.hexToRgb)(value)).toBe(EMPTY_STRING);
    });
  });
});