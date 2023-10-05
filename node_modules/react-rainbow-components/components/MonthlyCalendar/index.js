"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthlyCalendar;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../libs/hooks");

var _helpers = require("../Calendar/helpers");

var _hooks2 = require("./hooks");

var _context = require("./context");

var _Select = _interopRequireDefault(require("../Select"));

var _rightArrow = _interopRequireDefault(require("./icons/rightArrow"));

var _leftArrow = _interopRequireDefault(require("./icons/leftArrow"));

var _daysOfWeek = _interopRequireDefault(require("./daysOfWeek"));

var _month = _interopRequireDefault(require("./month"));

var _controlsContainer = _interopRequireDefault(require("./styled/controlsContainer"));

var _monthContainer = _interopRequireDefault(require("./styled/monthContainer"));

var _arrowButton = _interopRequireDefault(require("./styled/arrowButton"));

var _month2 = _interopRequireDefault(require("./styled/month"));

var _table = _interopRequireDefault(require("./styled/table"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MonthlyCalendar(props) {
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
  var monthLabelId = (0, _hooks.useUniqueIdentifier)('month');
  var currentLocale = (0, _hooks.useLocale)(locale);
  var month = (0, _hooks2.useCurrentMonth)(currentMonth, minDate, maxDate);
  var yearsRange = (0, _hooks2.useYearsRange)(minDate, maxDate, month);
  var formattedMonth = (0, _hooks2.useFormattedMonth)(month, currentLocale);
  var currentYear = month.getFullYear();
  var lastYearItem = yearsRange[yearsRange.length - 1];
  var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
  var disableNextMonth = (0, _helpers.addMonths)(month, 1) > maxSelectableDate;
  var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
  var prevDate = (0, _react.useMemo)(function () {
    return (0, _helpers.getLastDayMonth)((0, _helpers.addMonths)(month, -1));
  }, [month]);
  var disablePreviousMonth = prevDate < minSelectableDate;

  var selectPreviousMonth = function selectPreviousMonth() {
    var newMonth = (0, _helpers.addMonths)(month, -1);
    newMonth.setHours(0, 0, 0, 0);
    return onMonthChange({
      month: newMonth
    });
  };

  var selectNextMonth = function selectNextMonth() {
    var newMonth = (0, _helpers.addMonths)(month, 1);
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

  return _react["default"].createElement("section", {
    id: id,
    className: className,
    style: style
  }, _react["default"].createElement(_controlsContainer["default"], null, _react["default"].createElement(_monthContainer["default"], null, _react["default"].createElement(_arrowButton["default"], {
    onClick: selectPreviousMonth,
    icon: _react["default"].createElement(_leftArrow["default"], null),
    shaded: true,
    disabled: disablePreviousMonth,
    variant: "border-filled",
    assistiveText: "Previous Month"
  }), _react["default"].createElement(_month2["default"], {
    id: monthLabelId,
    "data-id": "month"
  }, formattedMonth), _react["default"].createElement(_arrowButton["default"], {
    onClick: selectNextMonth,
    icon: _react["default"].createElement(_rightArrow["default"], null),
    shaded: true,
    disabled: disableNextMonth,
    variant: "border-filled",
    assistiveText: "Next Month"
  })), _react["default"].createElement(_Select["default"], {
    label: "select year",
    hideLabel: true,
    value: currentYear,
    options: yearsRange,
    onChange: handleYearChange
  })), _react["default"].createElement(_table["default"], {
    role: "grid",
    "aria-labelledby": monthLabelId
  }, _react["default"].createElement(_daysOfWeek["default"], {
    locale: currentLocale
  }), _react["default"].createElement(_context.Provider, {
    value: {
      dateComponent: dateComponent
    }
  }, _react["default"].createElement(_month["default"], {
    selectedDate: selectedDate,
    firstDayMonth: month,
    minDate: minDate,
    maxDate: maxDate,
    onSelectDate: onSelectDate
  }))));
}

MonthlyCalendar.propTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  locale: _propTypes["default"].string,
  currentMonth: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  selectedDate: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  onSelectDate: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func,
  dateComponent: _propTypes["default"].func
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