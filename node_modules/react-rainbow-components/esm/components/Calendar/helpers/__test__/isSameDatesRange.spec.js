import isSameDatesRange from '../isSameDatesRange';
describe('isSameMonth', function () {
  it('should return true', function () {
    var range1 = [null, undefined, [], [new Date(2019, 1, 1)], [new Date(2019, 1, 1), new Date(2019, 1, 10)]];
    var range2 = [null, undefined, [], [new Date(2019, 1, 1)], [new Date(2019, 1, 1), new Date(2019, 1, 10)]];
    range1.forEach(function (value, index) {
      expect(isSameDatesRange(value, range2[index])).toBe(true);
    });
  });
  it('should return false', function () {
    var range1 = [null, undefined, [], [new Date(2019, 1, 1)], [new Date(2019, 1, 1), new Date(2019, 1, 10)]];
    var range2 = [undefined, [], null, [new Date(2019, 1, 1), new Date(2019, 1, 10)], [new Date(2019, 1, 1)]];
    range1.forEach(function (value, index) {
      expect(isSameDatesRange(value, range2[index])).toBe(false);
    });
  });
});