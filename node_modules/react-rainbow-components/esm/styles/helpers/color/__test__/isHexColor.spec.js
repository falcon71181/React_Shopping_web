import isHexColor from '../isHexColor';
describe('isHexColor', function () {
  it('should recognize 6-digit and 3-digit hex colors', function () {
    var colors = ['#ffffff', '#FF0000', '#f0c34a', '#fff', '#F00', '#f89'];
    colors.forEach(function (color) {
      expect(isHexColor(color)).toBe(true);
    });
  });
  it('should recognize non hex colors', function () {
    var colors = ['a', 'FFFFFF', 232323];
    colors.forEach(function (color) {
      expect(isHexColor(color)).toBe(false);
    });
  });
});