"use strict";

var _color = require("../color");

jest.mock('../color/clamp', function () {
  return function (coefficient) {
    return coefficient;
  };
});
jest.mock('../color/decomposeColor', function () {
  return function () {
    var result = {
      type: 'rgb',
      values: [1, 182, 245]
    };
    return result;
  };
});
jest.mock('../color/recomposeColor', function () {
  return function (color) {
    return "rgb(".concat(color.values[0], ", ").concat(color.values[1], ", ").concat(color.values[2], ")");
  };
});
describe('lighten', function () {
  var colors = [{
    main: '#01b6f5',
    light: 'rgb(204, 240, 253)',
    lightc: 'rgb(229, 247, 254)'
  }, {
    main: 'rgb(1, 182, 245)',
    light: 'rgb(204, 240, 253)',
    lightc: 'rgb(229, 247, 254)'
  }, {
    main: 'hsl(0, 100%, 50%)',
    light: 'rgb(204, 240, 253)',
    lightc: 'rgb(229, 247, 254)'
  }];
  var coefficient = 0.9;
  it('should return the right value with coefficient by default', function () {
    colors.forEach(function (value, idx) {
      expect((0, _color.lighten)(value.main)).toBe(colors[idx].light);
    });
  });
  it('should return the right value with custom coefficient', function () {
    colors.forEach(function (value, idx) {
      expect((0, _color.lighten)(value.main, coefficient)).toBe(colors[idx].lightc);
    });
  });
});