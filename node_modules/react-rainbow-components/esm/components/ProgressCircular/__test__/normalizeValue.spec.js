import normalizeValue from '../normalizeValue';
describe('<normalizeValue/>', function () {
  it('should return the same value passed if it is between 0 and 100', function () {
    expect(normalizeValue(34)).toBe(34);
  });
  it('should return 0 if the value passed is less than 0', function () {
    expect(normalizeValue(-34)).toBe(0);
  });
  it('should return 100 if the value passed is more than 100', function () {
    expect(normalizeValue(3434)).toBe(100);
  });
  it('should return 100 if the value passed is equal 100', function () {
    expect(normalizeValue(100)).toBe(100);
  });
  it('should return 0 if the value passed is equal 0', function () {
    expect(normalizeValue(0)).toBe(0);
  });
});