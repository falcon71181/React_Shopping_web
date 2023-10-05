import { replaceAlpha } from '../color';
describe('replaceAlpha', function () {
  var alpha = 0.5;
  var colors = {
    rgb: 'rgb(1, 182, 245)',
    rgba: 'rgba(1, 182, 245, 0.3)',
    rgbar: "rgba(1, 182, 245, ".concat(alpha, ")")
  };
  var EMPTY_STRING = '';
  it('should replace alpha value with the one is passed', function () {
    expect(replaceAlpha(colors.rgba, alpha)).toBe(colors.rgbar);
  });
  it('should return an empty string when wrong format is passed or no alpha at all', function () {
    expect(replaceAlpha(colors.rgb, alpha)).toBe(EMPTY_STRING);
    expect(replaceAlpha(colors.rgba)).toBe(EMPTY_STRING);
  });
});