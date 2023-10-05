"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _setFocus = _interopRequireDefault(require("../setFocus"));

describe('setFocus', function () {
  it('should call ref focus() and select() methods when ref is valid', function () {
    var ref = {
      current: {
        focus: jest.fn(),
        select: jest.fn()
      }
    };
    (0, _setFocus["default"])(ref);
    expect(ref.current.focus).toHaveBeenCalled();
  });
  it('should not call ref focus() nor select() methods when ref is invalid', function () {
    var ref = {
      current: {
        focus: jest.fn(),
        select: jest.fn()
      }
    };
    var invalidRef = null;
    (0, _setFocus["default"])(invalidRef);
    expect(ref.current.focus).not.toHaveBeenCalled();
  });
});