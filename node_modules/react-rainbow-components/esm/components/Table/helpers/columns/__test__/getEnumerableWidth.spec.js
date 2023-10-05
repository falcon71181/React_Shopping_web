import getEnumerableWidth from '../getEnumerableWidth';
describe('getEnumerableWidth', function () {
  it('should return the default width when value is not sent', function () {
    expect(getEnumerableWidth()).toBe(48);
  });
  it('should return the default calculated width when value is default', function () {
    expect(getEnumerableWidth(0)).toBe(48);
  });
  it('should return the right width when value length is 3 (999)', function () {
    expect(getEnumerableWidth(999)).toBe(72);
  });
});