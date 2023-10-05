import normalizeRange from '../normalizeRange';
jest.mock('../normalizeDate', function () {
  return jest.fn(function () {
    return '2019-01-01';
  });
});
describe('normalizeRange', function () {
  it('should return empty array when range is null or undefined', function () {
    expect(normalizeRange(null)).toEqual([]);
    expect(normalizeRange(undefined)).toEqual([]);
  });
  it('should return array with single normalized date when range is not array', function () {
    expect(normalizeRange(new Date(2019, 0, 1))).toEqual(['2019-01-01']);
    expect(normalizeRange('2019-01-02')).toEqual(['2019-01-01']);
  });
  it('should return range with normalized values', function () {
    expect(normalizeRange([new Date(), new Date()])).toEqual(['2019-01-01', '2019-01-01']);
  });
});