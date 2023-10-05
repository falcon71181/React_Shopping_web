"use strict";

var _color = require("../color");

jest.mock('../color/hexToRgb', function () {
  return function () {
    return 'rgb(1, 182, 245)';
  };
});
describe('decomposeColor', function () {
  var colors = ['#01b6f5', 'rgb(1, 182, 245)', 'rgba(1, 182, 245, 0.5)'];
  var colorDecomposed = {
    type: 'rgba',
    values: [1, 182, 245, 1]
  };
  it('should return an object', function () {
    colors.forEach(function (value) {
      expect((0, _color.decomposeColor)(value)).toStrictEqual({
        type: expect.any(String),
        values: expect.any(Array)
      });
    });
  });
  it('should return an object with type as string and values as array', function () {
    expect((0, _color.decomposeColor)(colors[0])).toStrictEqual({
      type: expect.any(String),
      values: expect.any(Array)
    });
  });
  it('should return the same value when color is decomposed already', function () {
    expect((0, _color.decomposeColor)(colorDecomposed)).toStrictEqual({
      type: expect.any(String),
      values: expect.any(Array)
    });
  });
  it('should return the right value', function () {
    expect((0, _color.decomposeColor)(colors[0])).toStrictEqual(colorDecomposed);
  });
  it('should throw an error when it passed a wrong value', function () {
    expect(function () {
      return (0, _color.decomposeColor)('f00');
    }).toThrow(Error);
  });
});