import React from 'react';
import PropTypes from 'prop-types';
import { DELETE_KEY } from '../../libs/constants';
import { StyledInput } from './styled';
var InputItem = React.forwardRef(function (props, ref) {
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
    var shouldMovePrev = inputIndex !== 0 && !value && event.keyCode === DELETE_KEY;

    if (shouldMovePrev) {
      _onChange('', inputIndex - 1);
    }

    onKeyDown(event);
  };

  return React.createElement(StyledInput, {
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
  value: PropTypes.string,
  index: PropTypes.number,
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
  isActive: PropTypes.bool
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
export default InputItem;