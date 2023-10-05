"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputItem = _interopRequireDefault(require("./inputItem"));

var InputItems = _react["default"].forwardRef(function (props, ref) {
  var value = props.value,
      disabled = props.disabled,
      required = props.required,
      readOnly = props.readOnly,
      error = props.error,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onKeyDown = props.onKeyDown,
      onPaste = props.onPaste,
      focusedIndex = props.focusedIndex;
  var inputs = value.map(function (inputValue, index) {
    var inputIndex = index;
    var isActive = inputIndex === focusedIndex;
    var inputRef = isActive ? ref : null;
    var inputTabIndex = isActive ? tabIndex : -1;
    return _react["default"].createElement(_inputItem["default"], {
      key: inputIndex,
      value: inputValue,
      index: inputIndex,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      error: error,
      tabIndex: inputTabIndex,
      onClick: onClick,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyDown: onKeyDown,
      onPaste: onPaste,
      ref: inputRef,
      isActive: isActive
    });
  });
  return _react["default"].createElement(_react["default"].Fragment, null, inputs);
});

InputItems.propTypes = {
  value: _propTypes["default"].array,
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
  focusedIndex: _propTypes["default"].number
};
InputItems.defaultProps = {
  value: [],
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
  focusedIndex: undefined
};
var _default = InputItems;
exports["default"] = _default;