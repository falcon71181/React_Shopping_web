"use strict";

var _color = require("../color");

jest.mock('../color/decomposeColor', function () {
  return jest.fn(function () {
    var result = {
      type: 'rgb',
      values: [1, 182, 245]
    };
    return result;
  }).mockImplementationOnce(function () {
    var result = {
      type: 'rgb',
      values: [0, 0, 0]
    };
    return result;
  }).mockImplementationOnce(function () {
    var result = {
      type: 'rgb',
      values: [255, 255, 255]
    };
    return result;
  });
});
jest.mock('../color/hslToRgb', function () {
  return function () {
    return 'rgb(1, 182, 245)';
  };
});
describe('getBrightness', function () {
  var colors = [{
    main: '#000',
    brightness: 0
  }, {
    main: '#fff',
    brightness: 255
  }, {
    main: '#01b6f5',
    brightness: 135.063
  }, {
    main: 'rgb(1, 182, 245)',
    brightness: 135.063
  }];
  it('should return the right value', function () {
    colors.forEach(function (value, idx) {
      expect((0, _color.getBrightness)(value.main)).toBeCloseTo(colors[idx].brightness);
    });
  });
  it('should return the right value when color passed is hsl', function () {
    expect((0, _color.getBrightness)('hsl(0, 100%, 50%)')).toBeCloseTo(135.063);
  });
});