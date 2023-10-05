import getNextHour from '../getNextHour';
describe('getNextHour', function () {
  it('should return the string "1" when no value is passed', function () {
    expect(getNextHour()).toBe('1');
  });
  it('should return the string "0" when no value is passed and hour24 is true', function () {
    expect(getNextHour(undefined, true)).toBe('0');
  });
  it('should return the string "1" when value passed converted to Number is equal to 12', function () {
    var values = ['12', 12];
    values.forEach(function (value) {
      return expect(getNextHour(value)).toBe('1');
    });
  });
  it('should return the string "0" when value passed converted to Number is equal to 23 and hour24 is true', function () {
    var values = ['23', 23];
    values.forEach(function (value) {
      return expect(getNextHour(value, true)).toBe('0');
    });
  });
  it('should return the string of the value passed increased by 1 when value passed converted to Number is different to 12', function () {
    var values = ['0', '1', '2', '3', '4', 1, 2, 3, 4];
    var expects = ['1', '2', '3', '4', '5', '2', '3', '4', '5'];
    values.forEach(function (value, index) {
      return expect(getNextHour(value)).toBe(expects[index]);
    });
  });
  it('should return the string of the value passed increased by 1 when value passed converted to Number is different to 23 and hour24 is true', function () {
    var values = ['12', '0', '1', '22', '3', '4', 1, 22, 3, 4];
    var expects = ['13', '1', '2', '23', '4', '5', '2', '23', '4', '5'];
    values.forEach(function (value, index) {
      return expect(getNextHour(value, true)).toBe(expects[index]);
    });
  });
});