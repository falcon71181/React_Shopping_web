"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isStepSelected = _interopRequireDefault(require("../isStepSelected"));

describe('getActiveStepIndex function', function () {
  it('should return false', function () {
    var paramsList = [{
      hoveredIndex: -1,
      selectedIndex: -1,
      index: 2
    }, {
      hoveredIndex: 5,
      selectedIndex: -1,
      index: 2
    }];
    paramsList.forEach(function (params) {
      expect((0, _isStepSelected["default"])(params)).toBe(false);
    });
  });
  it('should return true', function () {
    expect((0, _isStepSelected["default"])({
      hoveredIndex: -1,
      selectedIndex: 2,
      index: 2
    })).toBe(true);
  });
});