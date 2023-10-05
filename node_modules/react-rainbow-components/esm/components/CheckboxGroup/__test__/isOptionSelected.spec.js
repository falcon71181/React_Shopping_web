import isOptionSelected from '../isOptionSelected';
var option = {
  value: 'value-1'
};
describe('isOptionSelected', function () {
  it('should return false if values is falsy', function () {
    expect(isOptionSelected(undefined, option)).toBe(false);
    expect(isOptionSelected(null, option)).toBe(false);
    expect(isOptionSelected('', option)).toBe(false);
    expect(isOptionSelected(0, option)).toBe(false);
  });
  it('should return false if values is truty but not an array', function () {
    expect(isOptionSelected({}, option)).toBe(false);
    expect(isOptionSelected('some text', option)).toBe(false);
    expect(isOptionSelected(12, option)).toBe(false);
    expect(isOptionSelected(function () {}, option)).toBe(false);
  });
  it('should return false if the option does not exists in the values array', function () {
    expect(isOptionSelected([], option)).toBe(false);
    expect(isOptionSelected(['value-2'], option)).toBe(false);
  });
  it('should return true if the option exists in the values array', function () {
    expect(isOptionSelected(['value-2', 'value-1', 'value-5'], option)).toBe(true);
  });
});