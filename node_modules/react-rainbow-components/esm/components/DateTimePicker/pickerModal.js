import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import extractDate from './helpers/extractDate';
import extractTime from './helpers/extractTime';
import formatDateTime from './helpers/formatDateTime';
import StyledModal from './styled/modal';
import StyledHeader from './styled/header';
import StyledTitle from './styled/title';
import StyledResponsiveContainer from './styled/responsiveContainer';
import StyledCalendar from './styled/calendar';
import StyledDivider from './styled/divider';
import StyledTimeSelect from './styled/timeSelect';

function DateTimePickerModal(props) {
  var id = props.id,
      isOpen = props.isOpen,
      title = props.title,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      formatStyle = props.formatStyle,
      okLabel = props.okLabel,
      cancelLabel = props.cancelLabel,
      onRequestClose = props.onRequestClose,
      onChange = props.onChange,
      locale = props.locale,
      hour24 = props.hour24,
      disabledDays = props.disabledDays,
      borderRadius = props.borderRadius;

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = useState(extractTime(value, hour24)),
      _useState4 = _slicedToArray(_useState3, 2),
      time = _useState4[0],
      setTime = _useState4[1];

  var _useState5 = useState(title),
      _useState6 = _slicedToArray(_useState5, 2),
      modalTitle = _useState6[0],
      setModalTitle = _useState6[1];

  useEffect(function () {
    setDate(value);
    setTime(!value ? '' : extractTime(value, hour24));
  }, [isOpen, value, hour24]);
  useEffect(function () {
    var currentDateTime = new Date("".concat(extractDate(date), " ").concat(time));
    setModalTitle(formatDateTime(currentDateTime, formatStyle, locale, hour24));
  }, [date, time, formatStyle, locale, hour24]);

  var handleChange = function handleChange(selectedTime) {
    var currentValue = new Date("".concat(extractDate(date), " ").concat(selectedTime));
    onChange(currentValue);
  };

  var handleDateChange = function handleDateChange(selectedDate) {
    setDate(selectedDate);

    if (!value && !time) {
      setTime('12:00 AM');
    }
  };

  return React.createElement(StyledModal, {
    id: id,
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    borderRadius: borderRadius
  }, React.createElement(StyledHeader, null, React.createElement(StyledTitle, null, modalTitle)), React.createElement(StyledResponsiveContainer, null, React.createElement(StyledCalendar, {
    value: date,
    locale: locale,
    minDate: minDate,
    maxDate: maxDate,
    formatStyle: formatStyle,
    onChange: handleDateChange,
    disabledDays: disabledDays
  }), React.createElement(StyledDivider, null), React.createElement(StyledTimeSelect, {
    value: time,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    onCloseModal: onRequestClose,
    onChange: handleChange,
    hour24: hour24
  })));
}

DateTimePickerModal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  formatStyle: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  onRequestClose: PropTypes.func.isRequired,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onChange: PropTypes.func,
  locale: PropTypes.string,
  hour24: PropTypes.bool,
  disabledDays: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DateTimePickerModal.defaultProps = {
  id: undefined,
  title: undefined,
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  okLabel: 'Ok',
  cancelLabel: 'Cancel',
  onChange: function onChange() {},
  locale: undefined,
  hour24: false,
  disabledDays: [],
  borderRadius: 'rounded'
};
export default DateTimePickerModal;