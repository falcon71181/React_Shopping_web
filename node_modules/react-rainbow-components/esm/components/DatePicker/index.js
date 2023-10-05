import React, { useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocale, useReduxForm, useDisclosure } from '../../libs/hooks';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import CalendarIcon from './calendarIcon';
import useFormatDate from './hooks/useFormatDate';
import DatePickerModal from '../DatePickerModal';
import { StyledContainer, StyledInput } from './styled';
var DatePicker = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      value = _useReduxForm.value,
      minDate = _useReduxForm.minDate,
      maxDate = _useReduxForm.maxDate,
      placeholder = _useReduxForm.placeholder,
      onClick = _useReduxForm.onClick,
      onChange = _useReduxForm.onChange,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      label = _useReduxForm.label,
      required = _useReduxForm.required,
      style = _useReduxForm.style,
      className = _useReduxForm.className,
      formatStyle = _useReduxForm.formatStyle,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      name = _useReduxForm.name,
      bottomHelpText = _useReduxForm.bottomHelpText,
      isCentered = _useReduxForm.isCentered,
      error = _useReduxForm.error,
      readOnly = _useReduxForm.readOnly,
      disabled = _useReduxForm.disabled,
      tabIndex = _useReduxForm.tabIndex,
      id = _useReduxForm.id,
      locale = _useReduxForm.locale,
      variant = _useReduxForm.variant,
      selectionType = _useReduxForm.selectionType,
      iconInProps = _useReduxForm.icon,
      disabledDays = _useReduxForm.disabledDays,
      size = _useReduxForm.size,
      valueAlignment = _useReduxForm.valueAlignment,
      borderRadius = _useReduxForm.borderRadius;

  var currentLocale = useLocale(locale);
  var inputRef = useRef();
  var formattedDate = useFormatDate({
    value: value,
    format: formatStyle,
    locale: currentLocale,
    selectionType: selectionType
  });

  var _useDisclosure = useDisclosure(false),
      isOpen = _useDisclosure.isOpen,
      openModal = _useDisclosure.open,
      closeModal = _useDisclosure.close;

  var modalId = id && "".concat(id, "_modal");
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

  var handleFocus = function handleFocus() {
    onFocus(value);
  };

  var handleBlur = function handleBlur() {
    onBlur(value);
  };

  var handleChange = useCallback(function (newValue) {
    if (selectionType === 'single' || newValue.length > 1) {
      closeModal();
    }

    onChange(newValue);
  }, [closeModal, onChange, selectionType]);
  var handleClick = useCallback(function (event) {
    if (!readOnly) {
      openModal();
      onClick(event);
    }
  }, [onClick, openModal, readOnly]);
  var handleKeyDown = useCallback(function (_ref) {
    var keyCode = _ref.keyCode;
    var shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;
    if (shouldOpenModal) openModal();
  }, [openModal, readOnly]);
  var icon = iconInProps || React.createElement(CalendarIcon, null);
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style
  }, React.createElement(StyledInput, {
    ref: inputRef,
    label: label,
    placeholder: placeholder,
    icon: icon,
    iconPosition: "right",
    required: required,
    value: formattedDate,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    labelAlignment: labelAlignment,
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
  }), React.createElement(DatePickerModal, {
    id: modalId,
    isOpen: isOpen,
    title: formattedDate || placeholder,
    variant: variant,
    locale: currentLocale,
    selectionType: selectionType,
    minDate: minDate,
    maxDate: maxDate,
    value: value,
    onChange: handleChange,
    onRequestClose: closeModal,
    disabledDays: disabledDays,
    borderRadius: borderRadius
  }));
});
DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]))]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
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
  locale: PropTypes.string,
  selectionType: PropTypes.oneOf(['single', 'range']),
  variant: PropTypes.oneOf(['single', 'double']),
  icon: PropTypes.node,
  disabledDays: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DatePicker.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  formatStyle: 'medium',
  onChange: function onChange() {},
  placeholder: undefined,
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
  locale: undefined,
  selectionType: 'single',
  variant: 'single',
  icon: undefined,
  disabledDays: [],
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};
export default DatePicker;