import sortWeekDays from '../sortWeekDays';
describe('sortWeekDays', function () {
  it('should return sorted day list values from sunday to saturday', function () {
    expect(sortWeekDays(['monday', 'friday', 'tuesday', 'sunday', 'saturday', 'wednesday', 'thursday'])).toEqual(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
  });
});