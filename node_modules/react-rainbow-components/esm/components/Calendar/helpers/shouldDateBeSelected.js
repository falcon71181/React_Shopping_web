import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import isSameDay from './isSameDay';
export default function shouldDateBeSelected(date, currentValue, selectionType, currentRange) {
  if (selectionType === 'single') return isSameDay(date, currentValue);

  if (Array.isArray(currentRange) && currentRange.length > 0) {
    var _currentRange = _slicedToArray(currentRange, 2),
        rangeStart = _currentRange[0],
        rangeEnd = _currentRange[1];

    return isSameDay(date, rangeStart) || isSameDay(date, rangeEnd);
  }

  return false;
}