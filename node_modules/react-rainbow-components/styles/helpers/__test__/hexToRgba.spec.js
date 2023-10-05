"use strict";

var _color = require("../color");

describe('hexToRgba', function () {
  var alpha = 0.3;
  var colors = [{
    hex: '#01b6f5',
    rgba: "rgba(1, 182, 245, ".concat(alpha, ")"),
    rgbad: 'rgba(1, 182, 245, 1)'
  }, {
    hex: '#fff',
    rgba: "rgba(255, 255, 255, ".concat(alpha, ")"),
    rgbad: 'rgba(255, 255, 255, 1)'
  }];
  var EMPTY_STRING = '';
  it('should return the right value in rgba format', function () {
    colors.forEach(function (value) {
      expect((0, _color.hexToRgba)(value.hex, alpha)).toBe(value.rgba);
    });
  });
  it('should return an empty string when wrong color is passed', function () {
    ['#f00000000', '#f0', 'f00000'].forEach(function (value) {
      expect((0, _color.hexToRgba)(value, alpha)).toBe(EMPTY_STRING);
    });
  });
  it('should return rgba with alpha = 1 wich is the default value', function () {
    colors.forEach(function (value) {
      expect((0, _color.hexToRgba)(value.hex)).toBe(value.rgbad);
    });
  });
});