import getValue from '../getValue';
describe('getValueOfNan helper', function () {
  it('should return 0', function () {
    var number = getValue(NaN);
    expect(number).toBe(0);
  });
  it('should return 3', function () {
    var number = getValue(3);
    expect(number).toBe(3);
  });
});