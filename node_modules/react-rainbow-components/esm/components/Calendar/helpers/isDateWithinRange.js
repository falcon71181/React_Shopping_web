import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import compareDates from './compareDates';
export default function isDateWithinRange(date, range) {
  if (date && Array.isArray(range) && range.length > 1) {
    var _range = _slicedToArray(range, 2),
        rangeStart = _range[0],
        rangeEnd = _range[1];

    return compareDates(date, rangeStart) >= 0 && compareDates(date, rangeEnd) <= 0;
  }

  return false;
}