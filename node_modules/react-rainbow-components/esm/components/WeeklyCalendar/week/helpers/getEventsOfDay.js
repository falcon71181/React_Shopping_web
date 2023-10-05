import { addDays } from '../../../Calendar/helpers';
export default function getEventsOfDay(events, day) {
  var first = new Date(day);
  var last = addDays(first, 1);
  return events.filter(function (event) {
    return event.startDate >= first && event.endDate <= last;
  });
}