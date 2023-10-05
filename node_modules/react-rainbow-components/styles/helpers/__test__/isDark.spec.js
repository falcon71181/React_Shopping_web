"use strict";

var _color = require("../color");

jest.mock('../color/getBrightness', function () {
  return jest.fn().mockReturnValueOnce(0).mockReturnValueOnce(51).mockReturnValueOnce(119).mockReturnValueOnce(255).mockReturnValueOnce(238).mockReturnValueOnce(136);
});
describe('isDark', function () {
  it('should return true with a dark color', function () {
    ['#000', '#333', '#777'].forEach(function (value) {
      expect((0, _color.isDark)(value.main)).toBe(true);
    });
  });
  it('should return false with a light color', function () {
    ['#fff', '#eee', '#888'].forEach(function (value) {
      expect((0, _color.isDark)(value.main)).toBe(false);
    });
  });
});