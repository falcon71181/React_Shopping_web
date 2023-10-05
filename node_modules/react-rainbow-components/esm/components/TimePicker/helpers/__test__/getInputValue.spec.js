import getInputValue from '../getInputValue';
describe('getInputValue', function () {
  it('should return an empty string when value is not passed and placeholder is passed', function () {
    var placholder = 'Enter your local time';
    expect(getInputValue(undefined, placholder)).toBe('');
  });
  it('should return the value passed', function () {
    var value = '18:35';
    expect(getInputValue(value)).toBe('18:35');
  });
  it('should return "--:-- --" when value and placeholder are not passed', function () {
    expect(getInputValue()).toBe('--:-- --');
  });
  it('should return "--:--" when hour24 is true and value and placeholder are falsey', function () {
    expect(getInputValue(undefined, undefined, true)).toBe('--:--');
    expect(getInputValue(null, null, true)).toBe('--:--');
    expect(getInputValue(false, false, true)).toBe('--:--');
  });
});