"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _useValueState = _interopRequireDefault(require("../useValueState"));

describe('useValueState', function () {
  it('should return array of four values when value is "1234" and length is 4', function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
      return (0, _useValueState["default"])('1234', 4);
    }),
        result = _renderHook.result;

    expect(result.current).toEqual(['1', '2', '3', '4']);
  });
});