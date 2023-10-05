"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Week;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../Calendar/helpers");

var _day = _interopRequireDefault(require("./day"));

function Week(props) {
  var selectedDate = props.selectedDate,
      startDate = props.startDate,
      endDate = props.endDate,
      minDate = props.minDate,
      maxDate = props.maxDate,
      firstDayMonth = props.firstDayMonth,
      onSelectDate = props.onSelectDate;

  function Days() {
    var date = new Date(startDate);
    var days = [];

    while (date <= endDate) {
      days.push(_react["default"].createElement(_day["default"], {
        date: date,
        firstDayMonth: firstDayMonth,
        key: date.getTime(),
        minDate: minDate,
        maxDate: maxDate,
        onSelect: onSelectDate,
        isSelected: (0, _helpers.isSameDay)(date, selectedDate)
      }));
      date = (0, _helpers.addDays)(date, 1);
    }

    return days;
  }

  return _react["default"].createElement("tr", null, _react["default"].createElement(Days, null));
}

Week.propTypes = {
  firstDayMonth: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  startDate: _propTypes["default"].instanceOf(Date),
  endDate: _propTypes["default"].instanceOf(Date),
  selectedDate: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  onSelectDate: _propTypes["default"].func
};
Week.defaultProps = {
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  startDate: undefined,
  endDate: undefined,
  selectedDate: undefined,
  onSelectDate: function onSelectDate() {}
};