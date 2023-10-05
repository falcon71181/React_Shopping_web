"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getFirstDayMonth = _interopRequireDefault(require("../getFirstDayMonth"));

describe('getFirstDayMonth', function () {
  it('should return a 2019/03/01 when 2019/03/21', function () {
    var values = [new Date(2019, 2, 21), new Date('03/21/2019'), '03/21/2019', '03-21-2019', '2019/03/21'];
    values.forEach(function (date) {
      expect((0, _getFirstDayMonth["default"])(date).getUTCFullYear()).toBe(2019);
      expect((0, _getFirstDayMonth["default"])(date).getMonth()).toBe(2);
      expect((0, _getFirstDayMonth["default"])(date).getDate()).toBe(1);
    });
  });
  it('should return the firs date of the current month when date passed is invalid', function () {
    expect((0, _getFirstDayMonth["default"])('29-23-2033').getDate()).toBe(1);
    expect((0, _getFirstDayMonth["default"])('wrong date').getDate()).toBe(1);
  });
});