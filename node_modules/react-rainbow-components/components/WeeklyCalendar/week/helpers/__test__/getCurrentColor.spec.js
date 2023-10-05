"use strict";

var _ = require("..");

var mockGetContrastText = jest.fn(function () {
  return '#ffffff';
});
var palette = {
  brand: {
    main: '#000000'
  },
  getContrastText: mockGetContrastText
};
describe('getCurrentColor', function () {
  it('should return color when this is a valid color', function () {
    var color = '#1700ff';
    var backgroundColor = '#ff0008';
    expect((0, _.getCurrentColor)({
      color: color,
      backgroundColor: backgroundColor,
      palette: palette
    })).toBe('#1700ff');
  });
  it('should call getContrastText with backgroundColor when color is not a valid color', function () {
    var color = '#1700ff#';
    var backgroundColor = '#ff0008';
    expect((0, _.getCurrentColor)({
      color: color,
      backgroundColor: backgroundColor,
      palette: palette
    })).toBe('#ffffff');
    expect(mockGetContrastText).toHaveBeenCalledWith('#ff0008');
  });
  it('should call getContrastText with "#000000" when color and backgroundColor are not valid colors', function () {
    var color = '#1700ff#';
    var backgroundColor = '#ff0008#';
    expect((0, _.getCurrentColor)({
      color: color,
      backgroundColor: backgroundColor,
      palette: palette
    })).toBe('#ffffff');
    expect(mockGetContrastText).toHaveBeenCalledWith('#000000');
  });
});