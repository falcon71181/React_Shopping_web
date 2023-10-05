export default function isSameYear(date1, date2) {
  try {
    var value1 = typeof date1 === 'string' ? new Date(date1) : date1;
    var value2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return !!(value1 && value2 && value1.getYear() === value2.getYear());
  } catch (error) {
    console.error(error);
    return false;
  }
}