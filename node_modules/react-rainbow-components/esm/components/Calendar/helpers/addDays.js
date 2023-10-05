export default function addDays(date, days) {
  var ret = new Date(date);
  ret.setDate(ret.getDate() + days);
  return new Date(ret);
}