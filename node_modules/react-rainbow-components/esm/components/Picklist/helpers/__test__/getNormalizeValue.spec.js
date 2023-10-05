import getNormalizeValue from '../getNormalizeValue';
describe('getNormalizeValue', function () {
  it('should return right value', function () {
    var values = [null, undefined, '', 'abc', 1, [], [1, 2], {}, {
      label: 'ok'
    }];
    var expectedResults = [{}, {}, {}, {}, {}, {}, {}, {}, {
      label: 'ok'
    }];
    values.forEach(function (value, index) {
      expect(getNormalizeValue(value)).toEqual(expectedResults[index]);
    });
  });
});