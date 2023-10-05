"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _addDays = _interopRequireDefault(require("../addDays"));

describe('addDays', function () {
  it('should return a date 3 days after', function () {
    var date = new Date(2019, 2, 1);
    expect((0, _addDays["default"])(date, 3).getDate()).toBe(4);
  });
});