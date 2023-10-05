"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Week;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../Calendar/helpers");

var _day = _interopRequireDefault(require("./day"));

var _clockLine = _interopRequireDefault(require("./clockLine"));

var _container = _interopRequireDefault(require("./styled/container"));

var _grid = _interopRequireDefault(require("./styled/grid"));

var _gridLine = _interopRequireDefault(require("./styled/gridLine"));

var _scroll = _interopRequireDefault(require("./styled/scroll"));

var _days = _interopRequireDefault(require("./styled/days"));

function Week(props) {
  var week = props.week,
      events = props.events,
      onEventClick = props.onEventClick,
      onScroll = props.onScroll,
      locale = props.locale;

  function Days() {
    return Array.from(Array(7), function (_value, index) {
      var day = (0, _helpers.addDays)(week, index);
      return _react["default"].createElement(_day["default"], {
        key: index,
        day: day,
        events: events,
        onEventClick: onEventClick,
        locale: locale
      });
    });
  }

  function GridLines() {
    return Array.from(Array(24), function (_value, index) {
      return _react["default"].createElement(_gridLine["default"], {
        key: index
      });
    });
  }

  return _react["default"].createElement(_scroll["default"], {
    onScroll: onScroll
  }, _react["default"].createElement(_container["default"], null, _react["default"].createElement(_grid["default"], null, _react["default"].createElement(GridLines, null)), _react["default"].createElement(_clockLine["default"], null), _react["default"].createElement(_days["default"], null, _react["default"].createElement("div", null), _react["default"].createElement(Days, null))));
}

Week.propTypes = {
  week: _propTypes["default"].instanceOf(Date),
  events: _propTypes["default"].array,
  onScroll: _propTypes["default"].func,
  onEventClick: _propTypes["default"].func,
  locale: _propTypes["default"].string
};
Week.defaultProps = {
  week: undefined,
  events: [],
  onScroll: function onScroll() {},
  onEventClick: function onEventClick() {},
  locale: undefined
};