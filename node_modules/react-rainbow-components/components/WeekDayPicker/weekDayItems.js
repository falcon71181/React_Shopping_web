"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _valuePropValidation = _interopRequireDefault(require("./helpers/valuePropValidation"));

var _weekDay = _interopRequireDefault(require("./weekDay"));

var _getWeekDays = _interopRequireDefault(require("./helpers/getWeekDays"));

var _isWeekDayChecked = _interopRequireDefault(require("./helpers/isWeekDayChecked"));

var WeekDayItems = _react["default"].forwardRef(function (props, ref) {
  var name = props.name,
      value = props.value,
      availableDates = props.availableDates,
      locale = props.locale,
      disabled = props.disabled,
      required = props.required,
      readOnly = props.readOnly,
      multiple = props.multiple,
      error = props.error,
      onChange = props.onChange;

  var isChecked = function isChecked(weekDay) {
    return (0, _isWeekDayChecked["default"])(weekDay, value, multiple);
  };

  var isDayAvailable = function isDayAvailable(day) {
    if (availableDates.length) {
      return availableDates.includes(day);
    }

    return true;
  };

  var isDisabled = function isDisabled(day) {
    return disabled || !isDayAvailable(day);
  };

  return (0, _getWeekDays["default"])().map(function (weekDay, index) {
    var isFirstInput = index === 0;
    var inputRef = isFirstInput ? ref : undefined;
    return _react["default"].createElement(_weekDay["default"], {
      key: weekDay,
      name: name,
      value: weekDay,
      locale: locale,
      isChecked: isChecked(weekDay),
      disabled: isDisabled(weekDay),
      required: required,
      readOnly: readOnly,
      multiple: multiple,
      error: error,
      onChange: onChange,
      ref: inputRef
    });
  });
});

WeekDayItems.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_valuePropValidation["default"]), _propTypes["default"].oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])]),
  availableDates: _propTypes["default"].arrayOf(_valuePropValidation["default"]),
  locale: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onChange: _propTypes["default"].func
};
WeekDayItems.defaultProps = {
  name: undefined,
  value: undefined,
  availableDates: [],
  locale: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  multiple: false,
  error: null,
  onChange: function onChange() {}
};
var _default = WeekDayItems;
exports["default"] = _default;