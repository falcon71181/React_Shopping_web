import normalizeValue from '../normalizeValue';
describe('normalizeValue', function () {
  it('should return an empty array', function () {
    var values = [undefined, null, 0, true, []];
    values.forEach(function (val) {
      expect(normalizeValue(val)).toEqual([]);
    });
  });
  it('should return the right values', function () {
    var values = [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon',
      extra: 'value'
    }, [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon',
      extra: 'value'
    }]];
    var expected = [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon'
    }, [{
      label: 'Label',
      name: 'Name',
      value: 'Value',
      icon: 'Icon'
    }]];
    values.forEach(function (val, index) {
      expect(normalizeValue(val)).toEqual(expected[index]);
    });
  });
});