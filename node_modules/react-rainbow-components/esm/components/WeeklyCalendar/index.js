import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '../../libs/hooks';
import { useCurrentWeek, useYearRange, useFormattedWeek, useDisabledControls } from './hooks';
import { addWeeks } from './helpers';
import Select from '../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import Header from './header';
import Week from './week';
import Hours from './hours';
import StyledContainer from './styled/container';
import StyledContent from './styled/content';
import StyledControls from './styled/controls';
import StyledTitle from './styled/title';
import StyledArrowButton from './styled/arrowButton';
import StyledGradient from './styled/gradient';
export default function WeeklyCalendar(props) {
  var events = props.events,
      currentWeek = props.currentWeek,
      minDate = props.minDate,
      maxDate = props.maxDate,
      localLocale = props.locale,
      onWeekChange = props.onWeekChange,
      onEventClick = props.onEventClick,
      className = props.className,
      style = props.style;
  var locale = useLocale(localLocale);
  var hoursRef = useRef();
  var daysRef = useRef();
  var week = useCurrentWeek(currentWeek);
  var formattedWeek = useFormattedWeek(week, locale);

  var _useState = useState(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      today = _useState2[0],
      setToday = _useState2[1];

  var yearsRange = useYearRange(minDate, maxDate, week);

  var _useDisabledControls = useDisabledControls(yearsRange, week, minDate, maxDate),
      _useDisabledControls2 = _slicedToArray(_useDisabledControls, 2),
      isDisableNext = _useDisabledControls2[0],
      isDisablePrevious = _useDisabledControls2[1];

  var selectPreviousWeek = function selectPreviousWeek() {
    var newWeek = addWeeks(week, -1);
    newWeek.setHours(0, 0, 0, 0);
    return onWeekChange({
      week: newWeek
    });
  };

  var selectNextWeek = function selectNextWeek() {
    var newWeek = addWeeks(week, 1);
    newWeek.setHours(0, 0, 0, 0);
    return onWeekChange({
      week: newWeek
    });
  };

  var handleYearChange = function handleYearChange(event) {
    var newWeek = new Date(week);
    newWeek.setFullYear(event.target.value);
    newWeek.setHours(0, 0, 0, 0);
    return onWeekChange({
      week: newWeek
    });
  };

  var handleScroll = function handleScroll(event) {
    hoursRef.current.scrollTop = event.target.scrollTop;
    daysRef.current.scrollLeft = event.target.scrollLeft;
  };

  return React.createElement(StyledContainer, {
    className: className,
    style: style
  }, React.createElement(StyledControls, null, React.createElement("div", null, React.createElement(StyledArrowButton, {
    onClick: selectPreviousWeek,
    variant: "border-filled",
    size: "small",
    disabled: isDisablePrevious,
    icon: React.createElement(LeftIcon, null),
    assistiveText: "Previous Week"
  }), React.createElement(StyledTitle, {
    "data-id": "week"
  }, formattedWeek), React.createElement(StyledArrowButton, {
    onClick: selectNextWeek,
    variant: "border-filled",
    size: "small",
    disabled: isDisableNext,
    icon: React.createElement(RightIcon, null),
    assistiveText: "Next Week"
  })), React.createElement(Select, {
    label: "select year",
    hideLabel: true,
    value: week.getFullYear(),
    options: yearsRange,
    onChange: handleYearChange
  })), React.createElement(Header, {
    week: week,
    locale: locale,
    today: today,
    ref: daysRef
  }), React.createElement(StyledContent, null, React.createElement(Hours, {
    locale: locale,
    ref: hoursRef,
    today: today,
    setToday: setToday
  }), React.createElement(Week, {
    week: week,
    events: events,
    locale: locale,
    onEventClick: onEventClick,
    onScroll: handleScroll
  })), React.createElement(StyledGradient, null));
}
WeeklyCalendar.propTypes = {
  events: PropTypes.array,
  currentWeek: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
  onWeekChange: PropTypes.func,
  onEventClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
WeeklyCalendar.defaultProps = {
  events: [],
  currentWeek: undefined,
  minDate: undefined,
  maxDate: undefined,
  onWeekChange: function onWeekChange() {},
  onEventClick: function onEventClick() {},
  locale: undefined,
  className: undefined,
  style: undefined
};