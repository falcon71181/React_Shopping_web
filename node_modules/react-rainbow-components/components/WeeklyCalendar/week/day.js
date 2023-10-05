"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Day;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("./hooks");

var _event = _interopRequireDefault(require("./event"));

var _day = _interopRequireDefault(require("./styled/day"));

function Day(props) {
  var day = props.day,
      events = props.events,
      onEventClick = props.onEventClick,
      locale = props.locale;
  var eventsOfDay = (0, _hooks.useEventsOfDay)(events, day);

  var Events = function Events() {
    return eventsOfDay.map(function (event) {
      return _react["default"].createElement(_event["default"], (0, _extends2["default"])({
        key: event.id,
        onEventClick: onEventClick,
        locale: locale
      }, event));
    });
  };

  return _react["default"].createElement(_day["default"], null, _react["default"].createElement(Events, null));
}

Day.propTypes = {
  day: _propTypes["default"].instanceOf(Date),
  events: _propTypes["default"].array,
  onEventClick: _propTypes["default"].func,
  locale: _propTypes["default"].string
};
Day.defaultProps = {
  day: undefined,
  events: [],
  onEventClick: function onEventClick() {},
  locale: undefined
};