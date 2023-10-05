"use strict";

var _ = require("..");

describe('getHeightOfDate', function () {
  it('should return 0 when is 00.00', function () {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    expect((0, _.getHeightOfDate)(date)).toEqual(0);
  });
  it('should return 480 when is 12.00', function () {
    var date = new Date();
    date.setHours(12, 0, 0, 0);
    expect((0, _.getHeightOfDate)(date)).toEqual(480);
  });
  it('should return 959.33 when is 11.59', function () {
    var date = new Date();
    date.setHours(23, 59, 0, 0);
    expect((0, _.getHeightOfDate)(date)).toBeCloseTo(959.33);
  });
});