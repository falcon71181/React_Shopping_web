import getColorValue from '../getColorValue';
describe('getColorValue', function () {
  it('should return undefined when value is falsey', function () {
    var values = [null, undefined, false];
    values.forEach(function (val) {
      expect(getColorValue(val)).toBe(undefined);
    });
  });
  it('should return undefined when the value is invalid', function () {
    var values = [{}, '#fff', true, [], {
      hex: 'ccc'
    }];
    values.forEach(function (val) {
      expect(getColorValue(val)).toBe(undefined);
    });
  });
  it('should return the correct ColorPicker value when value is valid', function () {
    var value = {
      hex: '#000',
      alpha: 0.8
    };
    expect(getColorValue(value)).toEqual({
      hex: '#000',
      rgba: [0, 0, 0, 0.8]
    });
  });
});