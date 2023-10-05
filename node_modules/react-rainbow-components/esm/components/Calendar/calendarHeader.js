import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import StyledControlsContainer from './styled/controlsContainer';
import StyledMonthContainer from './styled/monthContainer';
import StyledMonth from './styled/month';
import StyledArrowButton from './styled/arrowButton';
import useHeaderArrowNav from './hooks/useHeaderArrowNav';
export default function SingleCalendarHeader(props) {
  var monthLabelId = props.monthLabelId,
      currentYear = props.currentYear,
      yearsRange = props.yearsRange,
      formattedMonth = props.formattedMonth,
      disablePreviousMonth = props.disablePreviousMonth,
      disableNextMonth = props.disableNextMonth,
      onPrevMonthClick = props.onPrevMonthClick,
      onNextMonthClick = props.onNextMonthClick,
      onYearChange = props.onYearChange;
  var refs = [useRef(), useRef(), useRef()];

  var _useHeaderArrowNav = useHeaderArrowNav({
    disableNextMonth: disableNextMonth,
    disablePreviousMonth: disablePreviousMonth,
    refs: refs,
    delta: disableNextMonth ? 2 : 1,
    firstIndex: disablePreviousMonth ? 1 : 0,
    lastIndex: 2
  }),
      updateFocusedItem = _useHeaderArrowNav.updateFocusedItem,
      clearFocusedItems = _useHeaderArrowNav.clearFocusedItems,
      handleKeyDown = _useHeaderArrowNav.handleKeyDown;

  var handlePrevMonthClick = useCallback(function () {
    onPrevMonthClick();
    updateFocusedItem(0);
  }, [onPrevMonthClick, updateFocusedItem]);
  var handleNextMonthClick = useCallback(function () {
    onNextMonthClick();
    updateFocusedItem(1);
  }, [onNextMonthClick, updateFocusedItem]);
  var handleYearSelectClick = useCallback(function () {
    updateFocusedItem(2);
  }, [updateFocusedItem]);
  var nextMonthTabIndex = disablePreviousMonth ? undefined : -1;
  var yearSelectTabIndex = disablePreviousMonth && disableNextMonth ? undefined : -1;
  return React.createElement(StyledControlsContainer, {
    onKeyDown: handleKeyDown
  }, React.createElement(StyledMonthContainer, null, React.createElement(StyledArrowButton, {
    ref: refs[0],
    onClick: handlePrevMonthClick,
    size: "medium",
    disabled: disablePreviousMonth,
    icon: React.createElement(LeftIcon, null),
    assistiveText: "Previous Month",
    onFocus: function onFocus() {
      return updateFocusedItem(0);
    },
    onBlur: clearFocusedItems
  }), React.createElement(StyledMonth, {
    id: monthLabelId,
    "data-id": "month"
  }, formattedMonth), React.createElement(StyledArrowButton, {
    ref: refs[1],
    onClick: handleNextMonthClick,
    size: "medium",
    tabIndex: nextMonthTabIndex,
    disabled: disableNextMonth,
    icon: React.createElement(RightIcon, null),
    assistiveText: "Next Month",
    onFocus: function onFocus() {
      return updateFocusedItem(1);
    },
    onBlur: clearFocusedItems
  })), React.createElement(Select, {
    ref: refs[2],
    label: "select year",
    hideLabel: true,
    tabIndex: yearSelectTabIndex,
    value: currentYear,
    options: yearsRange,
    onChange: onYearChange,
    onClick: handleYearSelectClick,
    onFocus: function onFocus() {
      return updateFocusedItem(2);
    },
    onBlur: clearFocusedItems
  }));
}
SingleCalendarHeader.propTypes = {
  monthLabelId: PropTypes.string,
  formattedMonth: PropTypes.string,
  currentYear: PropTypes.number,
  yearsRange: PropTypes.array,
  disablePreviousMonth: PropTypes.bool,
  disableNextMonth: PropTypes.bool,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onYearChange: PropTypes.func
};
SingleCalendarHeader.defaultProps = {
  monthLabelId: undefined,
  formattedMonth: undefined,
  currentYear: undefined,
  yearsRange: [],
  disablePreviousMonth: false,
  disableNextMonth: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onYearChange: function onYearChange() {}
};