import getValueNames from '../getValueNames';
describe('getValueNames', function () {
  it('should return right value', function () {
    var values = [null, undefined, '', 'abc', 1, [], [1, 2], {}, {
      name: 'ok'
    }, [{
      name: 'ok1'
    }, {
      name: 'ok2'
    }]];
    var expectedResults = [[], [], [], [], [], [], [], [], ['ok'], ['ok1', 'ok2']];
    values.forEach(function (value, index) {
      expect(getValueNames(value)).toEqual(expectedResults[index]);
    });
  });
});