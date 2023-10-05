import extractTime from '../extractTime';
describe('extractTime', function () {
  it('should return an empty string when pass falsy values', function () {
    var values = [undefined, null, '', 0];
    values.forEach(function (value) {
      expect(extractTime(value)).toBe('');
    });
  });
  it('should return an empty string when pass an invalid date', function () {
    expect(extractTime('29-08-2003')).toBe('');
    expect(extractTime('wrong date')).toBe('');
  });
  it('should return the right time', function () {
    expect(extractTime(new Date(2019, 3, 24, 11, 34, 43))).toBe('11:34 AM');
    expect(extractTime(new Date('04/24/2019 13:23'))).toBe('01:23 PM');
    expect(extractTime('04/24/2019 20:48')).toBe('08:48 PM');
  });
  it('should return the right time when hour24 param is true', function () {
    expect(extractTime(new Date(2019, 3, 24, 11, 34, 43), true)).toBe('11:34');
    expect(extractTime(new Date('04/24/2019 13:23'), true)).toBe('13:23');
    expect(extractTime('04/24/2019 20:48', true)).toBe('20:48');
  });
});