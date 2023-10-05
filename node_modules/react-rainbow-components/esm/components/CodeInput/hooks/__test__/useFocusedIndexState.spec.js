import { renderHook } from '@testing-library/react-hooks';
import useFocusedIndexState from '../useFocusedIndexState';
describe('useFocusedIndexState', function () {
  it('should return index 0 (first position) when value array is empty and length is 4', function () {
    var length = 4;
    var disabled = false;
    var readOnly = false;

    var _renderHook = renderHook(function () {
      return useFocusedIndexState(['', '', '', ''], length, disabled, readOnly);
    }),
        result = _renderHook.result;

    expect(result.current).toBe(0);
  });
  it('should return index 2 when value array has two numbers and length is 4', function () {
    var length = 4;
    var disabled = false;
    var readOnly = false;

    var _renderHook2 = renderHook(function () {
      return useFocusedIndexState(['3', '3', '', ''], length, disabled, readOnly);
    }),
        result = _renderHook2.result;

    expect(result.current).toBe(2);
  });
  it('should return index 3 (last position) when value array has 4 numbers and length is 4', function () {
    var length = 4;
    var disabled = false;
    var readOnly = false;

    var _renderHook3 = renderHook(function () {
      return useFocusedIndexState(['3', '3', '3', '3'], length, disabled, readOnly);
    }),
        result = _renderHook3.result;

    expect(result.current).toBe(3);
  });
  it('should return index undefined (no focus) when disabled is true', function () {
    var length = 4;
    var disabled = true;
    var readOnly = false;

    var _renderHook4 = renderHook(function () {
      return useFocusedIndexState(['3', '3', '3', '3'], length, disabled, readOnly);
    }),
        result = _renderHook4.result;

    expect(result.current).toBe(undefined);
  });
  it('should return index undefined (no focus) when readOnly is true', function () {
    var length = 4;
    var disabled = false;
    var readOnly = true;

    var _renderHook5 = renderHook(function () {
      return useFocusedIndexState(['3', '3', '3', '3'], length, disabled, readOnly);
    }),
        result = _renderHook5.result;

    expect(result.current).toBe(undefined);
  });
});