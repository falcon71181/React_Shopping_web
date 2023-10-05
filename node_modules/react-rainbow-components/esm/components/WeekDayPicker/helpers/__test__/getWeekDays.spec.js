import getWeekDays from '../getWeekDays';
describe('getWeekDays', function () {
  it('should return the weekDays values available for selection', function () {
    expect(getWeekDays()).toEqual(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
  });
});