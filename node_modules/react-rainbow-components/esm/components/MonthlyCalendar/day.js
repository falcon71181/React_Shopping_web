import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { compareDates } from '../Calendar/helpers';
import { MonthCalendarContext } from './context';
import StyledDayContainer from './styled/dayContainer';
import StyledDay from './styled/day';
import StyledDayLabel from './styled/dayLabel';
import StyledDayAdjacent from './styled/dayAdjacent';
import StyledDayContent from './styled/dayContent';
export default function Day(props) {
  var date = props.date,
      firstDayMonth = props.firstDayMonth,
      isSelected = props.isSelected,
      minDate = props.minDate,
      maxDate = props.maxDate,
      onSelect = props.onSelect;

  var _useContext = useContext(MonthCalendarContext),
      dateComponent = _useContext.dateComponent;

  var day = date.getDate();
  var isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
  var isDisabled = useMemo(function () {
    return compareDates(date, maxDate) > 0 || compareDates(date, minDate) < 0;
  }, [date, maxDate, minDate]);

  var handleSelectDate = function handleSelectDate() {
    return onSelect({
      date: date
    });
  };

  if (isAdjacentDate || isDisabled) {
    return React.createElement(StyledDayContainer, {
      role: "gridcell",
      "aria-selected": "false"
    }, React.createElement(StyledDay, {
      disabled: true
    }, React.createElement(StyledDayAdjacent, null, day)));
  }

  return React.createElement(StyledDayContainer, {
    role: "gridcell"
  }, React.createElement(StyledDay, {
    isSelected: isSelected,
    onClick: handleSelectDate
  }, React.createElement(StyledDayLabel, null, day), React.createElement(StyledDayContent, null, dateComponent && dateComponent(date))));
}
Day.propTypes = {
  date: PropTypes.instanceOf(Date),
  firstDayMonth: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};
Day.defaultProps = {
  date: undefined,
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  isSelected: false,
  onSelect: function onSelect() {}
};