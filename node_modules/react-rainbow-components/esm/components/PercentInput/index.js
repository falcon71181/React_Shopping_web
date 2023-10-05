import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useLocale, useUniqueIdentifier, useReduxForm, useErrorMessageId, useLabelId } from '../../libs/hooks';
import { clearValue, countCharacters, isValidStringNumber } from '../CurrencyInput/helpers';
import { useDecimalSeparator, useGroupSeparator } from '../CurrencyInput/hooks';
import useOptions from './hooks/useOptions';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import RelativeElement from '../Structural/relativeElement';
import StyledContainer from '../Input/styled/container';
import StyledIconContainer from '../Input/styled/iconContainer';
import { StyledInput } from '../Input/inputBase/styled';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import formatPercent from './helpers/formatPercent';
import { normalizeValue } from './helpers';
var PercentInput = forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      value = _useReduxForm.value,
      name = _useReduxForm.name,
      placeholder = _useReduxForm.placeholder,
      icon = _useReduxForm.icon,
      iconPosition = _useReduxForm.iconPosition,
      bottomHelpText = _useReduxForm.bottomHelpText,
      required = _useReduxForm.required,
      error = _useReduxForm.error,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      onChange = _useReduxForm.onChange,
      tabIndex = _useReduxForm.tabIndex,
      onClick = _useReduxForm.onClick,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      onKeyDown = _useReduxForm.onKeyDown,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      variant = _useReduxForm.variant,
      id = _useReduxForm.id,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      localeProp = _useReduxForm.locale,
      size = _useReduxForm.size,
      valueAlignment = _useReduxForm.valueAlignment,
      borderRadius = _useReduxForm.borderRadius;

  var inputRef = useRef();
  var inputId = useUniqueIdentifier('percent-input');
  var errorMessageId = useErrorMessageId(error);
  var labelId = useLabelId(label);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      cursor = _useState4[0],
      setCursor = _useState4[1];

  var options = useOptions(props);
  var locale = useLocale(localeProp);
  var decimalSeparator = useDecimalSeparator({
    locale: locale,
    style: 'percent'
  });
  var groupSeparator = useGroupSeparator({
    locale: locale,
    style: 'percent'
  });
  var normalizedValue = normalizeValue({
    value: value,
    locale: locale,
    decimalSeparator: decimalSeparator,
    options: options
  });
  var currentValue = focused ? normalizedValue : formatPercent({
    value: value,
    locale: locale,
    options: options
  });
  var isReadOnly = !!(!disabled && readOnly);
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
    inputRef.current.setSelectionRange(cursor, cursor);
  }, [cursor]);

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
        newValue = _event$target.value,
        selectionStart = _event$target.selectionStart;
    var cleanValue = clearValue(newValue, decimalSeparator);
    var normalizeNewValue = normalizeValue({
      value: cleanValue,
      locale: locale,
      decimalSeparator: decimalSeparator,
      options: options
    });

    if (isValidStringNumber(cleanValue) && normalizeNewValue !== normalizedValue) {
      onChange(cleanValue);

      var _diffOfChar = countCharacters(normalizeNewValue, groupSeparator) - countCharacters(normalizedValue, groupSeparator);

      var newCursor = selectionStart + _diffOfChar;

      if (cleanValue.charAt(0) === '0' && cleanValue.charAt(1) && cleanValue.charAt(1) !== '0' && cleanValue.charAt(1) !== '.') {
        return setCursor(newCursor - 1);
      }

      if (_diffOfChar > -2) {
        return setCursor(newCursor);
      }

      return setCursor(selectionStart);
    }

    var diffOfChar = normalizedValue.length - newValue.length;
    return setCursor(selectionStart + diffOfChar);
  };

  var handleBlur = function handleBlur(event) {
    setFocused(false);
    onBlur(event);
  };

  var handleFocus = function handleFocus(event) {
    setFocused(true);
    onFocus(event);
  };

  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style
  }, React.createElement(Label, {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    inputId: inputId,
    readOnly: isReadOnly,
    id: labelId,
    size: size
  }), React.createElement(RelativeElement, null, React.createElement(RenderIf, {
    isTrue: icon
  }, React.createElement(StyledIconContainer, {
    iconPosition: iconPosition,
    readOnly: readOnly,
    error: error,
    size: size
  }, icon)), React.createElement(StyledInput, {
    ref: inputRef,
    id: inputId,
    name: name,
    type: "text",
    value: currentValue,
    placeholder: placeholder,
    onChange: handleChange,
    tabIndex: tabIndex,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: onClick,
    onKeyDown: onKeyDown,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    iconPosition: iconPosition,
    icon: icon,
    error: error,
    variant: variant,
    size: size,
    valueAlignment: valueAlignment,
    borderRadius: borderRadius,
    pattern: "\\d*"
  })), React.createElement(RenderIf, {
    isTrue: bottomHelpText
  }, React.createElement(HelpText, {
    alignSelf: "center"
  }, bottomHelpText)), React.createElement(RenderIf, {
    isTrue: error
  }, React.createElement(ErrorText, {
    alignSelf: "center",
    id: errorMessageId
  }, error)));
});
PercentInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
  id: PropTypes.string,
  locale: PropTypes.string,
  minimumIntegerDigits: PropTypes.number,
  minimumFractionDigits: PropTypes.number,
  maximumFractionDigits: PropTypes.number,
  minimumSignificantDigits: PropTypes.number,
  maximumSignificantDigits: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
PercentInput.defaultProps = {
  value: undefined,
  name: undefined,
  placeholder: null,
  icon: undefined,
  iconPosition: 'left',
  bottomHelpText: null,
  required: false,
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  className: undefined,
  style: undefined,
  variant: 'default',
  id: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  locale: undefined,
  minimumIntegerDigits: undefined,
  minimumFractionDigits: undefined,
  maximumFractionDigits: undefined,
  minimumSignificantDigits: undefined,
  maximumSignificantDigits: undefined,
  size: 'medium',
  valueAlignment: 'left',
  borderRadius: 'rounded'
};
export default PercentInput;