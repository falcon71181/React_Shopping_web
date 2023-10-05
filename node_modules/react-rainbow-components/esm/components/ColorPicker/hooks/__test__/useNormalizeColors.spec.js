import { renderHook } from '@testing-library/react-hooks';
import useNormalizeColors, { defaultColors } from '../useNormalizeColors';
describe('useNormalizeColors', function () {
  it('should return empty array', function () {
    var values = ['', null, true, 0, {}, [], ['', 'qwww']];
    values.forEach(function (value) {
      var _renderHook = renderHook(function () {
        return useNormalizeColors({
          defaultColors: value
        });
      }),
          result = _renderHook.result;

      expect(result.current).toStrictEqual([]);
    });
  });
  it('should return array of valid colors', function () {
    var values = [['#5ebbff', '#42d8be', '#3be282'], ['#5ebbff', 'qwe', '#42d8be', '#3be282']];
    values.forEach(function (value) {
      var _renderHook2 = renderHook(function () {
        return useNormalizeColors({
          defaultColors: value
        });
      }),
          result = _renderHook2.result;

      expect(result.current).toStrictEqual(values[0]);
    });
  });
  it('should return default colors', function () {
    var values = [null, [], ['', 'qwww']];
    values.forEach(function (value) {
      var _renderHook3 = renderHook(function () {
        return useNormalizeColors({
          defaultColors: value,
          variant: 'colors-fixed'
        });
      }),
          result = _renderHook3.result;

      expect(result.current).toStrictEqual(defaultColors);
    });
  });
  it('should return array of valid colors when the variant is colors-fixed', function () {
    var values = [['#5ebbff', '#42d8be', '#3be282'], ['#5ebbff', 'qwe', '#42d8be', '#3be282']];
    values.forEach(function (value) {
      var _renderHook4 = renderHook(function () {
        return useNormalizeColors({
          defaultColors: value,
          variant: 'colors-fixed'
        });
      }),
          result = _renderHook4.result;

      expect(result.current).toStrictEqual(values[0]);
    });
  });
});