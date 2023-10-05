import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { Header, HeaderTitle, StyledModal, StyledCalendar } from './styled';
export default function DatePickerModal(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      locale = props.locale,
      minDate = props.minDate,
      maxDate = props.maxDate,
      selectionType = props.selectionType,
      variant = props.variant,
      value = props.value,
      onChange = props.onChange,
      onRequestClose = props.onRequestClose,
      isOpen = props.isOpen,
      title = props.title,
      disabledDays = props.disabledDays,
      borderRadius = props.borderRadius;
  var calendarId = id && "".concat(id, "_calendar");
  return React.createElement(StyledModal, {
    id: id,
    className: className,
    style: style,
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    borderRadius: borderRadius
  }, React.createElement(RenderIf, {
    isTrue: title
  }, React.createElement(Header, {
    variant: variant
  }, React.createElement(HeaderTitle, null, title))), React.createElement(StyledCalendar, {
    id: calendarId,
    locale: locale,
    minDate: minDate,
    maxDate: maxDate,
    selectionType: selectionType,
    variant: variant,
    value: value,
    onChange: onChange,
    disabledDays: disabledDays
  }));
}
DatePickerModal.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  locale: PropTypes.string,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  selectionType: PropTypes.oneOf(['single', 'range']),
  variant: PropTypes.oneOf(['single', 'double']),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]))]),
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabledDays: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DatePickerModal.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  locale: undefined,
  maxDate: undefined,
  minDate: undefined,
  selectionType: 'single',
  variant: 'single',
  value: undefined,
  isOpen: false,
  onChange: function onChange() {},
  onRequestClose: function onRequestClose() {},
  title: undefined,
  disabledDays: [],
  borderRadius: 'rounded'
};