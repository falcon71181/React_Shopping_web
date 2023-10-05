"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Day;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _day = _interopRequireDefault(require("./styled/day"));

var _dayAdjacent = _interopRequireDefault(require("./styled/dayAdjacent"));

var _dayButton = _interopRequireDefault(require("./styled/dayButton"));

var _rangeHighlight = _interopRequireDefault(require("./styled/rangeHighlight"));

var _helpers = require("./helpers");

var _hooks = require("./hooks");

var _isInArray = _interopRequireDefault(require("./helpers/isInArray"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var isDisabled = isAdjacentDate || (0, _helpers.compareDates)(date, maxDate) > 0 || (0, _helpers.compareDates)(date, minDate) < 0 || maxRangeEnd && (0, _helpers.compareDates)(date, maxRangeEnd) > 0 || (0, _isInArray["default"])(date, disabledDays);
  var tabIndex = (0, _helpers.isSameDay)(focusedDate, date) ? 0 : -1;
  var buttonRef = (0, _react.useRef)();
  var isRangeStartDate = (0, _hooks.useRangeStartDate)(date, currentRange);
  var isRangeEndDate = (0, _hooks.useRangeEndDate)(date, currentRange);
  var isToday = (0, _helpers.isSameDay)(date, new Date());
  (0, _react.useEffect)(function () {
    if (useAutoFocus && buttonRef.current && tabIndex !== -1) {
      buttonRef.current.focus();
    }
  }, [tabIndex, useAutoFocus]);

  if (isAdjacentDate || isDisabled) {
    return _react["default"].createElement(_day["default"], {
      role: "gridcell",
      "aria-selected": "false"
    }, _react["default"].createElement(_dayAdjacent["default"], {
      tabIndex: tabIndex,
      ref: buttonRef,
      onKeyDown: privateKeyDown,
      onFocus: privateOnFocus,
      onBlur: privateOnBlur,
      role: "button",
      "aria-disabled": "true"
    }, day));
  }

  return _react["default"].createElement(_day["default"], {
    role: "gridcell"
  }, _react["default"].createElement(_rangeHighlight["default"], {
    isVisible: isWithinRange && !(isRangeStartDate && isRangeEndDate),
    isFirstInRange: isRangeStartDate,
    isLastInRange: isRangeEndDate,
    isFirstDayOfWeek: isFirstDayOfWeek,
    isLastDayOfWeek: isLastDayOfWeek,
    isToday: isToday
  }, _react["default"].createElement(_dayButton["default"], {
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

function Day(props) {
  return _react["default"].createElement(_context.Consumer, null, function (values) {
    return _react["default"].createElement(DayComponent, (0, _extends2["default"])({}, values, props));
  });
}

Day.propTypes = {
  date: _propTypes["default"].instanceOf(Date),
  firstDayMonth: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  isSelected: _propTypes["default"].bool,
  isWithinRange: _propTypes["default"].bool,
  isFirstDayOfWeek: _propTypes["default"].bool,
  isLastDayOfWeek: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
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