import isPrintableCharacter from '../isPrintableCharacter';
describe('isPrintableCharacter', function () {
  it('should return true', function () {
    ['a', 'b', 'z', '3', '*', '['].forEach(function (character) {
      expect(isPrintableCharacter(character)).toBe(true);
    });
  });
  it('should return false', function () {
    ['aa', null, undefined, [], {}].forEach(function (character) {
      expect(isPrintableCharacter(character)).toBe(false);
    });
  });
});