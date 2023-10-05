"use strict";

var _ = require("..");

describe('uniqueId', function () {
  it('should return the unique id', function () {
    expect((0, _.uniqueId)()).toBe('1');
  });
  it('should return the unique id with the prefix passed', function () {
    expect((0, _.uniqueId)('input')).toBe('input-2');
  });
});