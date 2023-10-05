export default function getNextMinute(value) {
  var number = Number(value);

  if (!value || number === 59) {
    return '0';
  }

  return String(number + 1);
}