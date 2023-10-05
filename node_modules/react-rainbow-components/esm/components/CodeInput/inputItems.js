import React from 'react';
import PropTypes from 'prop-types';
import InputItem from './inputItem';
var InputItems = React.forwardRef(function (props, ref) {
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
    return React.createElement(InputItem, {
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
  return React.createElement(React.Fragment, null, inputs);
});
InputItems.propTypes = {
  value: PropTypes.array,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPaste: PropTypes.func,
  focusedIndex: PropTypes.number
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
export default InputItems;