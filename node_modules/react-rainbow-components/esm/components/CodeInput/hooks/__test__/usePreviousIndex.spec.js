import { renderHook } from '@testing-library/react-hooks';
import usePreviousIndex from '../usePreviousIndex';
describe('usePreviousIndex', function () {
  it('should return current undefined on hook initialization', function () {
    var _renderHook = renderHook(function () {
      return usePreviousIndex();
    }),
        result = _renderHook.result;

    expect(result.current).toBe(undefined);
  });
  it('should return previous focused index after focusedIndex is updated; it is controlled by useRef internally inside usePreviousIndex hook', function () {
    var _renderHook2 = renderHook(function (focusedIndex) {
      return usePreviousIndex(focusedIndex);
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