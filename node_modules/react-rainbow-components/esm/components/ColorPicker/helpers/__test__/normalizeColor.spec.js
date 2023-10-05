import normalizeColor, { defaultColor } from '../normalizeColor';
describe('normalizeColor', function () {
  it('should return default value', function () {
    var values = ['', 1, [], {}, true, {
      hex: '',
      rgba: '',
      hvs: ''
    }];
    values.forEach(function (value) {
      expect(normalizeColor(value)).toBe(defaultColor);
    });
  });
  it('should return the expect value', function () {
    var values = [{
      hex: '#ffffff'
    }, {
      rgba: [255, 255, 255, 1]
    }, {
      hsv: [0, 0, 100]
    }, {
      hex: '#ffffff',
      rgba: [255, 255, 255, 1]
    }];
    var result = {
      hex: '#ffffff',
      rgba: [255, 255, 255, 1],
      hsv: [0, 0, 100]
    };
    values.forEach(function (value) {
      expect(normalizeColor(value)).toStrictEqual(result);
    });
  });
});