"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Event;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../../libs/hooks");

var _hooks2 = require("./hooks");

var _event = _interopRequireDefault(require("./styled/event"));

var _eventItem = _interopRequireDefault(require("./styled/eventItem"));

var _eventTitle = _interopRequireDefault(require("./styled/eventTitle"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _excluded = ["onEventClick", "locale"];

function Event(props) {
  var onEventClick = props.onEventClick,
      locale = props.locale,
      event = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var title = event.title,
      startDate = event.startDate,
      endDate = event.endDate,
      color = event.color,
      backgroundColor = event.backgroundColor;
  var eventId = (0, _hooks.useUniqueIdentifier)('calendar-event');
  var duration = (0, _hooks2.useEventDuration)(startDate, endDate);
  var style = (0, _hooks2.useEventStyle)(startDate, duration);
  var formattedTimeRange = (0, _hooks2.useFormattedEventTimeRange)(startDate, endDate, locale);
  var formattedStartDate = (0, _hooks2.useFormattedEventStartDate)(startDate, locale);
  return _react["default"].createElement(_event["default"], {
    id: eventId,
    style: style,
    color: color,
    backgroundColor: backgroundColor,
    onClick: function onClick() {
      return onEventClick(event);
    }
  }, _react["default"].createElement(_eventItem["default"], null, _react["default"].createElement(_eventTitle["default"], null, title), _react["default"].createElement(_RenderIf["default"], {
    isTrue: duration < 60
  }, _react["default"].createElement("span", null, ",\xA0"), _react["default"].createElement("span", null, formattedStartDate))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: duration >= 60
  }, _react["default"].createElement(_eventItem["default"], null, formattedTimeRange)));
}

Event.propTypes = {
  title: _propTypes["default"].string.isRequired,
  startDate: _propTypes["default"].instanceOf(Date).isRequired,
  endDate: _propTypes["default"].instanceOf(Date).isRequired,
  color: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].string,
  onEventClick: _propTypes["default"].func,
  locale: _propTypes["default"].string
};
Event.defaultProps = {
  onEventClick: function onEventClick() {},
  locale: undefined,
  color: undefined,
  backgroundColor: undefined
};