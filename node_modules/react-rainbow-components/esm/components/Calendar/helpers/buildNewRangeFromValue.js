import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import compareDates from './compareDates';
export default function buildNewRangeFromValue(value, currentRange) {
  if (currentRange && currentRange.length > 0) {
    var _currentRange = _slicedToArray(currentRange, 2),
        rangeStart = _currentRange[0],
        rangeEnd = _currentRange[1];

    var newRangeStart = new Date(rangeStart);
    newRangeStart.setHours(0, 0, 0, 0);

    if (!rangeEnd) {
      if (compareDates(value, newRangeStart) <= 0) {
        value.setHours(0, 0, 0, 0);
        return {
          range: [value]
        };
      }

      value.setHours(23, 59, 59, 999);
      return {
        range: [newRangeStart, value]
      };
    }
  }

  value.setHours(0, 0, 0, 0);
  return {
    range: [value]
  };
}