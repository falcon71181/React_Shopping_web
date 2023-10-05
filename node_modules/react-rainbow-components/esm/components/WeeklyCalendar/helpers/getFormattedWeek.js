import getLastDayOfWeek from './getLastDayOfWeek';

var formattedMonth = function formattedMonth(day, locale) {
  return new Intl.DateTimeFormat(locale, {
    month: 'short'
  }).format(day);
};

export default function getFormattedWeek(firstDay, locale) {
  var lastDay = getLastDayOfWeek(firstDay);
  var formattedWeek = "".concat(formattedMonth(firstDay, locale), " ").concat(firstDay.getDate());

  if (firstDay.getFullYear() !== lastDay.getFullYear()) {
    formattedWeek = formattedWeek.concat(", ".concat(firstDay.getFullYear()));
  }

  formattedWeek = formattedWeek.concat(" - ");

  if (firstDay.getMonth() !== lastDay.getMonth()) {
    formattedWeek = formattedWeek.concat("".concat(formattedMonth(lastDay, locale), " "));
  }

  formattedWeek = formattedWeek.concat("".concat(lastDay.getDate(), ", ").concat(lastDay.getFullYear()));
  return formattedWeek;
}