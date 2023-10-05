import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useEffect, useState, useImperativeHandle, useContext } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Input from '../Input';
import DateTimeIcon from './icon';
import DateTimePickerModal from './pickerModal';
import formatDateTime from './helpers/formatDateTime';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import StyledContainer from './styled/container';
import { AppContext } from '../Application/context';
import { getLocale } from '../../libs/utils';
var DateTimePicker = React.forwardRef(function (props, ref) {
  var placeholder = props.placeholder,
      labelAlignment = props.labelAlignment,
      hideLabel = props.hideLabel,
      required = props.required,
      name = props.name,
      label = props.label,
      error = props.error,
      readOnly = props.readOnly,
      disabled = props.disabled,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      id = props.id,
      className = props.className,
      style = props.style,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      formatStyle = props.formatStyle,
      okLabel = props.okLabel,
      cancelLabel = props.cancelLabel,
      isCentered = props.isCentered,
      bottomHelpText = props.bottomHelpText,
      hour24 = props.hour24,
      localeProp = props.locale,
      iconInProps = props.icon,
      disabledDays = props.disabledDays,
      size = props.size,
      valueAlignment = props.valueAlignment,
      borderRadius = props.borderRadius;
  var inputRef = useRef();
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
  var context = useContext(AppContext);
  var locale = getLocale(context, localeProp);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(formatDateTime(value, formatStyle, locale, hour24)),
      _useState4 = _slicedToArray(_useState3, 2),
      formattedDatetime = _useState4[0],
      setFormattedDatetime = _useState4[1];

  useEffect(function () {
    setFormattedDatetime(formatDateTime(value, formatStyle, locale, hour24));
  }, [value, formatStyle, locale, hour24]);

  var openModal = function openModal(event) {
    if (!readOnly) {
      setIsOpen(true);
      onClick(event);
    }
  };

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  var handleFocus = function handleFocus() {
    onFocus(value);
  };

  var handleBlur = function handleBlur() {
    onBlur(value);
  };

  var handleKeyDown = function handleKeyDown(_ref) {
    var keyCode = _ref.keyCode;
    var shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;

    if (shouldOpenModal) {
      setIsOpen(true);
    }
  };

  var handleChange = function handleChange() {
    closeModal();
    onChange.apply(void 0, arguments);
  };

  var icon = iconInProps || React.createElement(DateTimeIcon, null);
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style
  }, React.createElement(Input, {
    ref: inputRef,
    label: label,
    placeholder: placeholder,
    icon: icon,
    iconPosition: "right",
    required: required,
    value: formattedDatetime,
    onKeyDown: handleKeyDown,
    onClick: openModal,
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
    autoComplete: "off",
    size: size,
    valueAlignment: valueAlignment,
    borderRadius: borderRadius
  }), React.createElement(DateTimePickerModal, {
    id: modalId,
    isOpen: isOpen,
    title: formattedDatetime,
    onRequestClose: closeModal,
    formatStyle: formatStyle,
    value: value,
    onChange: handleChange,
    minDate: minDate,
    maxDate: maxDate,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    locale: locale,
    hour24: hour24,
    disabledDays: disabledDays,
    borderRadius: borderRadius
  }));
});
DateTimePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isCentered: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  locale: PropTypes.string,
  hour24: PropTypes.bool,
  icon: PropTypes.node,
  disabledDays: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DateTimePicker.defaultProps = {
  placeholder: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  required: false,
  name: undefined,
  error: null,
  readOnly: false,
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  id: undefined,
  className: undefined,
  style: undefined,
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  formatStyle: 'medium',
  okLabel: 'Ok',
  cancelLabel: 'Cancel',
  bottomHelpText: '',
  isCentered: false,
  locale: undefined,
  hour24: false,
  icon: undefined,
  disabledDays: [],
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};
export default withReduxForm(DateTimePicker);