"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getFirstItem = _interopRequireDefault(require("../getFirstItem"));

var pages = 7;
describe('getFirstItem function', function () {
  it('should return 1 if the activeItem is 1', function () {
    var result = (0, _getFirstItem["default"])(pages, 1);
    expect(result).toEqual(1);
  });
  it('should return 1 if the activeItem is 2', function () {
    var result = (0, _getFirstItem["default"])(pages, 2);
    expect(result).toEqual(1);
  });
  it('should return 3 if the activeItem is 7', function () {
    var result = (0, _getFirstItem["default"])(pages, 7);
    expect(result).toEqual(3);
  });
  it('should return 3 if the activeItem is 6', function () {
    var result = (0, _getFirstItem["default"])(pages, 6);
    expect(result).toEqual(3);
  });
  it('should return 2 if the activeItem is 4', function () {
    var result = (0, _getFirstItem["default"])(pages, 4);
    expect(result).toEqual(2);
  });
});