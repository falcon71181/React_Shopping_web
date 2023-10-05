import isDateBelowLimit from '../isDateBelowLimit';
describe('isDateBelowLimit', function () {
  it('should return true', function () {
    var date = new Date(2019, 1, 1);
    var limit = new Date(2019, 2, 1, 23, 12, 34, 600);
    expect(isDateBelowLimit(date, limit)).toBe(true);
  });
  it('should return false', function () {
    var date = new Date(2019, 3, 1);
    var limit = new Date(2019, 2, 1, 23, 12, 34, 600);
    expect(isDateBelowLimit(date, limit)).toBe(false);
    expect(isDateBelowLimit(limit, limit)).toBe(false);
  });
});