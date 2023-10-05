"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getCurrentMonth = _interopRequireDefault(require("../getCurrentMonth"));

describe('getCurrentMonth', function () {
  it('should return 2019/03/01 when 2019/03/21', function () {
    var values = [new Date(2019, 2, 21), new Date('03/21/2019'), '03/21/2019', '03-21-2019', '2019/03/21'];
    values.forEach(function (date) {
      var month = (0, _getCurrentMonth["default"])(date);
      expect(month.getUTCFullYear()).toBe(2019);
      expect(month.getMonth()).toBe(2);
      expect(month.getDate()).toBe(1);
    });
  });
  it('should return first day of minDate when passed and currentMonth is below', function () {
    var values = ['03/21/2018', '02/21/2018', '08/21/2018'];
    values.forEach(function (date) {
      var month = (0, _getCurrentMonth["default"])(date, '01/21/2019');
      expect(month.getUTCFullYear()).toBe(2019);
      expect(month.getMonth()).toBe(0);
      expect(month.getDate()).toBe(1);
    });
  });
  it('should return first day of maxDate when passed and currentMonth is beyond', function () {
    var values = ['03/21/2019', '02/21/2019', '08/21/2019'];
    values.forEach(function (date) {
      var month = (0, _getCurrentMonth["default"])(date, undefined, '01/21/2019');
      expect(month.getUTCFullYear()).toBe(2019);
      expect(month.getMonth()).toBe(0);
      expect(month.getDate()).toBe(1);
    });
  });
  it('should return first day of currentMonth when is between minDate and maxDate', function () {
    var values = ['03/21/2019', '02/21/2019', '08/21/2019'];
    var results = [{
      date: 1,
      month: 2,
      year: 2019
    }, {
      date: 1,
      month: 1,
      year: 2019
    }, {
      date: 1,
      month: 7,
      year: 2019
    }];
    values.forEach(function (date, index) {
      var month = (0, _getCurrentMonth["default"])(date, '01/21/2018', '01/21/2020');
      expect(month.getUTCFullYear()).toBe(results[index].year);
      expect(month.getMonth()).toBe(results[index].month);
      expect(month.getDate()).toBe(results[index].date);
    });
  });
});