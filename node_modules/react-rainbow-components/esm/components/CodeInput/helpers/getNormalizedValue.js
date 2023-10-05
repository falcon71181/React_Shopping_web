import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import isNumeric from './isNumeric';
export default function getNormalizedValue(inputValue, inputIndex, value) {
  if (isNumeric(inputValue) || inputValue === '') {
    var newValue = _toConsumableArray(value);

    newValue[inputIndex] = inputValue;
    return newValue.join('').trim('');
  }

  return value.join('').trim();
}