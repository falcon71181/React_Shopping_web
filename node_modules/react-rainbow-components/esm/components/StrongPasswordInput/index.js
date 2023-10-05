import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import StyledIconContainer from '../Input/styled/iconContainer';
import RelativeElement from '../Structural/relativeElement';
import StyledInput from './styled/input';
import RenderIf from '../RenderIf';
import ErrorText from '../Input/styled/errorText';
import StrengthBar from './strengthBar';
import { StyledContainer, StyledHelpText } from './styled';
import { useUniqueIdentifier, useErrorMessageId, useLabelId } from '../../libs/hooks';
import usePasswordState from './hooks/usePasswordState';
import useReduxForm from '../../libs/hooks/useReduxForm';
var StrongPasswordInput = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      id = _useReduxForm.id,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      bottomHelpText = _useReduxForm.bottomHelpText,
      error = _useReduxForm.error,
      passwordState = _useReduxForm.passwordState,
      passwordStateLabels = _useReduxForm.passwordStateLabels,
      value = _useReduxForm.value,
      placeholder = _useReduxForm.placeholder,
      onChange = _useReduxForm.onChange,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      tabIndex = _useReduxForm.tabIndex,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      onClick = _useReduxForm.onClick,
      onKeyDown = _useReduxForm.onKeyDown,
      maxLength = _useReduxForm.maxLength,
      minLength = _useReduxForm.minLength,
      icon = _useReduxForm.icon,
      required = _useReduxForm.required,
      name = _useReduxForm.name,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      iconPosition = _useReduxForm.iconPosition,
      size = _useReduxForm.size,
      borderRadius = _useReduxForm.borderRadius;

  var inputId = useUniqueIdentifier('input');
  var errorMessageId = useErrorMessageId(error);
  var labelId = useLabelId(label);
  var status = usePasswordState(passwordState);
  var inputRef = useRef();
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
    readOnly: readOnly,
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
    id: inputId,
    name: name,
    type: "password",
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    tabIndex: tabIndex,
    onFocus: onFocus,
    onBlur: onBlur,
    onClick: onClick,
    onKeyDown: onKeyDown,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    maxLength: maxLength,
    minLength: minLength,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    iconPosition: iconPosition,
    icon: icon,
    error: error,
    status: status,
    ref: inputRef,
    size: size,
    borderRadius: borderRadius
  })), React.createElement(StrengthBar, {
    passwordState: passwordState,
    passwordStateLabels: passwordStateLabels
  }), React.createElement(RenderIf, {
    isTrue: bottomHelpText
  }, React.createElement(StyledHelpText, {
    alignSelf: "center"
  }, bottomHelpText)), React.createElement(RenderIf, {
    isTrue: error
  }, React.createElement(ErrorText, {
    alignSelf: "center",
    id: errorMessageId
  }, error)));
});
StrongPasswordInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
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
  id: PropTypes.string,
  passwordState: PropTypes.oneOf(['weak', 'average', 'strong']),
  passwordStateLabels: PropTypes.shape({
    weak: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    average: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    strong: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
StrongPasswordInput.defaultProps = {
  value: undefined,
  name: undefined,
  placeholder: null,
  icon: undefined,
  iconPosition: 'left',
  maxLength: undefined,
  minLength: undefined,
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
  id: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  passwordState: undefined,
  passwordStateLabels: undefined,
  size: 'medium',
  borderRadius: 'rounded'
};
export default StrongPasswordInput;