import React from 'react';
import PropTypes from 'prop-types';
import { addDays, isSameDay } from '../Calendar/helpers';
import Day from './day';
export default function Week(props) {
  var selectedDate = props.selectedDate,
      startDate = props.startDate,
      endDate = props.endDate,
      minDate = props.minDate,
      maxDate = props.maxDate,
      firstDayMonth = props.firstDayMonth,
      onSelectDate = props.onSelectDate;

  function Days() {
    var date = new Date(startDate);
    var days = [];

    while (date <= endDate) {
      days.push(React.createElement(Day, {
        date: date,
        firstDayMonth: firstDayMonth,
        key: date.getTime(),
        minDate: minDate,
        maxDate: maxDate,
        onSelect: onSelectDate,
        isSelected: isSameDay(date, selectedDate)
      }));
      date = addDays(date, 1);
    }

    return days;
  }

  return React.createElement("tr", null, React.createElement(Days, null));
}
Week.propTypes = {
  firstDayMonth: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  onSelectDate: PropTypes.func
};
Week.defaultProps = {
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  startDate: undefined,
  endDate: undefined,
  selectedDate: undefined,
  onSelectDate: function onSelectDate() {}
};