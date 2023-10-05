"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _formatDate = _interopRequireDefault(require("../formatDate"));

describe('formatDate', function () {
  it('should return an empty string when pass falsy values', function () {
    var values = [undefined, null, '', 0];
    values.forEach(function (value) {
      expect((0, _formatDate["default"])(value)).toBe('');
    });
  });
  it('should return an empty string when pass an invalid date', function () {
    expect((0, _formatDate["default"])('29-08-2003')).toBe('');
    expect((0, _formatDate["default"])('wrong date')).toBe('');
  });
  it('should return the right formatted date', function () {
    expect((0, _formatDate["default"])(new Date(2019, 3, 24))).toBe('04/24/2019');
    expect((0, _formatDate["default"])(new Date('04/24/2019'))).toBe('04/24/2019');
    expect((0, _formatDate["default"])('04/24/2019')).toBe('04/24/2019');
  });
  it('should return the right formatted date when formatStyle large', function () {
    expect((0, _formatDate["default"])(new Date(2019, 3, 24), 'large')).toBe('Wednesday, 04/24/2019');
    expect((0, _formatDate["default"])(new Date('04/24/2019'), 'large')).toBe('Wednesday, 04/24/2019');
    expect((0, _formatDate["default"])('04/24/2019', 'large')).toBe('Wednesday, 04/24/2019');
  });
  it('should return the right formatted date when formatStyle small', function () {
    expect((0, _formatDate["default"])(new Date(2019, 3, 24), 'small')).toBe('4/24/19');
    expect((0, _formatDate["default"])(new Date('04/24/2019'), 'small')).toBe('4/24/19');
    expect((0, _formatDate["default"])('04/24/2019', 'small')).toBe('4/24/19');
  });
  it('should return the right formatted date when formatStyle is wrong', function () {
    expect((0, _formatDate["default"])(new Date(2019, 3, 24), 'normal')).toBe('04/24/2019');
    expect((0, _formatDate["default"])(new Date('04/24/2019'), 'big')).toBe('04/24/2019');
    expect((0, _formatDate["default"])('04/24/2019', 'short')).toBe('04/24/2019');
  });
});