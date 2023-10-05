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
describe('darken', function () {
  var colors = [{
    main: '#01b6f5',
    dark: 'rgb(0, 163, 220)',
    darkc: 'rgb(0, 127, 171)'
  }, {
    main: 'rgb(1, 182, 245)',
    dark: 'rgb(0, 163, 220)',
    darkc: 'rgb(0, 127, 171)'
  }, {
    main: 'hsl(0, 100%, 50%)',
    dark: 'rgb(0, 163, 220)',
    darkc: 'rgb(0, 127, 171)'
  }];
  var coefficient = 0.3;
  it('should return the right value with coefficient by default', function () {
    colors.forEach(function (value, idx) {
      expect((0, _color.darken)(value.main)).toBe(colors[idx].dark);
    });
  });
  it('should return the right value with custom coefficient', function () {
    colors.forEach(function (value, idx) {
      expect((0, _color.darken)(value.main, coefficient)).toBe(colors[idx].darkc);
    });
  });
});