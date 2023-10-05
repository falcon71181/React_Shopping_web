import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier, useLocale } from '../../libs/hooks';
import { getLastDayMonth, addMonths } from '../Calendar/helpers';
import { useYearsRange, useCurrentMonth, useFormattedMonth } from './hooks';
import { Provider } from './context';
import Select from '../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import DaysOfWeek from './daysOfWeek';
import Month from './month';
import StyledControlsContainer from './styled/controlsContainer';
import StyledMonthContainer from './styled/monthContainer';
import StyledArrowButton from './styled/arrowButton';
import StyledMonth from './styled/month';
import StyledTable from './styled/table';
export default function MonthlyCalendar(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      minDate = props.minDate,
      maxDate = props.maxDate,
      currentMonth = props.currentMonth,
      selectedDate = props.selectedDate,
      locale = props.locale,
      onSelectDate = props.onSelectDate,
      onMonthChange = props.onMonthChange,
      dateComponent = props.dateComponent;
  var monthLabelId = useUniqueIdentifier('month');
  var currentLocale = useLocale(locale);
  var month = useCurrentMonth(currentMonth, minDate, maxDate);
  var yearsRange = useYearsRange(minDate, maxDate, month);
  var formattedMonth = useFormattedMonth(month, currentLocale);
  var currentYear = month.getFullYear();
  var lastYearItem = yearsRange[yearsRange.length - 1];
  var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
  var disableNextMonth = addMonths(month, 1) > maxSelectableDate;
  var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
  var prevDate = useMemo(function () {
    return getLastDayMonth(addMonths(month, -1));
  }, [month]);
  var disablePreviousMonth = prevDate < minSelectableDate;

  var selectPreviousMonth = function selectPreviousMonth() {
    var newMonth = addMonths(month, -1);
    newMonth.setHours(0, 0, 0, 0);
    return onMonthChange({
      month: newMonth
    });
  };

  var selectNextMonth = function selectNextMonth() {
    var newMonth = addMonths(month, 1);
    newMonth.setHours(0, 0, 0, 0);
    return onMonthChange({
      month: newMonth
    });
  };

  var handleYearChange = function handleYearChange(event) {
    var year = +event.target.value;
    var newMonth = new Date(month);
    newMonth.setHours(0, 0, 0, 0);
    newMonth.setFullYear(year);
    return onMonthChange({
      month: newMonth
    });
  };

  return React.createElement("section", {
    id: id,
    className: className,
    style: style
  }, React.createElement(StyledControlsContainer, null, React.createElement(StyledMonthContainer, null, React.createElement(StyledArrowButton, {
    onClick: selectPreviousMonth,
    icon: React.createElement(LeftIcon, null),
    shaded: true,
    disabled: disablePreviousMonth,
    variant: "border-filled",
    assistiveText: "Previous Month"
  }), React.createElement(StyledMonth, {
    id: monthLabelId,
    "data-id": "month"
  }, formattedMonth), React.createElement(StyledArrowButton, {
    onClick: selectNextMonth,
    icon: React.createElement(RightIcon, null),
    shaded: true,
    disabled: disableNextMonth,
    variant: "border-filled",
    assistiveText: "Next Month"
  })), React.createElement(Select, {
    label: "select year",
    hideLabel: true,
    value: currentYear,
    options: yearsRange,
    onChange: handleYearChange
  })), React.createElement(StyledTable, {
    role: "grid",
    "aria-labelledby": monthLabelId
  }, React.createElement(DaysOfWeek, {
    locale: currentLocale
  }), React.createElement(Provider, {
    value: {
      dateComponent: dateComponent
    }
  }, React.createElement(Month, {
    selectedDate: selectedDate,
    firstDayMonth: month,
    minDate: minDate,
    maxDate: maxDate,
    onSelectDate: onSelectDate
  }))));
}
MonthlyCalendar.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  locale: PropTypes.string,
  currentMonth: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onSelectDate: PropTypes.func,
  onMonthChange: PropTypes.func,
  dateComponent: PropTypes.func
};
MonthlyCalendar.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  locale: undefined,
  currentMonth: undefined,
  selectedDate: undefined,
  minDate: undefined,
  maxDate: undefined,
  dateComponent: undefined,
  onSelectDate: function onSelectDate() {},
  onMonthChange: function onMonthChange() {}
};