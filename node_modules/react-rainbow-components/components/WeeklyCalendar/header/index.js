"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../Calendar/helpers");

var _header = _interopRequireDefault(require("./styled/header"));

var _day = _interopRequireDefault(require("./styled/day"));

var _days = _interopRequireDefault(require("./styled/days"));

var _hours = _interopRequireDefault(require("./styled/hours"));

var _contentDay = _interopRequireDefault(require("./styled/contentDay"));

var _weekDay = _interopRequireDefault(require("./styled/weekDay"));

var _numberDay = _interopRequireDefault(require("./styled/numberDay"));

var _hooks = require("./hooks");

var timeZone = new Date().toTimeString().substring(9, 15);

var Header = _react["default"].forwardRef(function (props, ref) {
  var week = props.week,
      today = props.today,
      locale = props.locale;
  var formattedWeekDay = (0, _hooks.useFormatedWeekDay)(locale);
  var formattedNumberDay = (0, _hooks.useFormattedNumberDay)(locale);

  function Days() {
    return Array.from(Array(7), function (_value, index) {
      var day = (0, _helpers.addDays)(week, index);
      return _react["default"].createElement(_day["default"], {
        key: index
      }, _react["default"].createElement(_contentDay["default"], {
        isToday: (0, _helpers.isSameDay)(today, day)
      }, _react["default"].createElement(_weekDay["default"], null, formattedWeekDay(day)), _react["default"].createElement(_numberDay["default"], null, formattedNumberDay(day))));
    });
  }

  return _react["default"].createElement(_header["default"], {
    role: "presentation"
  }, _react["default"].createElement(_hours["default"], null, timeZone), _react["default"].createElement(_days["default"], {
    ref: ref
  }, _react["default"].createElement("div", null), _react["default"].createElement(Days, null)), _react["default"].createElement("div", null));
});

Header.propTypes = {
  week: _propTypes["default"].instanceOf(Date),
  today: _propTypes["default"].instanceOf(Date),
  locale: _propTypes["default"].string
};
Header.defaultProps = {
  week: undefined,
  today: undefined,
  locale: undefined
};
var _default = Header;
exports["default"] = _default;