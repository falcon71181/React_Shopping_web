import React, { useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import InputItems from './inputItems';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import { useReduxForm } from '../../libs/hooks';
import { useFocusedIndexState, usePreviousIndex, useValueState } from './hooks';
import { getNormalizedValue, getNumbersFromClipboard, setFocus } from './helpers';
import { StyledErrorMessage, StyledFieldset, StyledHelpText } from './styled';
var CodeInput = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      id = _useReduxForm.id,
      valueProp = _useReduxForm.value,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      bottomHelpText = _useReduxForm.bottomHelpText,
      length = _useReduxForm.length,
      disabled = _useReduxForm.disabled,
      required = _useReduxForm.required,
      readOnly = _useReduxForm.readOnly,
      error = _useReduxForm.error,
      tabIndex = _useReduxForm.tabIndex,
      onClick = _useReduxForm.onClick,
      onChange = _useReduxForm.onChange,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      onKeyDown = _useReduxForm.onKeyDown,
      className = _useReduxForm.className,
      style = _useReduxForm.style;

  var inputRef = useRef();
  var value = useValueState(valueProp, length);
  var focusedIndex = useFocusedIndexState(value, length, disabled, readOnly);
  var previousFocusedIndex = usePreviousIndex(focusedIndex);
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      click: function click() {
        inputRef.current.click();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });
  useEffect(function () {
    if (previousFocusedIndex !== undefined) {
      setFocus(inputRef);
    }
  }, [inputRef, focusedIndex, previousFocusedIndex]);

  var handleOnChange = function handleOnChange(inputValue, index) {
    var newValue = getNormalizedValue(inputValue, index, value);
    var hasValueChanged = newValue !== valueProp;

    if (hasValueChanged) {
      onChange(newValue);
    }
  };

  var handleOnFocus = function handleOnFocus(event, index) {
    if (focusedIndex !== index) {
      setFocus(inputRef);
    }

    onFocus(event);
  };

  var handleOnPaste = function handleOnPaste(event) {
    onChange(getNumbersFromClipboard(event.clipboardData.getData('Text')));
  };

  return React.createElement(StyledFieldset, {
    className: className,
    style: style,
    id: id
  }, React.createElement(RenderIf, {
    isTrue: label
  }, React.createElement(Label, {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    as: "legend"
  })), React.createElement(InputItems, {
    value: value,
    disabled: disabled,
    readOnly: readOnly,
    error: error,
    tabIndex: tabIndex,
    onClick: onClick,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onPaste: handleOnPaste,
    focusedIndex: focusedIndex,
    ref: inputRef
  }), React.createElement(RenderIf, {
    isTrue: bottomHelpText
  }, React.createElement(StyledHelpText, null, bottomHelpText)), React.createElement(RenderIf, {
    isTrue: error
  }, React.createElement(StyledErrorMessage, null, error)));
});
CodeInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  length: PropTypes.number,
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
  className: PropTypes.string,
  style: PropTypes.object
};
CodeInput.defaultProps = {
  id: undefined,
  value: '',
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: undefined,
  length: 4,
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
  className: undefined,
  style: undefined
};
export default CodeInput;