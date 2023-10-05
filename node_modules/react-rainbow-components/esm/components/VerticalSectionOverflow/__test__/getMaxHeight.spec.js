import getMaxHeight from '../getMaxHeight';
describe('getMaxHeight', function () {
  it('should return the right height when is expanded and children has length of 3', function () {
    expect(getMaxHeight([{}, {}, {}], true)).toBe(135);
  });
  it('should return the right height when is expanded and children is a single object', function () {
    expect(getMaxHeight({}, true)).toBe(45);
  });
  it('should return 0 when is expanded and children is null', function () {
    expect(getMaxHeight(null, true)).toBe(0);
  });
  it('should return 0 when is not expanded', function () {
    expect(getMaxHeight({}, false)).toBe(0);
  });
});