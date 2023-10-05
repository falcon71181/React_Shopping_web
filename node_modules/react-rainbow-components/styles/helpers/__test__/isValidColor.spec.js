"use strict";

var _color = require("../color");

describe('isValidColor', function () {
  var colors = ['#01b6f5', 'rgb(1, 182, 245)', 'rgba(1, 182, 245, 0.5)'];
  it('should return true with a valid color', function () {
    colors.forEach(function (color) {
      return expect((0, _color.isValidColor)(color)).toBe(true);
    });
  });
  it('should return false with an invalid color value', function () {
    ['', 'asd', '#f', '#fZ0', '#ff00001', 5, 'rgb(1,2)', 'rgb(20, 20, 20, 0.5)', 'rgba(20, 20, 20)'].forEach(function (color) {
      return expect((0, _color.isValidColor)(color)).toBe(false);
    });
  });
});