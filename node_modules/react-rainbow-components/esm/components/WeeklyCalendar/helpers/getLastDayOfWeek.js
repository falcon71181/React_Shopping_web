export default function getLastDayOfWeek(date) {
  var clone = new Date(date);
  clone.setDate(clone.getDate() + (6 - clone.getDay()));
  clone.setHours(0, 0, 0, 0);
  return clone;
}