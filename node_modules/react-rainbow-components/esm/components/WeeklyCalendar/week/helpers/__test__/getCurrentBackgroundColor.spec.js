import { getCurrentBackgroundColor } from '..';
var palette = {
  brand: {
    main: '#000000'
  }
};
describe('getCurrentBackgroundColor', function () {
  it('should return backgroundColor when this is a valid color', function () {
    var backgroundColor = '#1700ff';
    expect(getCurrentBackgroundColor({
      backgroundColor: backgroundColor,
      palette: palette
    })).toBe('#1700ff');
  });
  it('should return "#000000" when backgroundColor is not a valid color', function () {
    var backgroundColor = '#1700ff#';
    expect(getCurrentBackgroundColor({
      backgroundColor: backgroundColor,
      palette: palette
    })).toBe('#000000');
  });
});