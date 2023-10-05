"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WeeklyCalendar;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../libs/hooks");

var _hooks2 = require("./hooks");

var _helpers = require("./helpers");

var _Select = _interopRequireDefault(require("../Select"));

var _rightArrow = _interopRequireDefault(require("./icons/rightArrow"));

var _leftArrow = _interopRequireDefault(require("./icons/leftArrow"));

var _header = _interopRequireDefault(require("./header"));

var _week = _interopRequireDefault(require("./week"));

var _hours = _interopRequireDefault(require("./hours"));

var _container = _interopRequireDefault(require("./styled/container"));

var _content = _interopRequireDefault(require("./styled/content"));

var _controls = _interopRequireDefault(require("./styled/controls"));

var _title = _interopRequireDefault(require("./styled/title"));

var _arrowButton = _interopRequireDefault(require("./styled/arrowButton"));

var _gradient = _interopRequireDefault(require("./styled/gradient"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function WeeklyCalendar(props) {
  var events = props.events,
      currentWeek = props.currentWeek,
      minDate = props.minDate,
      maxDate = props.maxDate,
      localLocale = props.locale,
      onWeekChange = props.onWeekChange,
      onEventClick = props.onEventClick,
      className = props.className,
      style = props.style;
  var locale = (0, _hooks.useLocale)(localLocale);
  var hoursRef = (0, _react.useRef)();
  var daysRef = (0, _react.useRef)();
  var week = (0, _hooks2.useCurrentWeek)(currentWeek);
  var formattedWeek = (0, _hooks2.useFormattedWeek)(week, locale);

  var _useState = (0, _react.useState)(new Date()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      today = _useState2[0],
      setToday = _useState2[1];

  var yearsRange = (0, _hooks2.useYearRange)(minDate, maxDate, week);

  var _useDisabledControls = (0, _hooks2.useDisabledControls)(yearsRange, week, minDate, maxDate),
      _useDisabledControls2 = (0, _slicedToArray2["default"])(_useDisabledControls, 2),
      isDisableNext = _useDisabledControls2[0],
      isDisablePrevious = _useDisabledControls2[1];

  var selectPreviousWeek = function selectPreviousWeek() {
    var newWeek = (0, _helpers.addWeeks)(week, -1);
    newWeek.setHours(0, 0, 0, 0);
    return onWeekChange({
      week: newWeek
    });
  };

  var selectNextWeek = function selectNextWeek() {
    var newWeek = (0, _helpers.addWeeks)(week, 1);
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

  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style
  }, _react["default"].createElement(_controls["default"], null, _react["default"].createElement("div", null, _react["default"].createElement(_arrowButton["default"], {
    onClick: selectPreviousWeek,
    variant: "border-filled",
    size: "small",
    disabled: isDisablePrevious,
    icon: _react["default"].createElement(_leftArrow["default"], null),
    assistiveText: "Previous Week"
  }), _react["default"].createElement(_title["default"], {
    "data-id": "week"
  }, formattedWeek), _react["default"].createElement(_arrowButton["default"], {
    onClick: selectNextWeek,
    variant: "border-filled",
    size: "small",
    disabled: isDisableNext,
    icon: _react["default"].createElement(_rightArrow["default"], null),
    assistiveText: "Next Week"
  })), _react["default"].createElement(_Select["default"], {
    label: "select year",
    hideLabel: true,
    value: week.getFullYear(),
    options: yearsRange,
    onChange: handleYearChange
  })), _react["default"].createElement(_header["default"], {
    week: week,
    locale: locale,
    today: today,
    ref: daysRef
  }), _react["default"].createElement(_content["default"], null, _react["default"].createElement(_hours["default"], {
    locale: locale,
    ref: hoursRef,
    today: today,
    setToday: setToday
  }), _react["default"].createElement(_week["default"], {
    week: week,
    events: events,
    locale: locale,
    onEventClick: onEventClick,
    onScroll: handleScroll
  })), _react["default"].createElement(_gradient["default"], null));
}

WeeklyCalendar.propTypes = {
  events: _propTypes["default"].array,
  currentWeek: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  locale: _propTypes["default"].string,
  onWeekChange: _propTypes["default"].func,
  onEventClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
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