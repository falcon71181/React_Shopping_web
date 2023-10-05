import zeroFill from '../zeroFill';
describe('zeroFill', function () {
  it('should return empty string', function () {
    var values = [undefined, null, ''];
    values.forEach(function (value) {
      expect(zeroFill(value, 2)).toBe('');
    });
  });
  it('should return correct values string', function () {
    var values = [1, 3, '4', 0];
    var expectedResult = ['01', '03', '04', '00'];
    values.forEach(function (value, index) {
      expect(zeroFill(value, 2)).toBe(expectedResult[index]);
    });
  });
});