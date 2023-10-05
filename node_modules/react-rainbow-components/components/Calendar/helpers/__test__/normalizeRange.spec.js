"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _normalizeRange = _interopRequireDefault(require("../normalizeRange"));

jest.mock('../normalizeDate', function () {
  return jest.fn(function () {
    return '2019-01-01';
  });
});
describe('normalizeRange', function () {
  it('should return empty array when range is null or undefined', function () {
    expect((0, _normalizeRange["default"])(null)).toEqual([]);
    expect((0, _normalizeRange["default"])(undefined)).toEqual([]);
  });
  it('should return array with single normalized date when range is not array', function () {
    expect((0, _normalizeRange["default"])(new Date(2019, 0, 1))).toEqual(['2019-01-01']);
    expect((0, _normalizeRange["default"])('2019-01-02')).toEqual(['2019-01-01']);
  });
  it('should return range with normalized values', function () {
    expect((0, _normalizeRange["default"])([new Date(), new Date()])).toEqual(['2019-01-01', '2019-01-01']);
  });
});