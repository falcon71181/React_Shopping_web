export default function getPrevMinute(value) {
  var number = Number(value);

  if (!value || number === 0) {
    return '59';
  }

  return String(number - 1);
}