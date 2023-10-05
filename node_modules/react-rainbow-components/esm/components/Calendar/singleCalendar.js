import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DaysOfWeek from './daysOfWeek';
import Month from './month';
import { normalizeDate, addDays, addMonths, formatDate, getFirstDayMonth, getFormattedMonth, getLastDayMonth, getYearsRange, isSameMonth, getSign, getCalendarBounds, isDateBelowLimit, isDateBeyondLimit, getNextFocusedDate, isSameDatesRange, isEmptyRange, isSameDay } from './helpers';
import CalendarHeader from './calendarHeader';
import StyledTable from './styled/table';
import { UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY, HOME_KEY, END_KEY, PAGEUP_KEY, PAGEDN_KEY, SPACE_KEY, ENTER_KEY } from '../../libs/constants';
import { uniqueId } from '../../libs/utils';
import { Provider } from './context';
import normalizeDates from './helpers/normalizeDates';

var SingleCalendar = function (_Component) {
  _inherits(SingleCalendar, _Component);

  var _super = _createSuper(SingleCalendar);

  function SingleCalendar(props) {
    var _this$keyHandlerMap, _this$keyHandlerMapAl;

    var _this;

    _classCallCheck(this, SingleCalendar);

    _this = _super.call(this, props);
    _this.state = {
      focusedDate: normalizeDate(props.value),
      currentMonth: getFirstDayMonth(normalizeDate(props.value)),
      currentRange: props.selectedRange,
      maxRangeEnd: undefined
    };
    _this.enableNavKeys = false;
    _this.monthLabelId = uniqueId('month');
    _this.previousMonth = _this.previousMonth.bind(_assertThisInitialized(_this));
    _this.nextMonth = _this.nextMonth.bind(_assertThisInitialized(_this));
    _this.handleYearChange = _this.handleYearChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleKeyUpPressed = _this.handleKeyUpPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyDownPressed = _this.handleKeyDownPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyLeftPressed = _this.handleKeyLeftPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyRightPressed = _this.handleKeyRightPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyHomePressed = _this.handleKeyHomePressed.bind(_assertThisInitialized(_this));
    _this.handleKeyEndPressed = _this.handleKeyEndPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyPageUpPressed = _this.handleKeyPageUpPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyPageDownPressed = _this.handleKeyPageDownPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyEnterPressed = _this.handleKeyEnterPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyAltPageUpPressed = _this.handleKeyAltPageUpPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyAltPageDownPressed = _this.handleKeyAltPageDownPressed.bind(_assertThisInitialized(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, _defineProperty(_this$keyHandlerMap, UP_KEY, _this.handleKeyUpPressed), _defineProperty(_this$keyHandlerMap, DOWN_KEY, _this.handleKeyDownPressed), _defineProperty(_this$keyHandlerMap, LEFT_KEY, _this.handleKeyLeftPressed), _defineProperty(_this$keyHandlerMap, RIGHT_KEY, _this.handleKeyRightPressed), _defineProperty(_this$keyHandlerMap, HOME_KEY, _this.handleKeyHomePressed), _defineProperty(_this$keyHandlerMap, END_KEY, _this.handleKeyEndPressed), _defineProperty(_this$keyHandlerMap, PAGEUP_KEY, _this.handleKeyPageUpPressed), _defineProperty(_this$keyHandlerMap, PAGEDN_KEY, _this.handleKeyPageDownPressed), _defineProperty(_this$keyHandlerMap, SPACE_KEY, _this.handleKeyEnterPressed), _defineProperty(_this$keyHandlerMap, ENTER_KEY, _this.handleKeyEnterPressed), _this$keyHandlerMap);
    _this.keyHandlerMapAlt = (_this$keyHandlerMapAl = {}, _defineProperty(_this$keyHandlerMapAl, HOME_KEY, _this.handleKeyHomePressed), _defineProperty(_this$keyHandlerMapAl, END_KEY, _this.handleKeyEndPressed), _defineProperty(_this$keyHandlerMapAl, PAGEUP_KEY, _this.handleKeyAltPageUpPressed), _defineProperty(_this$keyHandlerMapAl, PAGEDN_KEY, _this.handleKeyAltPageDownPressed), _this$keyHandlerMapAl);
    _this.onDayFocus = _this.onDayFocus.bind(_assertThisInitialized(_this));
    _this.onDayBlur = _this.onDayBlur.bind(_assertThisInitialized(_this));
    _this.onDayHover = _this.onDayHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SingleCalendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevSelectedRange = prevProps.selectedRange,
          prevValue = prevProps.value;
      var _this$props = this.props,
          selectedRange = _this$props.selectedRange,
          value = _this$props.value;
      var normalizedDate = normalizeDate(value);

      if (formatDate(normalizeDate(prevValue)) !== formatDate(normalizedDate)) {
        this.updateCurrentMonth(normalizedDate);
        this.updateFocusedDate(normalizedDate);
      }

      if (!isSameDatesRange(prevSelectedRange, selectedRange)) {
        this.updateCurrentRange(selectedRange);
      }
    }
  }, {
    key: "onDayFocus",
    value: function onDayFocus() {
      this.enableNavKeys = true;
    }
  }, {
    key: "onDayBlur",
    value: function onDayBlur() {
      this.enableNavKeys = false;
    }
  }, {
    key: "onDayHover",
    value: function onDayHover(date) {
      var _this$props2 = this.props,
          selectionType = _this$props2.selectionType,
          selectedRange = _this$props2.selectedRange;
      if (selectionType === 'single' || isEmptyRange(selectedRange)) return;

      var _selectedRange = _slicedToArray(selectedRange, 2),
          rangeStart = _selectedRange[0],
          rangeEnd = _selectedRange[1];

      if (rangeEnd !== undefined) return;
      var currentRange = this.state.currentRange;

      var _currentRange = _slicedToArray(currentRange, 1),
          currentRangeStart = _currentRange[0];

      if (isDateBelowLimit(date, rangeStart)) {
        this.setState({
          currentRange: [currentRangeStart]
        });
      } else {
        this.setState({
          currentRange: [rangeStart, date]
        });
      }
    }
  }, {
    key: "getContext",
    value: function getContext() {
      var _this$state = this.state,
          focusedDate = _this$state.focusedDate,
          currentRange = _this$state.currentRange,
          maxRangeEnd = _this$state.maxRangeEnd;
      var _this$props3 = this.props,
          selectionType = _this$props3.selectionType,
          selectedRange = _this$props3.selectedRange,
          disabledDays = _this$props3.disabledDays;
      return {
        focusedDate: focusedDate,
        useAutoFocus: this.enableNavKeys,
        selectionType: selectionType,
        selectedRange: selectedRange,
        currentRange: currentRange,
        disabledDays: disabledDays,
        maxRangeEnd: maxRangeEnd,
        privateKeyDown: this.handleKeyDown,
        privateOnFocus: this.onDayFocus,
        privateOnBlur: this.onDayBlur,
        privateOnHover: this.onDayHover
      };
    }
  }, {
    key: "moveFocusedDay",
    value: function moveFocusedDay(increment) {
      var _this$state2 = this.state,
          currentMonth = _this$state2.currentMonth,
          focusedDate = _this$state2.focusedDate;
      var nextFocusedDate = addDays(focusedDate, increment);
      var nextFocusedMonth = currentMonth;

      if (!isSameMonth(nextFocusedDate, currentMonth)) {
        nextFocusedMonth = getFirstDayMonth(addMonths(currentMonth, getSign(increment)));
      }

      var _this$props4 = this.props,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate;

      var _getCalendarBounds = getCalendarBounds(minDate, maxDate),
          minCalendarDate = _getCalendarBounds.minCalendarDate,
          maxCalendarDate = _getCalendarBounds.maxCalendarDate;

      if (isDateBelowLimit(nextFocusedDate, minCalendarDate)) {
        nextFocusedDate = minCalendarDate;
        nextFocusedMonth = getFirstDayMonth(minCalendarDate);
      } else if (isDateBeyondLimit(nextFocusedDate, maxCalendarDate)) {
        nextFocusedDate = maxCalendarDate;
        nextFocusedMonth = getFirstDayMonth(maxCalendarDate);
      }

      this.setState({
        focusedDate: nextFocusedDate,
        currentMonth: nextFocusedMonth
      });
    }
  }, {
    key: "moveFocusedMonth",
    value: function moveFocusedMonth(increment) {
      var focusedDate = this.state.focusedDate;
      var nextFocusedDate = addMonths(focusedDate, increment);
      var _this$props5 = this.props,
          minDate = _this$props5.minDate,
          maxDate = _this$props5.maxDate;

      var _getCalendarBounds2 = getCalendarBounds(minDate, maxDate),
          minCalendarDate = _getCalendarBounds2.minCalendarDate,
          maxCalendarDate = _getCalendarBounds2.maxCalendarDate;

      if (isDateBelowLimit(nextFocusedDate, minCalendarDate)) {
        nextFocusedDate = minCalendarDate;
      } else if (isDateBeyondLimit(nextFocusedDate, maxCalendarDate)) {
        nextFocusedDate = maxCalendarDate;
      }

      this.setState({
        focusedDate: nextFocusedDate,
        currentMonth: getFirstDayMonth(nextFocusedDate)
      });
    }
  }, {
    key: "updateCurrentMonth",
    value: function updateCurrentMonth(value) {
      this.setState({
        currentMonth: getFirstDayMonth(value)
      });
    }
  }, {
    key: "updateFocusedDate",
    value: function updateFocusedDate(value) {
      this.setState({
        focusedDate: value
      });
    }
  }, {
    key: "updateCurrentRange",
    value: function updateCurrentRange(value) {
      var disabledDaysInProps = this.props.disabledDays;
      var disabledDays = normalizeDates(disabledDaysInProps);
      var maxRangeEnd = value.length === 1 ? Math.min.apply(Math, _toConsumableArray(disabledDays.filter(function (day) {
        return isDateBeyondLimit(day, value[0]);
      }))) : undefined;
      this.setState({
        currentRange: value,
        maxRangeEnd: maxRangeEnd
      });
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var currentMonth = this.state.currentMonth;
      var newMonth = addMonths(currentMonth, 1);
      var value = this.props.value;
      var focusedDate = getNextFocusedDate(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "previousMonth",
    value: function previousMonth() {
      var currentMonth = this.state.currentMonth;
      var newMonth = addMonths(currentMonth, -1);
      var value = this.props.value;
      var focusedDate = getNextFocusedDate(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "handleYearChange",
    value: function handleYearChange(event) {
      var currentMonth = this.state.currentMonth;
      var year = +event.target.value;
      var newMonth = new Date(currentMonth);
      newMonth.setFullYear(year);
      var value = this.props.value;
      var focusedDate = getNextFocusedDate(value, newMonth);
      this.setState({
        focusedDate: focusedDate,
        currentMonth: newMonth
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (!this.enableNavKeys) return;
      var keyCode = event.keyCode,
          altKey = event.altKey;
      var keyHandler = altKey ? this.keyHandlerMapAlt : this.keyHandlerMap;

      if (keyHandler[keyCode]) {
        event.preventDefault();
        event.stopPropagation();
        keyHandler[keyCode]();
      }
    }
  }, {
    key: "handleKeyUpPressed",
    value: function handleKeyUpPressed() {
      this.moveFocusedDay(-7);
    }
  }, {
    key: "handleKeyDownPressed",
    value: function handleKeyDownPressed() {
      this.moveFocusedDay(7);
    }
  }, {
    key: "handleKeyLeftPressed",
    value: function handleKeyLeftPressed() {
      this.moveFocusedDay(-1);
    }
  }, {
    key: "handleKeyRightPressed",
    value: function handleKeyRightPressed() {
      this.moveFocusedDay(1);
    }
  }, {
    key: "handleKeyHomePressed",
    value: function handleKeyHomePressed() {
      var focusedDate = this.state.focusedDate;
      this.moveFocusedDay(-focusedDate.getDay());
    }
  }, {
    key: "handleKeyEndPressed",
    value: function handleKeyEndPressed() {
      var focusedDate = this.state.focusedDate;
      this.moveFocusedDay(6 - focusedDate.getDay());
    }
  }, {
    key: "handleKeyPageUpPressed",
    value: function handleKeyPageUpPressed() {
      this.moveFocusedMonth(-1);
    }
  }, {
    key: "handleKeyPageDownPressed",
    value: function handleKeyPageDownPressed() {
      this.moveFocusedMonth(1);
    }
  }, {
    key: "handleKeyAltPageUpPressed",
    value: function handleKeyAltPageUpPressed() {
      this.moveFocusedMonth(-12);
    }
  }, {
    key: "handleKeyAltPageDownPressed",
    value: function handleKeyAltPageDownPressed() {
      this.moveFocusedMonth(12);
    }
  }, {
    key: "handleKeyEnterPressed",
    value: function handleKeyEnterPressed() {
      var _this$props6 = this.props,
          onChange = _this$props6.onChange,
          disabledDays = _this$props6.disabledDays;
      var focusedDate = this.state.focusedDate;
      if (disabledDays.some(function (day) {
        return isSameDay(day, focusedDate);
      })) return;
      onChange(new Date(focusedDate));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          currentMonth = _this$state3.currentMonth,
          currentRange = _this$state3.currentRange;
      var _this$props7 = this.props,
          id = _this$props7.id,
          value = _this$props7.value,
          onChange = _this$props7.onChange,
          minDate = _this$props7.minDate,
          maxDate = _this$props7.maxDate,
          className = _this$props7.className,
          style = _this$props7.style,
          locale = _this$props7.locale;
      var formattedMonth = getFormattedMonth(currentMonth, locale);
      var currentYear = currentMonth.getFullYear();
      var yearsRange = getYearsRange({
        minDate: minDate,
        maxDate: maxDate,
        currentMonth: currentMonth.getMonth()
      });
      var lastYearItem = yearsRange[yearsRange.length - 1];
      var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
      var disableNextMonth = addMonths(currentMonth, 1) > maxSelectableDate;
      var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
      var prevDate = getLastDayMonth(addMonths(currentMonth, -1));
      var disablePreviousMonth = prevDate < minSelectableDate;
      return React.createElement("section", {
        id: id,
        className: className,
        style: style,
        "data-calendar-type": "single"
      }, React.createElement(CalendarHeader, {
        variant: "single",
        monthLabelId: this.monthLabelId,
        formattedMonth: formattedMonth,
        currentYear: currentYear,
        yearsRange: yearsRange,
        disablePreviousMonth: disablePreviousMonth,
        disableNextMonth: disableNextMonth,
        onPrevMonthClick: this.previousMonth,
        onNextMonthClick: this.nextMonth,
        onYearChange: this.handleYearChange
      }), React.createElement(StyledTable, {
        role: "grid",
        "aria-labelledby": this.monthLabelId
      }, React.createElement(DaysOfWeek, {
        locale: locale
      }), React.createElement(Provider, {
        value: this.getContext()
      }, React.createElement(Month, {
        value: value,
        firstDayMonth: currentMonth,
        minDate: minDate,
        maxDate: maxDate,
        onChange: onChange,
        selectedRange: currentRange
      }))));
    }
  }]);

  return SingleCalendar;
}(Component);

SingleCalendar.propTypes = {
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
SingleCalendar.defaultProps = {
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
export default SingleCalendar;