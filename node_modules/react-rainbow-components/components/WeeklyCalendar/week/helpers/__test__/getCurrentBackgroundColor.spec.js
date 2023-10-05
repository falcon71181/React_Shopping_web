"use strict";

var _ = require("..");

var palette = {
  brand: {
    main: '#000000'
  }
};
describe('getCurrentBackgroundColor', function () {
  it('should return backgroundColor when this is a valid color', function () {
    var backgroundColor = '#1700ff';
    expect((0, _.getCurrentBackgroundColor)({
      backgroundColor: backgroundColor,
      palette: palette
    })).toBe('#1700ff');
  });
  it('should return "#000000" when backgroundColor is not a valid color', function () {
    var backgroundColor = '#1700ff#';
    expect((0, _.getCurrentBackgroundColor)({
      backgroundColor: backgroundColor,
      palette: palette
    })).toBe('#000000');
  });
});