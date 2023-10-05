import { renderHook } from '@testing-library/react-hooks';
import useRangeFromValue from '../useRangeFromValue';
jest.mock('../../helpers/normalizeDate', function () {
  return jest.fn(function () {
    return '2019-01-01';
  });
});
jest.mock('../../helpers/normalizeRange', function () {
  return jest.fn(function () {
    return ['2019-01-01'];
  });
});
describe('useCurrentDateFromValue', function () {
  it('is should return undefined when selectionType is single', function () {
    var date = new Date(2019, 0, 15);

    var _renderHook = renderHook(function () {
      return useRangeFromValue(date, 'single');
    }),
        result = _renderHook.result;

    expect(result.current).toBe(undefined);
  });
  it('is should return array with date when selectionType is range and value is not an array', function () {
    var dates = [new Date(2019, 0, 15), '2019-01-23'];
    dates.forEach(function (date) {
      var _renderHook2 = renderHook(function () {
        return useRangeFromValue(date, 'range');
      }),
          result = _renderHook2.result;

      expect(result.current).toEqual(['2019-01-01']);
    });
  });
  it('is should return empty array when selectionType is range and value is null, undefined or empty array', function () {
    var dates = [null, undefined, [], [undefined], [null], [undefined, undefined], [null, null]];
    dates.forEach(function (date) {
      var _renderHook3 = renderHook(function () {
        return useRangeFromValue(date, 'range');
      }),
          result = _renderHook3.result;

      expect(result.current).toEqual([]);
    });
  });
  it('is should return normalized range when selectionType is range and value is array of dates', function () {
    var dates = [[new Date()], [new Date(), new Date()]];
    dates.forEach(function (date) {
      var _renderHook4 = renderHook(function () {
        return useRangeFromValue(date, 'range');
      }),
          result = _renderHook4.result;

      expect(result.current).toEqual(['2019-01-01']);
    });
  });
});