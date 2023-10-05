import isNumber from './isNumber';
export default function normalizeMinutes(value) {
  if (isNumber(value)) {
    var number = Number(value);

    if (number < 10) {
      return "0".concat(number);
    }

    return String(number);
  }

  return '';
}