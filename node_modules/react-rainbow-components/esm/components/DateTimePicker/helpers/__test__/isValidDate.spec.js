import isValidDate from '../isValidDate';
describe('isValidDate', function () {
  it('should return false', function () {
    var values = [undefined, null, '', 0, {}, '29-08-2003', 'wrong date'];
    values.forEach(function (value) {
      expect(isValidDate(value)).toBe(false);
    });
  });
  it('should return true', function () {
    var values = [new Date(2019, 3, 24, 11, 34, 43), new Date('04/24/2019 13:23')];
    values.forEach(function (value) {
      expect(isValidDate(value)).toBe(true);
    });
  });
});