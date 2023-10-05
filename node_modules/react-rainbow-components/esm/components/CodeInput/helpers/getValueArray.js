import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export default function getValueArray(value, maxLength) {
  if (value) {
    var extractedNumbers = value.toString().match(/\d+/g);

    if (extractedNumbers) {
      var numbersArray = extractedNumbers.join('').slice(0, maxLength).split('');
      var emptyFieldsArray = Array(maxLength - numbersArray.length).fill('');
      return numbersArray.concat.apply(numbersArray, _toConsumableArray(emptyFieldsArray));
    }
  }

  return Array(maxLength).fill('');
}