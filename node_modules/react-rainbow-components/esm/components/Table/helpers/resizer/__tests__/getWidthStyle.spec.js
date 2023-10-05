import getWidthStyle from '../getWidthStyle';
describe('resizer helper', function () {
  describe('getWidthStyle', function () {
    it('should return an empty string when value passed is not great than zero', function () {
      var values = [0, -1, undefined];
      values.forEach(function (value) {
        return expect(getWidthStyle(value)).toBe('');
      });
    });
    it('should return the right width style', function () {
      expect(getWidthStyle(32)).toBe('width: 32px');
    });
  });
});