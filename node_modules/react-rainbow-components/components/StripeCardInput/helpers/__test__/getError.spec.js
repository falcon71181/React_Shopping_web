"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getError = _interopRequireDefault(require("../getError"));

describe('getError', function () {
  it('should return specific object when error is passed', function () {
    var error = {
      code: 1,
      type: 'type',
      message: 'message',
      otherField: 'invalid'
    };
    var result = (0, _getError["default"])(error);
    expect(result).toEqual({
      code: 1,
      type: 'type',
      message: 'message'
    });
  });
  it('should return undefined when no error is passed', function () {
    var result = (0, _getError["default"])();
    expect(result).toBe(undefined);
  });
});