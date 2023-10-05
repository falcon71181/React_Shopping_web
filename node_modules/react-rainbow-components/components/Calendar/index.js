"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _singleCalendar["default"];
  }
});
exports["default"] = Calendar;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../libs/hooks");

var _singleCalendar = _interopRequireDefault(require("./singleCalendar"));

var _doubleCalendar = _interopRequireDefault(require("./doubleCalendar"));

var _helpers = require("./helpers");

var _hooks2 = require("./hooks");

var _excluded = ["locale", "selectionType", "variant", "value", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Calendar(props) {
  var locale = props.locale,
      selectionType = props.selectionType,
      variant = props.variant,
      value = props.value,
      onChange = props.onChange,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var currentLocale = (0, _hooks.useLocale)(locale);
  var currentValue = (0, _hooks2.useCurrentDateFromValue)(value);
  var range = (0, _hooks2.useRangeFromValue)(value, selectionType);
  var handleChange = (0, _react.useCallback)(function (newValue) {
    if (selectionType === 'single') return onChange(newValue);
    var result = (0, _helpers.buildNewRangeFromValue)(newValue, range);
    return onChange(result.range);
  }, [selectionType, onChange, range]);
  if (variant === 'double') return _react["default"].createElement(_doubleCalendar["default"], (0, _extends2["default"])({
    locale: currentLocale,
    value: currentValue,
    selectedRange: range,
    selectionType: selectionType,
    onChange: handleChange
  }, rest));
  return _react["default"].createElement(_singleCalendar["default"], (0, _extends2["default"])({
    locale: currentLocale,
    value: currentValue,
    selectedRange: range,
    selectionType: selectionType,
    onChange: handleChange
  }, rest));
}

Calendar.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]))]),
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  selectionType: _propTypes["default"].oneOf(['single', 'range']),
  variant: _propTypes["default"].oneOf(['single', 'double']),
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]))
};
Calendar.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined,
  id: undefined,
  locale: undefined,
  selectionType: 'single',
  variant: 'single',
  disabledDays: []
};