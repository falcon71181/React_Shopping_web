"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("./hooks");

var _helpers = require("../Calendar/helpers");

var _hours = _interopRequireDefault(require("./styled/hours"));

var _hour = _interopRequireDefault(require("./styled/hour"));

var _clock = _interopRequireDefault(require("./styled/clock"));

var _titleHour = _interopRequireDefault(require("./styled/titleHour"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Hours = _react["default"].forwardRef(function (props, ref) {
  var today = props.today,
      setToday = props.setToday,
      locale = props.locale;
  var clock = (0, _hooks.useTimer)();
  (0, _react.useEffect)(function () {
    if (!(0, _helpers.isSameDay)(today, clock)) {
      setToday(clock);
    }
  }, [clock, setToday, today]);
  var before = new Date(clock);
  before.setMinutes(before.getMinutes() + 15);
  var after = new Date(clock);
  after.setMinutes(after.getMinutes() - 15);

  function ListHours() {
    var hour = new Date();
    hour.setMinutes(0);
    hour.setSeconds(0);
    return Array.from(Array(24), function (_value, index) {
      hour.setHours(index);
      var formattedHours = new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        hour12: true
      }).format(hour);
      return _react["default"].createElement(_hour["default"], {
        key: index
      }, _react["default"].createElement(_titleHour["default"], {
        visible: before < hour || after > hour
      }, formattedHours));
    });
  }

  var formattedClock = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(clock);
  var style = (0, _hooks.useClockStyle)(clock);
  return _react["default"].createElement(_hours["default"], {
    ref: ref,
    "data-id": "25"
  }, _react["default"].createElement(ListHours, null), _react["default"].createElement(_clock["default"], {
    style: style
  }, formattedClock));
});

Hours.propTypes = {
  locale: _propTypes["default"].string,
  today: _propTypes["default"].instanceOf(Date),
  setToday: _propTypes["default"].func
};
Hours.defaultProps = {
  locale: undefined,
  today: undefined,
  setToday: function setToday() {}
};
var _default = Hours;
exports["default"] = _default;