import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import formatInteger from '../../CurrencyInput/helpers/formatInteger';
import { isValidNumberValue } from '../../CurrencyInput/helpers';
export default function normalizeValue(_ref) {
  var value = _ref.value,
      locale = _ref.locale,
      decimalSeparator = _ref.decimalSeparator,
      options = _ref.options;
  var stringValue = String(value);

  if (value === '-') {
    return value;
  }

  if (isValidNumberValue(value)) {
    var _stringValue$split = stringValue.split('.'),
        _stringValue$split2 = _slicedToArray(_stringValue$split, 2),
        integer = _stringValue$split2[0],
        fraction = _stringValue$split2[1];

    var formattedInteger = formatInteger({
      integer: Number(integer) / 100,
      locale: locale,
      options: options
    });
    return stringValue.indexOf('.') !== -1 ? "".concat(formattedInteger).concat(decimalSeparator).concat(fraction || '') : formattedInteger;
  }

  return '';
}