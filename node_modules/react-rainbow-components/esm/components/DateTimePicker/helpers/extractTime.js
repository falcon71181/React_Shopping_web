import isValidDate from './isValidDate';
import zeroFill from './zeroFill';
export default function extractTime(date) {
  var hour24 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (date) {
    var value = typeof date === 'string' ? new Date(date) : date;

    if (!isValidDate(value)) {
      return '';
    }

    if (!hour24) {
      var _hours = (value.getHours() + 11) % 12 + 1;

      var suffix = value.getHours() >= 12 ? 'PM' : 'AM';

      var _minutes = value.getMinutes();

      return "".concat(zeroFill(_hours, 2), ":").concat(zeroFill(_minutes, 2), " ").concat(suffix);
    }

    var hours = value.getHours();
    var minutes = value.getMinutes();
    return "".concat(zeroFill(hours, 2), ":").concat(zeroFill(minutes, 2));
  }

  return '';
}