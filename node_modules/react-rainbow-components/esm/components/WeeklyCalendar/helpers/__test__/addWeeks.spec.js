import { addWeeks } from '..';
describe('addWeeks', function () {
  it('should return a date 2 week after', function () {
    var date = new Date(2020, 1, 2);
    expect(addWeeks(date, 2).getDate()).toBe(16);
  });
});