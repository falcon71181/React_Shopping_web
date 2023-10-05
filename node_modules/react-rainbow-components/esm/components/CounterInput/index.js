import React, { useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier, useReduxForm, useErrorMessageId, useLabelId } from '../../libs/hooks';
import RenderIf from '../RenderIf';
import RelativeElement from '../Structural/relativeElement';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import withReduxForm from '../../libs/hocs/withReduxForm';
import PlusIcon from './icons/plus';
import MinusIcon from './icons/minus';
import getValue from './helpers/getValue';
import getNormalizedValue from './helpers/getNormalizedValue';
import isButtonDisabled from './helpers/isButtonDisabled';
import isMax from './helpers/isMax';
import isMin from './helpers/isMin';
import { StyledContainer, StyledInput, StyledButton, ButtonContainer } from './styled';
var CounterInput = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      id = _useReduxForm.id,
      name = _useReduxForm.name,
      value = _useReduxForm.value,
      placeholder = _useReduxForm.placeholder,
      _onChange = _useReduxForm.onChange,
      tabIndex = _useReduxForm.tabIndex,
      _onFocus = _useReduxForm.onFocus,
      _onBlur = _useReduxForm.onBlur,
      onClick = _useReduxForm.onClick,
      onKeyDown = _useReduxForm.onKeyDown,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      required = _useReduxForm.required,
      min = _useReduxForm.min,
      max = _useReduxForm.max,
      isBare = _useReduxForm.isBare,
      error = _useReduxForm.error,
      variant = _useReduxForm.variant,
      step = _useReduxForm.step,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      bottomHelpText = _useReduxForm.bottomHelpText,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      size = _useReduxForm.size,
      borderRadius = _useReduxForm.borderRadius;

  var inputRef = useRef(null);
  var inputId = useUniqueIdentifier('counter-input');
  var errorMessageId = useErrorMessageId(error);
  var labelId = useLabelId(label);
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

  var handlePlusMouseDown = function handlePlusMouseDown(event) {
    event.preventDefault();
    inputRef.current.focus();
    var val = getValue(Number(value));
    if (val < min) return _onChange(getNormalizedValue(min));
    return _onChange(getNormalizedValue(val + step));
  };

  var handleMinusMouseDown = function handleMinusMouseDown(event) {
    event.preventDefault();
    inputRef.current.focus();
    var val = getValue(Number(value));
    if (val > max) return _onChange(getNormalizedValue(max));
    return _onChange(getNormalizedValue(val - step));
  };

  var handleEvents = function handleEvents(event, callback) {
    if (event.target.value === '') {
      return callback();
    }

    return callback(Number(event.target.value));
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
  }), React.createElement(RelativeElement, null, React.createElement(ButtonContainer, {
    iconPosition: "left",
    readOnly: readOnly,
    error: error
  }, React.createElement(StyledButton, {
    variant: "base",
    size: "small",
    icon: React.createElement(MinusIcon, null),
    onMouseDown: handleMinusMouseDown,
    tabIndex: -1,
    disabled: isButtonDisabled(isMin(value, step, min), disabled, readOnly),
    assistiveText: "minus button"
  })), React.createElement(StyledInput, {
    id: inputId,
    name: name,
    type: "number",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(event) {
      return handleEvents(event, _onChange);
    },
    tabIndex: tabIndex,
    onFocus: function onFocus(event) {
      return handleEvents(event, _onFocus);
    },
    onBlur: function onBlur(event) {
      return handleEvents(event, _onBlur);
    },
    onClick: onClick,
    onKeyDown: onKeyDown,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    min: min,
    max: max,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    ref: inputRef,
    isBare: isBare,
    error: error,
    variant: variant,
    step: step,
    autoComplete: "off",
    size: size,
    borderRadius: borderRadius
  }), React.createElement(ButtonContainer, {
    iconPosition: "right",
    readOnly: readOnly,
    error: error
  }, React.createElement(StyledButton, {
    variant: "base",
    size: "small",
    icon: React.createElement(PlusIcon, null),
    onMouseDown: handlePlusMouseDown,
    disabled: isButtonDisabled(isMax(value, step, max), disabled, readOnly),
    tabIndex: -1,
    assistiveText: "plus button"
  }))), React.createElement(RenderIf, {
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
export default withReduxForm(CounterInput);
CounterInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
  step: PropTypes.number,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
CounterInput.defaultProps = {
  id: undefined,
  name: undefined,
  value: undefined,
  placeholder: null,
  tabIndex: undefined,
  disabled: false,
  readOnly: false,
  required: false,
  min: undefined,
  max: undefined,
  error: null,
  step: 1,
  variant: 'default',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: null,
  className: undefined,
  style: undefined,
  size: 'mediun',
  borderRadius: 'rounded'
};