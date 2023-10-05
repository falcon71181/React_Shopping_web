"use strict";

var _color = require("../color");

var _colors = require("../../colors");

var mockDarkenColorBrand = 'rgba(0, 163, 220, 1)';
var mockDarkenColorSuccess = 'rgba(26, 209, 163, 1)';
var mockColors = [{
  background: (0, _color.colorToRgba)(_colors.COLOR_BRAND),
  result: 'rgba(255, 255, 255, 1)',
  ratio: 2.328
}, {
  background: 'rgb(1, 182, 245)',
  result: 'rgba(0, 0, 0, 0.87)',
  ratio: 2.328
}, {
  background: 'hsl(0, 100%, 50%)',
  result: 'rgba(255, 255, 255, 1)',
  ratio: 3.992
}, {
  background: (0, _color.colorToRgba)(_colors.COLOR_SUCCESS),
  result: 'rgba(255, 255, 255, 1)',
  ratio: 1.569
}, {
  background: mockDarkenColorBrand,
  result: 'rgba(255, 255, 255, 1)',
  ratio: 2.884
}, {
  background: mockDarkenColorSuccess,
  result: 'rgba(255, 255, 255, 1)',
  ratio: 1.962
}, {
  background: (0, _color.colorToRgba)(_colors.COLOR_WARNING),
  result: 'rgba(0, 0, 0, 0.87)',
  ratio: 1.512
}];
jest.mock('../color/getContrastRatio', function () {
  return function (background) {
    return mockColors.find(function (color) {
      return color.background === background;
    }).ratio;
  };
});
jest.mock('../color/darken', function () {
  return function (color) {
    if (color === '#01b6f5') {
      return mockDarkenColorBrand;
    }

    return mockDarkenColorSuccess;
  };
});
describe('getContrastText', function () {
  it('should return the right value', function () {
    mockColors.forEach(function (value, idx) {
      expect((0, _color.getContrastText)(value.background)).toBe(mockColors[idx].result);
    });
  });
  it('should return an error without background', function () {
    expect(function () {
      return (0, _color.getContrastText)();
    }).toThrow(TypeError);
  });
});