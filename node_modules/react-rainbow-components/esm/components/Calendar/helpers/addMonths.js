export default function addMonths(date, months) {
  var clone = new Date(date);
  clone.setMonth(date.getMonth() + months);
  return clone;
}