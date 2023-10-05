"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _useNormalizedValue = _interopRequireDefault(require("../useNormalizedValue"));

describe('useNormalizedValue', function () {
  it('should return same value', function () {
    var date = new Date(2019, 0, 1);

    var _renderHook = (0, _reactHooks.renderHook)(function () {
      return (0, _useNormalizedValue["default"])(date);
    }),
        result = _renderHook.result;

    expect(result.current).toEqual(date);
  });
  it('should return new changed value if value is not the same day', function () {
    var date1 = new Date(2019, 0, 1);
    var date2 = new Date(2019, 0, 1);
    var hook = (0, _reactHooks.renderHook)(function (value) {
      return (0, _useNormalizedValue["default"])(value);
    }, {
      initialProps: date1
    });
    expect(hook.result.current).toEqual(date1);
    hook.rerender(date2);
    expect(hook.result.current).toEqual(date2);
  });
  it('should return memoized value if value is the same day', function () {
    var date1 = new Date(2019, 0, 1);
    var date2 = new Date(2019, 0, 1, 23, 59, 59, 999);
    var hook = (0, _reactHooks.renderHook)(function (value) {
      return (0, _useNormalizedValue["default"])(value);
    }, {
      initialProps: date1
    });
    expect(hook.result.current).toEqual(date1);
    hook.rerender(date2);
    expect(hook.result.current).toEqual(date1);
  });
});