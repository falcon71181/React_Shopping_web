import getNormalizedValue from '../getNormalizedValue';
describe('getNormalizedValue', function () {
  it('should return the same value when multiple is true', function () {
    var value = '';
    var isChecked = true;
    var isMultiple = true;
    expect(getNormalizedValue('monday', isChecked, isMultiple, value)).toBe('monday');
  });
  it('should return the same value when multiple is true and value is undefined', function () {
    var isChecked = true;
    var isMultiple = true;
    expect(getNormalizedValue('monday', isChecked, isMultiple)).toBe('monday');
  });
  it('should return an untouched array list when isChecked is false and multiple is true', function () {
    var value = ['monday', 'friday'];
    var isChecked = false;
    var isMultiple = true;
    expect(getNormalizedValue('saturday', isChecked, isMultiple, value)).toEqual(['monday', 'friday']);
  });
  it('should return a merged array list when isChecked is true and multiple is true', function () {
    var value = ['monday', 'friday'];
    var isChecked = true;
    var isMultiple = true;
    expect(getNormalizedValue('saturday', isChecked, isMultiple, value)).toEqual(['monday', 'friday', 'saturday']);
  });
});