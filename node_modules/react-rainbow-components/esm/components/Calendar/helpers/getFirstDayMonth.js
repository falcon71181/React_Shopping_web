export default function getFirstDayMonth(date) {
  var clone = new Date(date);
  var isValidDate = !isNaN(clone.getTime());

  if (isValidDate) {
    clone.setDate(1);
    clone.setHours(0, 0, 0, 0);
    return clone;
  }

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(1);
  return today;
}