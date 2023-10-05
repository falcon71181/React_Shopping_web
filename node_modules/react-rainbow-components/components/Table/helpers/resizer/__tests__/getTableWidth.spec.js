"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getTableWidth = _interopRequireDefault(require("../getTableWidth"));

describe('getTableWidth', function () {
  it('should return 0 when nothing is passed', function () {
    expect((0, _getTableWidth["default"])()).toBe(0);
  });
  it('should return the right table width', function () {
    var columns = [{
      computedWidth: 123
    }, {
      computedWidth: 20
    }, {
      computedWidth: 110
    }];
    expect((0, _getTableWidth["default"])(columns)).toBe(253);
  });
});