"use strict";

var _color = require("../color");

jest.mock('../color/getLuminance', function () {
  return function (color) {
    if (color === '#f00') {
      return 0.5;
    }

    return 0.41;
  };
});
describe('getContrastRatio', function () {
  var colors = [{
    foreground: '#f00',
    background: '#01b6f5',
    result: 1.195
  }, {
    foreground: 'rgb(255, 255, 255)',
    background: 'rgb(1, 182, 245)',
    result: 0.999
  }, {
    foreground: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 100%, 50%)',
    result: 0.999
  }];
  it('should return the right value', function () {
    colors.forEach(function (value, idx) {
      expect((0, _color.getContrastRatio)(value.foreground, value.background)).toBeCloseTo(colors[idx].result);
    });
  });
});