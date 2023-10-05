import getFormattedEventTime from './getFormattedEventTime';

var formatter = function formatter(locale) {
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export default function getFormattedEventTimeRange(startDate, endDate, locale) {
  var startDateParts = formatter(locale).formatToParts(startDate);
  var endDateParts = formatter(locale).formatToParts(endDate);
  var formattedStartDate = getFormattedEventTime(startDateParts.filter(function (_ref, index, arr) {
    var type = _ref.type,
        value = _ref.value;

    if (type.toLowerCase() === 'dayperiod' && value === endDateParts[index].value) {
      return false;
    }

    var next = arr[index + 1];

    if (next && next.type.toLowerCase() === 'dayperiod' && next.value === endDateParts[index + 1].value) {
      return false;
    }

    return true;
  }));
  var formattedEndDate = getFormattedEventTime(endDateParts);
  return "".concat(formattedStartDate, " - ").concat(formattedEndDate);
}