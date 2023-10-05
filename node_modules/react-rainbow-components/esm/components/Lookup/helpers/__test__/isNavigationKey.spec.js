import isNavigationKey from '../isNavigationKey';
describe('isNavigationKey', function () {
  it('should return true when pass up, down or enter key', function () {
    var keys = [38, 40, 13];
    keys.forEach(function (key) {
      expect(isNavigationKey(key)).toBe(true);
    });
  });
  it('should return false when pass other keys than up, down or enter', function () {
    var keys = [37, 39, 27, 9, 8];
    keys.forEach(function (key) {
      expect(isNavigationKey(key)).toBe(false);
    });
  });
});