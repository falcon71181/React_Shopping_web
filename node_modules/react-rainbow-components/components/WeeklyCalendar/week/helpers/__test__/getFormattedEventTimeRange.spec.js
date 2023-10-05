"use strict";

var _ = require("..");

describe('getFormattedEventTimeRange', function () {
  it('should return 4 - 5:30 AM when call with 4:00 AM and 5:30 AM', function () {
    var date1 = new Date();
    date1.setHours(4, 0, 0, 0);
    var date2 = new Date();
    date2.setHours(5, 30, 0, 0);
    expect((0, _.getFormattedEventTimeRange)(date1, date2)).toBe('4 - 5:30 AM');
  });
  it('should return 11:30 AM - 1:30 PM when call with 11:30 AM and 1:30 PM', function () {
    var date1 = new Date();
    date1.setHours(11, 30, 0, 0);
    var date2 = new Date();
    date2.setHours(13, 30, 0, 0);
    expect((0, _.getFormattedEventTimeRange)(date1, date2)).toBe('11:30 AM - 1:30 PM');
  });
});