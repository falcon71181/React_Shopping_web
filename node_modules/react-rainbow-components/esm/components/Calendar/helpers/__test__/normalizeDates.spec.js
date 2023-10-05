import normalizeDates from '../normalizeDates';
describe('normalizeDates', function () {
  it('should return normalize the array of dates', function () {
    var array = [undefined, '09/07/2022', new Date('09/08/2022'), 1];
    var expected = [new Date('09/07/2022'), new Date('09/08/2022')];
    expect(normalizeDates(array)).toEqual(expected);
  });
});