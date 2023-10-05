export default function getNumbersFromClipboard(value) {
  if (value) {
    var extractedNumbers = value.match(/\d+/g);

    if (extractedNumbers) {
      return extractedNumbers.join('');
    }
  }

  return '';
}