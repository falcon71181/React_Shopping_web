"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _useCurrentDateFromValue = _interopRequireDefault(require("../useCurrentDateFromValue"));

describe('useCurrentDateFromValue', function () {
  it('should return same value', function () {
    var date1 = new Date(2019, 0, 1);
    var values = [null, undefined, date1];
    values.forEach(function (value) {
      var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _useCurrentDateFromValue["default"])(value);
      }),
          result = _renderHook.result;

      expect(result.current).toBe(value);
    });
  });
  it('should return right value', function () {
    var date1 = new Date(2019, 0, 1);
    var date2 = new Date(2019, 0, 10);
    var values = [[undefined], [undefined, undefined], [null], [null, null], [date1], [date1, date2]];
    var results = [undefined, undefined, undefined, null, date1, date1];
    values.forEach(function (value, index) {
      var _renderHook2 = (0, _reactHooks.renderHook)(function () {
        return (0, _useCurrentDateFromValue["default"])(value);
      }),
          result = _renderHook2.result;

      expect(result.current).toBe(results[index]);
    });
  });
});