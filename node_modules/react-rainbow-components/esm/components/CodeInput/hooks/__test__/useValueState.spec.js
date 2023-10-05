import { renderHook } from '@testing-library/react-hooks';
import useValueState from '../useValueState';
describe('useValueState', function () {
  it('should return array of four values when value is "1234" and length is 4', function () {
    var _renderHook = renderHook(function () {
      return useValueState('1234', 4);
    }),
        result = _renderHook.result;

    expect(result.current).toEqual(['1', '2', '3', '4']);
  });
});