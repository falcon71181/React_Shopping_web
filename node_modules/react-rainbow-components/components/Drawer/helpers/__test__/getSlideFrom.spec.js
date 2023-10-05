"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getSlideFrom = _interopRequireDefault(require("../getSlideFrom"));

describe('getSlideFrom', function () {
  it('should return left', function () {
    var values = ['left', null, undefined, {}, '', 0, 31];
    values.forEach(function (value) {
      expect((0, _getSlideFrom["default"])(value, 'left')).toBe('left');
    });
  });
  it('should return right', function () {
    var values = ['right', null, undefined, {}, '', 0, 31];
    values.forEach(function (value) {
      expect((0, _getSlideFrom["default"])(value, 'right')).toBe('right');
    });
  });
});