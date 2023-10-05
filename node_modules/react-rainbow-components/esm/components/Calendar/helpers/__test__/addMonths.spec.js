import addMonths from '../addMonths';
describe('addMonths', function () {
  it('should return a date 2 month after', function () {
    var date = new Date(2019, 2, 1);
    expect(addMonths(date, 2).getMonth()).toBe(4);
  });
});