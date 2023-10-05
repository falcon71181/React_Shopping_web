import hasContent from '../hasContent';
describe('hasContent', function () {
  it('should return true', function () {
    var values = [{
      label: 'Label',
      name: 'Name'
    }, [{
      label: 'Label',
      name: 'Name'
    }]];
    values.forEach(function (value) {
      expect(hasContent(value)).toBe(true);
    });
  });
  it('should return false', function () {
    var values = [undefined, null, 0, false, true, []];
    values.forEach(function (value) {
      expect(hasContent(value)).toBe(false);
    });
  });
});