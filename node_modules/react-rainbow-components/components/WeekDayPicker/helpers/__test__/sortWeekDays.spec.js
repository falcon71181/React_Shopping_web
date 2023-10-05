"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sortWeekDays = _interopRequireDefault(require("../sortWeekDays"));

describe('sortWeekDays', function () {
  it('should return sorted day list values from sunday to saturday', function () {
    expect((0, _sortWeekDays["default"])(['monday', 'friday', 'tuesday', 'sunday', 'saturday', 'wednesday', 'thursday'])).toEqual(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
  });
});