import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import sortWeekDays from './sortWeekDays';
export default function getNormalizedValue(weekDay, isChecked, multiple, value) {
  if (multiple && value) {
    if (isChecked && !value.includes(weekDay)) {
      return sortWeekDays([].concat(_toConsumableArray(value), [weekDay]));
    }

    return sortWeekDays(value.filter(function (day) {
      return day !== weekDay;
    }));
  }

  return weekDay;
}