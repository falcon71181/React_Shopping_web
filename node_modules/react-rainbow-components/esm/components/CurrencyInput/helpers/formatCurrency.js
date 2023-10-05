import isValidNumberValue from './isValidNumberValue';
export default function formatCurrency(_ref) {
  var value = _ref.value,
      locale = _ref.locale,
      options = _ref.options;

  if (value === '-') {
    return value;
  }

  if (isValidNumberValue(value)) {
    return new Intl.NumberFormat(locale, options).format(Number(value));
  }

  return '';
}