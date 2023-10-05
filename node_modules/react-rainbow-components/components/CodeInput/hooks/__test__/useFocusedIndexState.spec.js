"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _useFocusedIndexState = _interopRequireDefault(require("../useFocusedIndexState"));

describe('useFocusedIndexState', function () {
  it('should return index 0 (first position) when value array is empty and length is 4', function () {
    var length = 4;
    var disabled = false;
    var readOnly = false;

    var _renderHook = (0, _reactHooks.renderHook)(function () {
      return (0, _useFocusedIndexState["default"])(['', '', '', ''], length, disabled, readOnly);
    }),
        result = _renderHook.result;

    expect(result.current).toBe(0);
  });
  it('should return index 2 when value array has two numbers and length is 4', function () {
    var length = 4;
    var disabled = false;
    var readOnly = false;

    var _renderHook2 = (0, _reactHooks.renderHook)(function () {
      return (0, _useFocusedIndexState["default"])(['3', '3', '', ''], length, disabled, readOnly);
    }),
        result = _renderHook2.result;

    expect(result.current).toBe(2);
  });
  it('should return index 3 (last position) when value array has 4 numbers and length is 4', function () {
    var length = 4;
    var disabled = false;
    var readOnly = false;

    var _renderHook3 = (0, _reactHooks.renderHook)(function () {
      return (0, _useFocusedIndexState["default"])(['3', '3', '3', '3'], length, disabled, readOnly);
    }),
        result = _renderHook3.result;

    expect(result.current).toBe(3);
  });
  it('should return index undefined (no focus) when disabled is true', function () {
    var length = 4;
    var disabled = true;
    var readOnly = false;

    var _renderHook4 = (0, _reactHooks.renderHook)(function () {
      return (0, _useFocusedIndexState["default"])(['3', '3', '3', '3'], length, disabled, readOnly);
    }),
        result = _renderHook4.result;

    expect(result.current).toBe(undefined);
  });
  it('should return index undefined (no focus) when readOnly is true', function () {
    var length = 4;
    var disabled = false;
    var readOnly = true;

    var _renderHook5 = (0, _reactHooks.renderHook)(function () {
      return (0, _useFocusedIndexState["default"])(['3', '3', '3', '3'], length, disabled, readOnly);
    }),
        result = _renderHook5.result;

    expect(result.current).toBe(undefined);
  });
});