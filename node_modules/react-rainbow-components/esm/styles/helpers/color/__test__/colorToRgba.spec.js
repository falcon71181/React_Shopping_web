import colorToRgba from '../colorToRgba';
describe('colorToRgba', function () {
  it('should return empty string', function () {
    var colors = [null, undefined, {}, [], 'dsadsa', 123];
    colors.forEach(function (color) {
      expect(colorToRgba(color)).toBe('');
    });
  });
  it('should return rgba converted value from hex color format', function () {
    var colors = ['#ffffff', '#fff'];
    colors.forEach(function (color) {
      expect(colorToRgba(color)).toBe('rgba(255, 255, 255, 1)');
    });
  });
  it('should return rgba converted value from rgb or rgba color format', function () {
    var colors = ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 1)'];
    colors.forEach(function (color) {
      expect(colorToRgba(color)).toBe('rgba(255, 255, 255, 1)');
    });
  });
  it('should return rgba converted value from hsl or hsla color format', function () {
    var colors = ['hsl(120, 100%, 50%)', 'hsla(120, 100%, 50%, 1)'];
    colors.forEach(function (color) {
      expect(colorToRgba(color)).toBe('rgba(0, 255, 0, 1)');
    });
  });
});