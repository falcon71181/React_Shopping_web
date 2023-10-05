"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../libs/hooks");

var _getWeekDayLabel = _interopRequireDefault(require("./helpers/getWeekDayLabel"));

var _styled = require("./styled");

var WeekDay = _react["default"].forwardRef(function (props, ref) {
  var name = props.name,
      value = props.value,
      locale = props.locale,
      isChecked = props.isChecked,
      disabled = props.disabled,
      required = props.required,
      readOnly = props.readOnly,
      multiple = props.multiple,
      error = props.error,
      onChange = props.onChange;
  var weekDayId = (0, _hooks.useUniqueIdentifier)('week-day');
  var inputType = multiple ? 'checkbox' : 'radio';
  return _react["default"].createElement(_styled.StyledWeekDayContainer, null, _react["default"].createElement(_styled.StyledInput, {
    id: weekDayId,
    as: "input",
    name: name,
    value: value,
    type: inputType,
    disabled: disabled,
    checked: isChecked,
    required: required,
    readOnly: readOnly,
    error: error,
    onChange: onChange,
    ref: ref
  }), _react["default"].createElement(_styled.StyledWeekDayLabel, {
    htmlFor: weekDayId,
    isChecked: isChecked,
    readOnly: readOnly,
    disabled: disabled,
    error: error
  }, (0, _getWeekDayLabel["default"])(value, locale)));
});

WeekDay.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  isChecked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onChange: _propTypes["default"].func
};
WeekDay.defaultProps = {
  name: undefined,
  value: undefined,
  locale: undefined,
  isChecked: false,
  disabled: false,
  required: false,
  readOnly: false,
  multiple: false,
  error: null,
  onChange: function onChange() {}
};
var _default = WeekDay;
exports["default"] = _default;