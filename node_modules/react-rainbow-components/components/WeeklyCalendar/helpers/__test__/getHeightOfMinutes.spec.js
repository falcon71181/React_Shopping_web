"use strict";

var _ = require("..");

describe('getHeightOfMinutes', function () {
  it('should return 0 when is 0 minute', function () {
    expect((0, _.getHeightOfMinutes)(0)).toEqual(0);
  });
  it('should return 30 when is 30 minutes', function () {
    expect((0, _.getHeightOfMinutes)(30)).toEqual(20);
  });
  it('should return 60 when is 60 minutus', function () {
    expect((0, _.getHeightOfMinutes)(60)).toEqual(40);
  });
});