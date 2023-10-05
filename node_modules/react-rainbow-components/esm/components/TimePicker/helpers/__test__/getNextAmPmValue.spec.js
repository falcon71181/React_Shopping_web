import getNextAmPmValue from '../getNextAmPmValue';
describe('getNextAmPmValue', function () {
  it('should return the string "PM" when value passed is equal to "AM"', function () {
    expect(getNextAmPmValue('AM')).toBe('PM');
  });
  it('should return the string "PM" when value passed is undefined', function () {
    expect(getNextAmPmValue(undefined)).toBe('PM');
  });
  it('should return the string "AM" when value passed is different to "AM" or undefined', function () {
    var values = ['PM', 'ponlaya', 90, ''];
    values.forEach(function (value) {
      return expect(getNextAmPmValue(value)).toBe('AM');
    });
  });
});