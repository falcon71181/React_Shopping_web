import getWeekDays from './getWeekDays';
var weekDays = getWeekDays();

var sortDays = function sortDays(itemA, itemB) {
  var weekDayA = weekDays.indexOf(itemA);
  var weekDayB = weekDays.indexOf(itemB);
  if (weekDayA > weekDayB) return 1;
  if (weekDayA < weekDayB) return -1;
  return 0;
};

export default function sortWeekDays(values) {
  return values.sort(sortDays);
}