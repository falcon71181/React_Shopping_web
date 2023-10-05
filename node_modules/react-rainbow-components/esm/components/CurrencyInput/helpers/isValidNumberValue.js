import { isBoolean, isEmpty, isNumber } from '@rainbow-modules/validation';
export default function isValidNumberValue(value) {
  var number = Number(value);
  return !isBoolean(value) && !isEmpty(value) && isNumber(number) && Number.isFinite(number);
}