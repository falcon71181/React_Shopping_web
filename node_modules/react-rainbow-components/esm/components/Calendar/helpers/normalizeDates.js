import normalizeDate from './normalizeDate';
export default function normalizeDates(dates) {
  return dates.filter(function (date) {
    return date && (typeof date === 'string' || date instanceof Date);
  }).map(function (date) {
    return normalizeDate(date);
  });
}