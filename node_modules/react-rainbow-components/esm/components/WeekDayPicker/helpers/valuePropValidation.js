import getWeekDays from './getWeekDays';
var weekDays = getWeekDays();
export default function valuePropValidation(propValue, key, componentName, location, propFullName) {
  if (!weekDays.some(function (day) {
    return day === propValue[key];
  })) {
    return new Error("Invalid prop ".concat(propFullName, " supplied to ").concat(componentName, " Validation failed."));
  }

  return null;
}