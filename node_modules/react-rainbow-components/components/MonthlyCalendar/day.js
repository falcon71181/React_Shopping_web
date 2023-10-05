"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Day;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../Calendar/helpers");

var _context = require("./context");

var _dayContainer = _interopRequireDefault(require("./styled/dayContainer"));

var _day = _interopRequireDefault(require("./styled/day"));

var _dayLabel = _interopRequireDefault(require("./styled/dayLabel"));

var _dayAdjacent = _interopRequireDefault(require("./styled/dayAdjacent"));

var _dayContent = _interopRequireDefault(require("./styled/dayContent"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Day(props) {
  var date = props.date,
      firstDayMonth = props.firstDayMonth,
      isSelected = props.isSelected,
      minDate = props.minDate,
      maxDate = props.maxDate,
      onSelect = props.onSelect;

  var _useContext = (0, _react.useContext)(_context.MonthCalendarContext),
      dateComponent = _useContext.dateComponent;

  var day = date.getDate();
  var isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
  var isDisabled = (0, _react.useMemo)(function () {
    return (0, _helpers.compareDates)(date, maxDate) > 0 || (0, _helpers.compareDates)(date, minDate) < 0;
  }, [date, maxDate, minDate]);

  var handleSelectDate = function handleSelectDate() {
    return onSelect({
      date: date
    });
  };

  if (isAdjacentDate || isDisabled) {
    return _react["default"].createElement(_dayContainer["default"], {
      role: "gridcell",
      "aria-selected": "false"
    }, _react["default"].createElement(_day["default"], {
      disabled: true
    }, _react["default"].createElement(_dayAdjacent["default"], null, day)));
  }

  return _react["default"].createElement(_dayContainer["default"], {
    role: "gridcell"
  }, _react["default"].createElement(_day["default"], {
    isSelected: isSelected,
    onClick: handleSelectDate
  }, _react["default"].createElement(_dayLabel["default"], null, day), _react["default"].createElement(_dayContent["default"], null, dateComponent && dateComponent(date))));
}

Day.propTypes = {
  date: _propTypes["default"].instanceOf(Date),
  firstDayMonth: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  isSelected: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func
};
Day.defaultProps = {
  date: undefined,
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  isSelected: false,
  onSelect: function onSelect() {}
};