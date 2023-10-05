import getContent from '../getContent';
describe('getContent', function () {
  it('should return null', function () {
    var values = [false, true, undefined, null];
    values.forEach(function (value) {
      expect(getContent(value)).toBe(null);
    });
  });
  it('should return the right string', function () {
    var values = [{
      label: 'Label'
    }, [{
      label: 'Label 1'
    }, {
      label: 'Label 2'
    }]];
    var expected = ['Label', 'Label 1, Label 2'];
    values.forEach(function (value, index) {
      expect(getContent(value)).toBe(expected[index]);
    });
  });
});