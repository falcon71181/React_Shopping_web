import isNumeric from '../isNumeric';
describe('isNumeric', function () {
  it('should return true if value is number', function () {
    expect(isNumeric('1234')).toBe(true);
  });
  it('should return false if value is not number', function () {
    expect(isNumeric('a')).toBe(false);
    expect(isNumeric('4f4jg54zz')).toBe(false);
  });
  it('should return false if value is empty', function () {
    expect(isNumeric('')).toBe(false);
  });
});