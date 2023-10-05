import getNormalizedValue from '../getNormalizedValue';
describe('getNormalizedValue', function () {
  it('should return empty if inputValue is not number', function () {
    var inputValue = '';
    var inputIndex = 0;
    var value = [];
    expect(getNormalizedValue(inputValue, inputIndex, value)).toBe('');
  });
  it('should return the right normalized value by joining current array value with new value', function () {
    var inputValue = '2';
    var inputIndex = 1;
    var value = ['2', ''];
    expect(getNormalizedValue(inputValue, inputIndex, value)).toBe('22');
  });
  it('should return the right normalized value when removing value from index 1', function () {
    var inputValue = '';
    var inputIndex = 1;
    var value = ['2', '2'];
    expect(getNormalizedValue(inputValue, inputIndex, value)).toBe('2');
  });
});