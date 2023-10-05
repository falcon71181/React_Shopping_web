import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ClockIcon from './icons/clock';
import Input from '../Input/pickerInput';
import TimeSelect from './timeSelect';
import get12HourTime from './helpers/get12HourTime';
import getInputValue from './helpers/getInputValue';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import StyledContainer from './styled/container';
import StyledModal from './styled/modal';
import { useReduxForm } from '../../libs/hooks';
var TimePicker = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      placeholder = _useReduxForm.placeholder,
      label = _useReduxForm.label,
      required = _useReduxForm.required,
      style = _useReduxForm.style,
      className = _useReduxForm.className,
      hideLabel = _useReduxForm.hideLabel,
      name = _useReduxForm.name,
      bottomHelpText = _useReduxForm.bottomHelpText,
      isCentered = _useReduxForm.isCentered,
      error = _useReduxForm.error,
      readOnly = _useReduxForm.readOnly,
      disabled = _useReduxForm.disabled,
      tabIndex = _useReduxForm.tabIndex,
      id = _useReduxForm.id,
      cancelLabel = _useReduxForm.cancelLabel,
      okLabel = _useReduxForm.okLabel,
      onChange = _useReduxForm.onChange,
      hour24 = _useReduxForm.hour24,
      onClick = _useReduxForm.onClick,
      onBlur = _useReduxForm.onBlur,
      onFocus = _useReduxForm.onFocus,
      valueProp = _useReduxForm.value,
      iconInProps = _useReduxForm.icon,
      size = _useReduxForm.size,
      valueAlignment = _useReduxForm.valueAlignment,
      borderRadius = _useReduxForm.borderRadius;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(hour24 ? valueProp : get12HourTime(valueProp)),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var inputRef = useRef();
  var timeSelectRef = useRef();
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

  var getTriggerInputValue = function getTriggerInputValue() {
    return getInputValue(value, placeholder, hour24);
  };

  var setFocusToHourInput = function setFocusToHourInput() {
    timeSelectRef.current.focusHourInput();
  };

  var handleKeyDown = function handleKeyDown(event) {
    var keyCode = event.keyCode;
    var shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;

    if (shouldOpenModal) {
      setIsOpen(true);
    }
  };

  var handleClick = function handleClick(event) {
    if (!readOnly) {
      setIsOpen(true);
      onClick(event);
    }
  };

  var handleBlur = function handleBlur() {
    onBlur(valueProp);
  };

  var handleFocus = function handleFocus() {
    onFocus(valueProp);
  };

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  useEffect(function () {
    setValue(hour24 ? valueProp : get12HourTime(valueProp));
  }, [valueProp, hour24]);
  var icon = iconInProps || React.createElement(ClockIcon, null);
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style
  }, React.createElement(Input, {
    id: "time-picker_time-input",
    ref: inputRef,
    label: label,
    placeholder: placeholder,
    icon: icon,
    iconPosition: "right",
    required: required,
    value: getTriggerInputValue(),
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    hideLabel: hideLabel,
    name: name,
    bottomHelpText: bottomHelpText,
    isCentered: isCentered,
    error: error,
    readOnly: readOnly,
    disabled: disabled,
    tabIndex: tabIndex,
    size: size,
    valueAlignment: valueAlignment,
    borderRadius: borderRadius
  }), React.createElement(StyledModal, {
    id: "time-picker_modal",
    isOpen: isOpen,
    onRequestClose: closeModal,
    onOpened: setFocusToHourInput,
    borderRadius: borderRadius
  }, React.createElement(TimeSelect, {
    onCloseModal: closeModal,
    onChange: onChange,
    cancelLabel: cancelLabel,
    okLabel: okLabel,
    value: value,
    ref: timeSelectRef,
    hour24: hour24
  })));
});
TimePicker.propTypes = {
  value: PropTypes.string,
  cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isCentered: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  hour24: PropTypes.bool,
  icon: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
TimePicker.defaultProps = {
  value: undefined,
  cancelLabel: 'Cancel',
  okLabel: 'OK',
  onChange: function onChange() {},
  placeholder: null,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  required: false,
  name: undefined,
  bottomHelpText: null,
  isCentered: false,
  error: null,
  readOnly: false,
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  id: undefined,
  className: undefined,
  style: undefined,
  hour24: false,
  icon: undefined,
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};
export default TimePicker;