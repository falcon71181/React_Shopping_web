"use strict";

var _color = require("../color");

jest.mock('../color/decomposeColor', function () {
  return function () {
    var result = {
      type: 'rgb',
      values: [1, 182, 245]
    };
    return result;
  };
});
jest.mock('../color/hslToRgb', function () {
  return function () {
    return 'rgb(1, 182, 245)';
  };
});
describe('getLuminance', function () {
  var colors = [{
    main: '#01b6f5',
    luminance: 0.401
  }, {
    main: 'rgb(1, 182, 245)',
    luminance: 0.401
  }, {
    main: 'hsl(0, 100%, 50%)',
    luminance: 0.401
  }];
  it('should return the right value', function () {
    colors.forEach(function (value, idx) {
      expect((0, _color.getLuminance)(value.main)).toBeCloseTo(colors[idx].luminance);
    });
  });
});