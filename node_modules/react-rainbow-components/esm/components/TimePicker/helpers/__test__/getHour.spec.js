import getHour from '../getHour';
describe('getHour', function () {
  it('should return the right hour when value passed is a valid formatted time', function () {
    var values = ['01:32 AM', '11:02 AM', '05:00 AM', '10:19 AM'];
    var expects = ['01', '11', '05', '10'];
    values.forEach(function (value, index) {
      return expect(getHour(value)).toBe(expects[index]);
    });
  });
  it('should return an empty string when value passed is falsy', function () {
    var values = [null, false, NaN, 0, undefined];
    values.forEach(function (value) {
      return expect(getHour(value)).toBe('');
    });
  });
});