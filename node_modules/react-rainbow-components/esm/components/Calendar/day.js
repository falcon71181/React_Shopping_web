import _extends from "@babel/runtime/helpers/extends";
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import StyledDay from './styled/day';
import StyledDayAdjacent from './styled/dayAdjacent';
import StyledDayButton from './styled/dayButton';
import StyledRangeHighlight from './styled/rangeHighlight';
import { isSameDay, compareDates } from './helpers';
import { useRangeStartDate, useRangeEndDate } from './hooks';
import isInArray from './helpers/isInArray';

function DayComponent(props) {
  var date = props.date,
      firstDayMonth = props.firstDayMonth,
      isSelected = props.isSelected,
      minDate = props.minDate,
      maxDate = props.maxDate,
      maxRangeEnd = props.maxRangeEnd,
      onChange = props.onChange,
      isWithinRange = props.isWithinRange,
      isFirstDayOfWeek = props.isFirstDayOfWeek,
      isLastDayOfWeek = props.isLastDayOfWeek,
      useAutoFocus = props.useAutoFocus,
      focusedDate = props.focusedDate,
      currentRange = props.currentRange,
      disabledDays = props.disabledDays,
      privateKeyDown = props.privateKeyDown,
      privateOnFocus = props.privateOnFocus,
      privateOnBlur = props.privateOnBlur,
      privateOnHover = props.privateOnHover;
  var day = date.getDate();
  var isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
  var isDisabled = isAdjacentDate || compareDates(date, maxDate) > 0 || compareDates(date, minDate) < 0 || maxRangeEnd && compareDates(date, maxRangeEnd) > 0 || isInArray(date, disabledDays);
  var tabIndex = isSameDay(focusedDate, date) ? 0 : -1;
  var buttonRef = useRef();
  var isRangeStartDate = useRangeStartDate(date, currentRange);
  var isRangeEndDate = useRangeEndDate(date, currentRange);
  var isToday = isSameDay(date, new Date());
  useEffect(function () {
    if (useAutoFocus && buttonRef.current && tabIndex !== -1) {
      buttonRef.current.focus();
    }
  }, [tabIndex, useAutoFocus]);

  if (isAdjacentDate || isDisabled) {
    return React.createElement(StyledDay, {
      role: "gridcell",
      "aria-selected": "false"
    }, React.createElement(StyledDayAdjacent, {
      tabIndex: tabIndex,
      ref: buttonRef,
      onKeyDown: privateKeyDown,
      onFocus: privateOnFocus,
      onBlur: privateOnBlur,
      role: "button",
      "aria-disabled": "true"
    }, day));
  }

  return React.createElement(StyledDay, {
    role: "gridcell"
  }, React.createElement(StyledRangeHighlight, {
    isVisible: isWithinRange && !(isRangeStartDate && isRangeEndDate),
    isFirstInRange: isRangeStartDate,
    isLastInRange: isRangeEndDate,
    isFirstDayOfWeek: isFirstDayOfWeek,
    isLastDayOfWeek: isLastDayOfWeek,
    isToday: isToday
  }, React.createElement(StyledDayButton, {
    ref: buttonRef,
    tabIndex: tabIndex,
    onClick: function onClick() {
      return onChange(date);
    },
    onMouseEnter: function onMouseEnter() {
      return privateOnHover(date);
    },
    isSelected: isSelected,
    isHovered: !isSelected && isRangeEndDate,
    "data-selected": isSelected,
    onKeyDown: privateKeyDown,
    onFocus: privateOnFocus,
    onBlur: privateOnBlur,
    isWithinRange: isWithinRange,
    isToday: isToday
  }, day)));
}

export default function Day(props) {
  return React.createElement(Consumer, null, function (values) {
    return React.createElement(DayComponent, _extends({}, values, props));
  });
}
Day.propTypes = {
  date: PropTypes.instanceOf(Date),
  firstDayMonth: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  isSelected: PropTypes.bool,
  isWithinRange: PropTypes.bool,
  isFirstDayOfWeek: PropTypes.bool,
  isLastDayOfWeek: PropTypes.bool,
  onChange: PropTypes.func
};
Day.defaultProps = {
  date: undefined,
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  isSelected: false,
  isWithinRange: false,
  isFirstDayOfWeek: false,
  isLastDayOfWeek: false,
  onChange: function onChange() {}
};