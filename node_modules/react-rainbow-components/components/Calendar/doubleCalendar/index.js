"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DoubleCalendar;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../../libs/hooks");

var _context = require("../context");

var _rightArrow = _interopRequireDefault(require("../icons/rightArrow"));

var _leftArrow = _interopRequireDefault(require("../icons/leftArrow"));

var _daysOfWeek = _interopRequireDefault(require("../daysOfWeek"));

var _month = _interopRequireDefault(require("../month"));

var _helpers = require("../helpers");

var _hooks2 = require("./hooks");

var _yearSelect = _interopRequireDefault(require("./yearSelect"));

var _arrowButton = _interopRequireDefault(require("../styled/arrowButton"));

var _table = _interopRequireDefault(require("../styled/table"));

var _styled = require("./styled");

var _shouldUpdateCurrentMonth = _interopRequireDefault(require("./helpers/shouldUpdateCurrentMonth"));

var _useHeaderArrowNav2 = _interopRequireDefault(require("../hooks/useHeaderArrowNav"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DoubleCalendar(props) {
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
  var currentValue = (0, _hooks2.useNormalizedValue)(value);

  var _useState = (0, _react.useState)(currentValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      focusedDate = _useState2[0],
      setFocusedDate = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _helpers.getFirstDayMonth)(currentValue)),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      currentMonth = _useState4[0],
      setCurrentMonth = _useState4[1];

  var _useState5 = (0, _react.useState)(selectedRange),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      currentRange = _useState6[0],
      setCurrentRange = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      enableNavKeys = _useState8[0],
      setEnableNavKeys = _useState8[1];

  var _useState9 = (0, _react.useState)(undefined),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      maxRangeEnd = _useState10[0],
      setMaxRangeEnd = _useState10[1];

  var rightCalendarMonth = (0, _helpers.addMonths)(currentMonth, 1);
  var currentYear = currentMonth.getFullYear();
  var rightCalendarYear = rightCalendarMonth.getFullYear();
  var currentMonthLabelId = (0, _hooks.useUniqueIdentifier)('first-month');
  var rightMonthLabelId = (0, _hooks.useUniqueIdentifier)('second-month');
  var currentMonthFormattedLabel = (0, _hooks2.useFormattedMonth)(currentMonth, locale);
  var rightMonthFormattedLabel = (0, _hooks2.useFormattedMonth)(rightCalendarMonth, locale);
  var yearsRange = (0, _hooks2.useYearsRange)(minDate, maxDate, currentMonth);

  var _useDisabledControls = (0, _hooks2.useDisabledControls)(yearsRange, minDate, maxDate, currentMonth, rightCalendarMonth),
      _useDisabledControls2 = (0, _slicedToArray2["default"])(_useDisabledControls, 2),
      disablePreviousMonth = _useDisabledControls2[0],
      disableNextMonth = _useDisabledControls2[1];

  var handleKeyDown = (0, _hooks2.useHandleKeyDown)(focusedDate, currentMonth, rightCalendarMonth, minDate, maxDate, onChange, enableNavKeys, setFocusedDate, setCurrentMonth);
  var headerElementsRefs = [(0, _react.useRef)(), (0, _react.useRef)(), (0, _react.useRef)(), (0, _react.useRef)()];

  var _useHeaderArrowNav = (0, _useHeaderArrowNav2["default"])({
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

  var handleOnDayHover = (0, _react.useCallback)(function (date) {
    if (selectionType === 'single' || (0, _helpers.isEmptyRange)(selectedRange)) return;

    var _selectedRange = (0, _slicedToArray2["default"])(selectedRange, 2),
        rangeStart = _selectedRange[0],
        rangeEnd = _selectedRange[1];

    if (rangeEnd) return;

    var _currentRange = (0, _slicedToArray2["default"])(currentRange, 1),
        currentRangeStart = _currentRange[0];

    if ((0, _helpers.isDateBelowLimit)(date, rangeStart)) {
      setCurrentRange([currentRangeStart]);
    } else {
      setCurrentRange([rangeStart, date]);
    }
  }, [currentRange, selectedRange, selectionType]);
  var prevMonthClick = (0, _react.useCallback)(function () {
    var newMonth = (0, _helpers.addMonths)(currentMonth, -1);
    setFocusedDate((0, _helpers.getNextFocusedDate)(value, newMonth));
    setCurrentMonth(newMonth);
    updateFocusedItem(0);
  }, [value, currentMonth, updateFocusedItem]);
  var nextMonthClick = (0, _react.useCallback)(function () {
    var newMonth = (0, _helpers.addMonths)(currentMonth, 1);
    setFocusedDate((0, _helpers.getNextFocusedDate)(value, newMonth));
    setCurrentMonth(newMonth);
    updateFocusedItem(3);
  }, [value, currentMonth, updateFocusedItem]);
  var handleLeftCalendarYearChange = (0, _react.useCallback)(function (event) {
    var year = +event.target.value;
    var newMonth = new Date(currentMonth);
    newMonth.setFullYear(year);
    setFocusedDate((0, _helpers.getNextFocusedDate)(value, newMonth));
    setCurrentMonth(newMonth);
  }, [currentMonth, value]);
  var handleRightCalendarYearChange = (0, _react.useCallback)(function (event) {
    var year = +event.target.value;
    var newMonth = new Date(rightCalendarMonth);
    newMonth.setFullYear(year);
    setFocusedDate((0, _helpers.getNextFocusedDate)(value, newMonth));
    setCurrentMonth((0, _helpers.addMonths)(newMonth, -1));
  }, [rightCalendarMonth, value]);
  (0, _react.useEffect)(function () {
    setFocusedDate(currentValue);

    if ((0, _shouldUpdateCurrentMonth["default"])(currentValue, currentMonth, rightCalendarMonth)) {
      setCurrentMonth((0, _helpers.getFirstDayMonth)(currentValue));
    }
  }, [currentValue]);
  (0, _react.useEffect)(function () {
    setCurrentRange(selectedRange);
  }, [selectedRange]);
  (0, _react.useEffect)(function () {
    var normalizedDisabledDays = (0, _helpers.normalizeDates)(disabledDays);
    var newMaxRangeEnd = selectedRange && selectedRange.length === 1 ? Math.min.apply(Math, (0, _toConsumableArray2["default"])(normalizedDisabledDays.filter(function (day) {
      return (0, _helpers.isDateBeyondLimit)(day, selectedRange[0]);
    }))) : undefined;
    setMaxRangeEnd(newMaxRangeEnd);
  }, [selectedRange, disabledDays]);
  var currentYearSelectTabIndex = disablePreviousMonth ? undefined : -1;
  return _react["default"].createElement(_styled.StyledSection, {
    id: id,
    className: className,
    style: style,
    "data-calendar-type": "double"
  }, _react["default"].createElement(_styled.StyledControlsContainer, null, _react["default"].createElement(_arrowButton["default"], {
    ref: headerElementsRefs[0],
    onClick: prevMonthClick,
    disabled: disablePreviousMonth,
    size: "medium",
    icon: _react["default"].createElement(_leftArrow["default"], null),
    assistiveText: "Previous Month",
    onKeyDown: handleHeaderElementKeyDown,
    onFocus: function onFocus() {
      return updateFocusedItem(0);
    }
  }), _react["default"].createElement(_styled.StyledHeaderContainer, {
    onKeyDown: handleHeaderElementKeyDown
  }, _react["default"].createElement(_styled.StyledMonth, {
    id: currentMonthLabelId,
    "data-id": "month"
  }, currentMonthFormattedLabel), _react["default"].createElement(_yearSelect["default"], {
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
  }))), _react["default"].createElement(_styled.StyledControlsContainer, {
    onKeyDown: handleHeaderElementKeyDown
  }, _react["default"].createElement(_styled.StyledHeaderContainer, null, _react["default"].createElement(_styled.StyledMonth, {
    id: rightMonthLabelId,
    "data-id": "month"
  }, rightMonthFormattedLabel), _react["default"].createElement(_yearSelect["default"], {
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
  })), _react["default"].createElement(_arrowButton["default"], {
    ref: headerElementsRefs[3],
    onClick: nextMonthClick,
    disabled: disableNextMonth,
    size: "medium",
    icon: _react["default"].createElement(_rightArrow["default"], null),
    assistiveText: "Next Month",
    tabIndex: -1,
    onKeyDown: handleHeaderElementKeyDown,
    onFocus: function onFocus() {
      return updateFocusedItem(3);
    }
  })), _react["default"].createElement(_styled.StyledCalendar, null, _react["default"].createElement(_context.Provider, {
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
  }, _react["default"].createElement(_table["default"], {
    role: "grid",
    "aria-labelledby": currentMonthLabelId
  }, _react["default"].createElement(_daysOfWeek["default"], {
    locale: locale
  }), _react["default"].createElement(_month["default"], {
    value: value,
    firstDayMonth: currentMonth,
    minDate: minDate,
    maxDate: maxDate,
    onChange: onChange,
    selectedRange: currentRange
  })))), _react["default"].createElement(_styled.StyledCalendar, null, _react["default"].createElement(_context.Provider, {
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
  }, _react["default"].createElement(_table["default"], {
    role: "grid",
    "aria-labelledby": rightMonthLabelId
  }, _react["default"].createElement(_daysOfWeek["default"], {
    locale: locale
  }), _react["default"].createElement(_month["default"], {
    value: value,
    firstDayMonth: rightCalendarMonth,
    minDate: minDate,
    maxDate: maxDate,
    onChange: onChange,
    selectedRange: currentRange
  })))));
}

DoubleCalendar.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  selectionType: _propTypes["default"].oneOf(['single', 'range']),
  selectedRange: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string])),
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]))
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