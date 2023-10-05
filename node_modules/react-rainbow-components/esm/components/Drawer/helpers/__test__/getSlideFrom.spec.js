import getSlideFrom from '../getSlideFrom';
describe('getSlideFrom', function () {
  it('should return left', function () {
    var values = ['left', null, undefined, {}, '', 0, 31];
    values.forEach(function (value) {
      expect(getSlideFrom(value, 'left')).toBe('left');
    });
  });
  it('should return right', function () {
    var values = ['right', null, undefined, {}, '', 0, 31];
    values.forEach(function (value) {
      expect(getSlideFrom(value, 'right')).toBe('right');
    });
  });
});