"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _addMonths = _interopRequireDefault(require("../addMonths"));

describe('addMonths', function () {
  it('should return a date 2 month after', function () {
    var date = new Date(2019, 2, 1);
    expect((0, _addMonths["default"])(date, 2).getMonth()).toBe(4);
  });
});