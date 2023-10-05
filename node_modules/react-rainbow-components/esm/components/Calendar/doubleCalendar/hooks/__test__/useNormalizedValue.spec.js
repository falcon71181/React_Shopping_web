import { renderHook } from '@testing-library/react-hooks';
import useNormalizedValue from '../useNormalizedValue';
describe('useNormalizedValue', function () {
  it('should return same value', function () {
    var date = new Date(2019, 0, 1);

    var _renderHook = renderHook(function () {
      return useNormalizedValue(date);
    }),
        result = _renderHook.result;

    expect(result.current).toEqual(date);
  });
  it('should return new changed value if value is not the same day', function () {
    var date1 = new Date(2019, 0, 1);
    var date2 = new Date(2019, 0, 1);
    var hook = renderHook(function (value) {
      return useNormalizedValue(value);
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
    var hook = renderHook(function (value) {
      return useNormalizedValue(value);
    }, {
      initialProps: date1
    });
    expect(hook.result.current).toEqual(date1);
    hook.rerender(date2);
    expect(hook.result.current).toEqual(date1);
  });
});