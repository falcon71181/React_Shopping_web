import isSameDay from './isSameDay';
export default function isInArray(value, array) {
  if (!array) return false;
  return array.some(function (day) {
    return isSameDay(day, value);
  });
}