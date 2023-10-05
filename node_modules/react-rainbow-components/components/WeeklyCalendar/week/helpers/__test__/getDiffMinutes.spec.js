"use strict";

var _ = require("..");

describe('getDiffMinutes', function () {
  it('should return 0 when is the same time', function () {
    var date = new Date();
    expect((0, _.getDiffMinutes)(date, date)).toBe(0);
  });
  it('should return 60 when the diff is of a hour', function () {
    var date1 = new Date();
    date1.setHours(0, 0, 0, 0);
    var date2 = new Date();
    date2.setHours(1, 0, 0, 0);
    expect((0, _.getDiffMinutes)(date1, date2)).toBe(60);
  });
  it('should return 1440 when the diff is of a day', function () {
    var date1 = new Date('2020/01/01');
    var date2 = new Date('2020/01/02');
    expect((0, _.getDiffMinutes)(date1, date2)).toBe(1440);
  });
});