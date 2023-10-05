import { recomposeColor } from '../color';
describe('recomposeColor', function () {
  var colors = ['rgb(1, 182, 245)', 'hsl(0, 100%, 50%)'];
  var colorsDecomposed = [{
    type: 'rgb',
    values: [1, 182, 245]
  }, {
    type: 'hsl',
    values: [0, 100, 50]
  }];
  var EMPTY_STRING = '';
  it('should return the right value', function () {
    colorsDecomposed.forEach(function (value, idx) {
      expect(recomposeColor(value)).toBe(colors[idx]);
    });
  });
  it('should return an empty string with the wrong color', function () {
    expect(recomposeColor('#f00')).toBe(EMPTY_STRING);
  });
});