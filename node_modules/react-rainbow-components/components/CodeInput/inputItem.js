"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../libs/constants");

var _styled = require("./styled");

var InputItem = _react["default"].forwardRef(function (props, ref) {
  var value = props.value,
      index = props.index,
      disabled = props.disabled,
      required = props.required,
      readOnly = props.readOnly,
      error = props.error,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      _onChange = props.onChange,
      _onFocus = props.onFocus,
      onBlur = props.onBlur,
      onKeyDown = props.onKeyDown,
      onPaste = props.onPaste,
      isActive = props.isActive;

  var handleOnKeyDown = function handleOnKeyDown(event, inputIndex) {
    var shouldMovePrev = inputIndex !== 0 && !value && event.keyCode === _constants.DELETE_KEY;

    if (shouldMovePrev) {
      _onChange('', inputIndex - 1);
    }

    onKeyDown(event);
  };

  return _react["default"].createElement(_styled.StyledInput, {
    key: index,
    value: value,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    error: error,
    tabIndex: tabIndex,
    onClick: onClick,
    onChange: function onChange(event) {
      return _onChange(event.target.value, index);
    },
    onFocus: function onFocus(event) {
      return _onFocus(event, index);
    },
    onBlur: onBlur,
    onKeyDown: function onKeyDown(event) {
      return handleOnKeyDown(event, index);
    },
    onPaste: onPaste,
    ref: ref,
    pattern: "\\d*",
    maxLength: "1",
    isActive: isActive
  });
});

InputItem.propTypes = {
  value: _propTypes["default"].string,
  index: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onPaste: _propTypes["default"].func,
  isActive: _propTypes["default"].bool
};
InputItem.defaultProps = {
  value: '',
  index: 0,
  disabled: false,
  required: false,
  readOnly: false,
  error: null,
  tabIndex: undefined,
  onClick: function onClick() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onPaste: function onPaste() {},
  isActive: false
};
var _default = InputItem;
exports["default"] = _default;