"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getPageBorderRadius = _interopRequireDefault(require("../styled/getPageBorderRadius"));

describe('getPageBorderRadius function', function () {
  it('should return square border radius styles for 0 pages', function () {
    var pages = 0;
    var result = (0, _getPageBorderRadius["default"])(pages);
    expect(result).toBe('0 100px 100px 0');
  });
  it('should return rounded border radius for 1 page', function () {
    var pages = 1;
    var result = (0, _getPageBorderRadius["default"])(pages);
    expect(result).toBe('100px');
  });
  it('should return squared border radius styles for 10 pages', function () {
    var pages = 10;
    var result = (0, _getPageBorderRadius["default"])(pages);
    expect(result).toBe('0 100px 100px 0');
  });
});