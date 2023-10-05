import getWeekDayLabel from '../getWeekDayLabel';
global.Intl = {
  DateTimeFormat: jest.fn(function (locale) {
    return {
      format: jest.fn(function () {
        if (locale === 'es-MX') {
          return 'L';
        }

        return 'M';
      })
    };
  })
};
describe('getWeekDayLabel', function () {
  it('should return day label in english when locale is not manually set', function () {
    var label = getWeekDayLabel('monday');
    expect(label).toBe('M');
  });
  it('should return empty string when no day is sent', function () {
    var label = getWeekDayLabel();
    expect(label).toBe('');
  });
  it('should return empty string when day is not valid', function () {
    var label = getWeekDayLabel('wrong-day-value');
    expect(label).toBe('');
  });
  it('should return localized string', function () {
    var label = getWeekDayLabel('monday', 'es-MX');
    expect(label).toBe('L');
  });
});