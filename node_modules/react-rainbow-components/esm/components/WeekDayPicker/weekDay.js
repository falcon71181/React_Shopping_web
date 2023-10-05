import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../libs/hooks';
import getWeekDayLabel from './helpers/getWeekDayLabel';
import { StyledInput, StyledWeekDayContainer, StyledWeekDayLabel } from './styled';
var WeekDay = React.forwardRef(function (props, ref) {
  var name = props.name,
      value = props.value,
      locale = props.locale,
      isChecked = props.isChecked,
      disabled = props.disabled,
      required = props.required,
      readOnly = props.readOnly,
      multiple = props.multiple,
      error = props.error,
      onChange = props.onChange;
  var weekDayId = useUniqueIdentifier('week-day');
  var inputType = multiple ? 'checkbox' : 'radio';
  return React.createElement(StyledWeekDayContainer, null, React.createElement(StyledInput, {
    id: weekDayId,
    as: "input",
    name: name,
    value: value,
    type: inputType,
    disabled: disabled,
    checked: isChecked,
    required: required,
    readOnly: readOnly,
    error: error,
    onChange: onChange,
    ref: ref
  }), React.createElement(StyledWeekDayLabel, {
    htmlFor: weekDayId,
    isChecked: isChecked,
    readOnly: readOnly,
    disabled: disabled,
    error: error
  }, getWeekDayLabel(value, locale)));
});
WeekDay.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  locale: PropTypes.string,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  multiple: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func
};
WeekDay.defaultProps = {
  name: undefined,
  value: undefined,
  locale: undefined,
  isChecked: false,
  disabled: false,
  required: false,
  readOnly: false,
  multiple: false,
  error: null,
  onChange: function onChange() {}
};
export default WeekDay;