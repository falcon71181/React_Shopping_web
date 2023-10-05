import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { Provider } from '../context';
import RightIcon from '../icons/rightArrow';
import LeftIcon from '../icons/leftArrow';
import DaysOfWeek from '../daysOfWeek';
import Month from '../month';
import { getFirstDayMonth, addMonths, getNextFocusedDate, isEmptyRange, isDateBelowLimit, isDateBeyondLimit, normalizeDates } from '../helpers';
import { useNormalizedValue, useYearsRange, useDisabledControls, useFormattedMonth, useHandleKeyDown } from './hooks';
import YearSelect from './yearSelect';
import StyledArrowButton from '../styled/arrowButton';
import StyledTable from '../styled/table';
import { StyledCalendar, StyledSection, StyledHeaderContainer, StyledMonth, StyledControlsContainer } from './styled';
import shouldUpdateCurrentMonth from './helpers/shouldUpdateCurrentMonth';
import useHeaderArrowNav from '../hooks/useHeaderArrowNav';
export default function DoubleCalendar(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      locale = props.locale,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      onChange = props.onChange,
      selectedRange = props.selectedRange,
      selectionType = props.selectionType,
      disabledDays = props.disabledDays;
  var currentValue = useNormalizedValue(value);

  var _useState = useState(currentValue),
      _useState2 = _slicedToArray(_useState, 2),
      focusedDate = _useState2[0],
      setFocusedDate = _useState2[1];

  var _useState3 = useState(getFirstDayMonth(currentValue)),
      _useState4 = _slicedToArray(_useState3, 2),
      currentMonth = _useState4[0],
      setCurrentMonth = _useState4[1];

  var _useState5 = useState(selectedRange),
      _useState6 = _slicedToArray(_useState5, 2),
      currentRange = _useState6[0],
      setCurrentRange = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      enableNavKeys = _useState8[0],
      setEnableNavKeys = _useState8[1];

  var _useState9 = useState(undefined),
      _useState10 = _slicedToArray(_useState9, 2),
      maxRangeEnd = _useState10[0],
      setMaxRangeEnd = _useState10[1];

  var rightCalendarMonth = addMonths(currentMonth, 1);
  var currentYear = currentMonth.getFullYear();
  var rightCalendarYear = rightCalendarMonth.getFullYear();
  var currentMonthLabelId = useUniqueIdentifier('first-month');
  var rightMonthLabelId = useUniqueIdentifier('second-month');
  var currentMonthFormattedLabel = useFormattedMonth(currentMonth, locale);
  var rightMonthFormattedLabel = useFormattedMonth(rightCalendarMonth, locale);
  var yearsRange = useYearsRange(minDate, maxDate, currentMonth);

  var _useDisabledControls = useDisabledControls(yearsRange, minDate, maxDate, currentMonth, rightCalendarMonth),
      _useDisabledControls2 = _slicedToArray(_useDisabledControls, 2),
      disablePreviousMonth = _useDisabledControls2[0],
      disableNextMonth = _useDisabledControls2[1];

  var handleKeyDown = useHandleKeyDown(focusedDate, currentMonth, rightCalendarMonth, minDate, maxDate, onChange, enableNavKeys, setFocusedDate, setCurrentMonth);
  var headerElementsRefs = [useRef(), useRef(), useRef(), useRef()];

  var _useHeaderArrowNav = useHeaderArrowNav({
    disableNextMonth: disableNextMonth,
    disablePreviousMonth: disablePreviousMonth,
    refs: headerElementsRefs,
    delta: 1,
    firstIndex: disablePreviousMonth ? 1 : 0,
    lastIndex: disableNextMonth ? 2 : 3
  }),
      updateFocusedItem = _useHeaderArrowNav.updateFocusedItem,
      handleHeaderElementKeyDown = _useHeaderArrowNav.handleKeyDown;

  var handleOnDayFocus = function handleOnDayFocus() {
    return setEnableNavKeys(true);
  };

  var handleOnDayBlur = function handleOnDayBlur() {
    return setEnableNavKeys(false);
  };

  var handleOnDayHover = useCallback(function (date) {
    if (selectionType === 'single' || isEmptyRange(selectedRange)) return;

    var _selectedRange = _slicedToArray(selectedRange, 2),
        rangeStart = _selectedRange[0],
        rangeEnd = _selectedRange[1];

    if (rangeEnd) return;

    var _currentRange = _slicedToArray(currentRange, 1),
        currentRangeStart = _currentRange[0];

    if (isDateBelowLimit(date, rangeStart)) {
      setCurrentRange([currentRangeStart]);
    } else {
      setCurrentRange([rangeStart, date]);
    }
  }, [currentRange, selectedRange, selectionType]);
  var prevMonthClick = useCallback(function () {
    var newMonth = addMonths(currentMonth, -1);
    setFocusedDate(getNextFocusedDate(value, newMonth));
    setCurrentMonth(newMonth);
    updateFocusedItem(0);
  }, [value, currentMonth, updateFocusedItem]);
  var nextMonthClick = useCallback(function () {
    var newMonth = addMonths(currentMonth, 1);
    setFocusedDate(getNextFocusedDate(value, newMonth));
    setCurrentMonth(newMonth);
    updateFocusedItem(3);
  }, [value, currentMonth, updateFocusedItem]);
  var handleLeftCalendarYearChange = useCallback(function (event) {
    var year = +event.target.value;
    var newMonth = new Date(currentMonth);
    newMonth.setFullYear(year);
    setFocusedDate(getNextFocusedDate(value, newMonth));
    setCurrentMonth(newMonth);
  }, [currentMonth, value]);
  var handleRightCalendarYearChange = useCallback(function (event) {
    var year = +event.target.value;
    var newMonth = new Date(rightCalendarMonth);
    newMonth.setFullYear(year);
    setFocusedDate(getNextFocusedDate(value, newMonth));
    setCurrentMonth(addMonths(newMonth, -1));
  }, [rightCalendarMonth, value]);
  useEffect(function () {
    setFocusedDate(currentValue);

    if (shouldUpdateCurrentMonth(currentValue, currentMonth, rightCalendarMonth)) {
      setCurrentMonth(getFirstDayMonth(currentValue));
    }
  }, [currentValue]);
  useEffect(function () {
    setCurrentRange(selectedRange);
  }, [selectedRange]);
  useEffect(function () {
    var normalizedDisabledDays = normalizeDates(disabledDays);
    var newMaxRangeEnd = selectedRange && selectedRange.length === 1 ? Math.min.apply(Math, _toConsumableArray(normalizedDisabledDays.filter(function (day) {
      return isDateBeyondLimit(day, selectedRange[0]);
    }))) : undefined;
    setMaxRangeEnd(newMaxRangeEnd);
  }, [selectedRange, disabledDays]);
  var currentYearSelectTabIndex = disablePreviousMonth ? undefined : -1;
  return React.createElement(StyledSection, {
    id: id,
    className: className,
    style: style,
    "data-calendar-type": "double"
  }, React.createElement(StyledControlsContainer, null, React.createElement(StyledArrowButton, {
    ref: headerElementsRefs[0],
    onClick: prevMonthClick,
    disabled: disablePreviousMonth,
    size: "medium",
    icon: React.createElement(LeftIcon, null),
    assistiveText: "Previous Month",
    onKeyDown: handleHeaderElementKeyDown,
    onFocus: function onFocus() {
      return updateFocusedItem(0);
    }
  }), React.createElement(StyledHeaderContainer, {
    onKeyDown: handleHeaderElementKeyDown
  }, React.createElement(StyledMonth, {
    id: currentMonthLabelId,
    "data-id": "month"
  }, currentMonthFormattedLabel), React.createElement(YearSelect, {
    ref: headerElementsRefs[1],
    currentYear: currentYear,
    yearsRange: yearsRange,
    onYearChange: handleLeftCalendarYearChange,
    tabIndex: currentYearSelectTabIndex,
    onClick: function onClick() {
      return updateFocusedItem(1);
    },
    onFocus: function onFocus() {
      return updateFocusedItem(1);
    }
  }))), React.createElement(StyledControlsContainer, {
    onKeyDown: handleHeaderElementKeyDown
  }, React.createElement(StyledHeaderContainer, null, React.createElement(StyledMonth, {
    id: rightMonthLabelId,
    "data-id": "month"
  }, rightMonthFormattedLabel), React.createElement(YearSelect, {
    ref: headerElementsRefs[2],
    currentYear: rightCalendarYear,
    yearsRange: yearsRange,
    onYearChange: handleRightCalendarYearChange,
    tabIndex: -1,
    onClick: function onClick() {
      return updateFocusedItem(2);
    },
    onFocus: function onFocus() {
      return updateFocusedItem(2);
    }
  })), React.createElement(StyledArrowButton, {
    ref: headerElementsRefs[3],
    onClick: nextMonthClick,
    disabled: disableNextMonth,
    size: "medium",
    icon: React.createElement(RightIcon, null),
    assistiveText: "Next Month",
    tabIndex: -1,
    onKeyDown: handleHeaderElementKeyDown,
    onFocus: function onFocus() {
      return updateFocusedItem(3);
    }
  })), React.createElement(StyledCalendar, null, React.createElement(Provider, {
    value: {
      useAutoFocus: enableNavKeys,
      focusedDate: focusedDate,
      selectionType: selectionType,
      selectedRange: selectedRange,
      currentRange: currentRange,
      disabledDays: disabledDays,
      maxRangeEnd: maxRangeEnd,
      privateOnFocus: handleOnDayFocus,
      privateOnBlur: handleOnDayBlur,
      privateKeyDown: handleKeyDown,
      privateOnHover: handleOnDayHover
    }
  }, React.createElement(StyledTable, {
    role: "grid",
    "aria-labelledby": currentMonthLabelId
  }, React.createElement(DaysOfWeek, {
    locale: locale
  }), React.createElement(Month, {
    value: value,
    firstDayMonth: currentMonth,
    minDate: minDate,
    maxDate: maxDate,
    onChange: onChange,
    selectedRange: currentRange
  })))), React.createElement(StyledCalendar, null, React.createElement(Provider, {
    value: {
      useAutoFocus: enableNavKeys,
      focusedDate: focusedDate,
      selectionType: selectionType,
      selectedRange: selectedRange,
      currentRange: currentRange,
      disabledDays: disabledDays,
      maxRangeEnd: maxRangeEnd,
      privateOnFocus: handleOnDayFocus,
      privateOnBlur: handleOnDayBlur,
      privateKeyDown: handleKeyDown,
      privateOnHover: handleOnDayHover
    }
  }, React.createElement(StyledTable, {
    role: "grid",
    "aria-labelledby": rightMonthLabelId
  }, React.createElement(DaysOfWeek, {
    locale: locale
  }), React.createElement(Month, {
    value: value,
    firstDayMonth: rightCalendarMonth,
    minDate: minDate,
    maxDate: maxDate,
    onChange: onChange,
    selectedRange: currentRange
  })))));
}
DoubleCalendar.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  locale: PropTypes.string,
  selectionType: PropTypes.oneOf(['single', 'range']),
  selectedRange: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
  disabledDays: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]))
};
DoubleCalendar.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined,
  id: undefined,
  locale: undefined,
  selectionType: 'single',
  selectedRange: undefined,
  disabledDays: []
};