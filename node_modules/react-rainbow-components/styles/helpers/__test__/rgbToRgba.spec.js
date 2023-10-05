"use strict";

var _color = require("../color");

describe('rgbToRgba', function () {
  var alpha = 0.3;
  var colors = {
    rgb: 'rgb(1, 182, 245)',
    rgba: "rgba(1, 182, 245, ".concat(alpha, ")"),
    rgbad: 'rgba(1, 182, 245, 1)'
  };
  var EMPTY_STRING = '';
  it('should return the right value in rgba format', function () {
    expect((0, _color.rgbToRgba)(colors.rgb, alpha)).toBe(colors.rgba);
    expect((0, _color.rgbToRgba)(colors.rgb)).toBe(colors.rgbad);
    expect((0, _color.rgbToRgba)(colors.rgbad)).toBe(colors.rgbad);
  });
  it('should return an empty string when wrong color is passed', function () {
    ['#f00000000', '#f0', 'f00000'].forEach(function (value) {
      expect((0, _color.rgbToRgba)(value)).toBe(EMPTY_STRING);
    });
  });
});