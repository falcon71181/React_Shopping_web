import getWeekDays from './getWeekDays';
var weekDays = getWeekDays();
export default function getWeekDayLabel(weekDay, locale) {
  if (weekDay && weekDays.includes(weekDay)) {
    try {
      var dayIndex = weekDays.findIndex(function (value) {
        return value === weekDay;
      });
      var dayString = "January ".concat(dayIndex + 2, ", 2000 00:00:00");
      var date = new Date(dayString);
      var config = {
        weekday: 'narrow'
      };
      return new Intl.DateTimeFormat(locale, config).format(date);
    } catch (error) {
      return '';
    }
  }

  return '';
}