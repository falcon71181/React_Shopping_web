import { normalizeData } from '..';
describe('normalizeData', function () {
  it('should return the same data passed when it is an empty array', function () {
    expect(normalizeData([])).toEqual([]);
  });
  it('should return the same data passed when it is an array', function () {
    expect(normalizeData(['data-1', 'data-2'])).toEqual(['data-1', 'data-2']);
  });
  it('should return an empty array when data passed is not an array', function () {
    var values = [null, undefined, {}, 'asd', 123, function () {}];
    values.forEach(function (value) {
      return expect(normalizeData(value)).toEqual([]);
    });
  });
});