"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _usePreviousIndex = _interopRequireDefault(require("../usePreviousIndex"));

describe('usePreviousIndex', function () {
  it('should return current undefined on hook initialization', function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
      return (0, _usePreviousIndex["default"])();
    }),
        result = _renderHook.result;

    expect(result.current).toBe(undefined);
  });
  it('should return previous focused index after focusedIndex is updated; it is controlled by useRef internally inside usePreviousIndex hook', function () {
    var _renderHook2 = (0, _reactHooks.renderHook)(function (focusedIndex) {
      return (0, _usePreviousIndex["default"])(focusedIndex);
    }),
        result = _renderHook2.result,
        rerender = _renderHook2.rerender;

    rerender(1);
    expect(result.current).toBe(undefined);
    rerender(2);
    expect(result.current).toEqual(1);
    rerender(3);
    expect(result.current).toEqual(2);
  });
});