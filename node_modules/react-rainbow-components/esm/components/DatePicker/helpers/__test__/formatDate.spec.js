import formatDate from '../formatDate';
describe('formatDate', function () {
  it('should return an empty string when pass falsy values', function () {
    var values = [undefined, null, '', 0];
    values.forEach(function (value) {
      expect(formatDate(value)).toBe('');
    });
  });
  it('should return an empty string when pass an invalid date', function () {
    expect(formatDate('29-08-2003')).toBe('');
    expect(formatDate('wrong date')).toBe('');
  });
  it('should return the right formatted date', function () {
    expect(formatDate(new Date(2019, 3, 24))).toBe('04/24/2019');
    expect(formatDate(new Date('04/24/2019'))).toBe('04/24/2019');
    expect(formatDate('04/24/2019')).toBe('04/24/2019');
  });
  it('should return the right formatted date when formatStyle large', function () {
    expect(formatDate(new Date(2019, 3, 24), 'large')).toBe('Wednesday, 04/24/2019');
    expect(formatDate(new Date('04/24/2019'), 'large')).toBe('Wednesday, 04/24/2019');
    expect(formatDate('04/24/2019', 'large')).toBe('Wednesday, 04/24/2019');
  });
  it('should return the right formatted date when formatStyle small', function () {
    expect(formatDate(new Date(2019, 3, 24), 'small')).toBe('4/24/19');
    expect(formatDate(new Date('04/24/2019'), 'small')).toBe('4/24/19');
    expect(formatDate('04/24/2019', 'small')).toBe('4/24/19');
  });
  it('should return the right formatted date when formatStyle is wrong', function () {
    expect(formatDate(new Date(2019, 3, 24), 'normal')).toBe('04/24/2019');
    expect(formatDate(new Date('04/24/2019'), 'big')).toBe('04/24/2019');
    expect(formatDate('04/24/2019', 'short')).toBe('04/24/2019');
  });
});