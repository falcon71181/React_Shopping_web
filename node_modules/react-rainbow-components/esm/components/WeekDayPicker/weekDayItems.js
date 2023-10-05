import React from 'react';
import PropTypes from 'prop-types';
import valuePropValidation from './helpers/valuePropValidation';
import WeekDay from './weekDay';
import getWeekDays from './helpers/getWeekDays';
import isWeekDayChecked from './helpers/isWeekDayChecked';
var WeekDayItems = React.forwardRef(function (props, ref) {
  var name = props.name,
      value = props.value,
      availableDates = props.availableDates,
      locale = props.locale,
      disabled = props.disabled,
      required = props.required,
      readOnly = props.readOnly,
      multiple = props.multiple,
      error = props.error,
      onChange = props.onChange;

  var isChecked = function isChecked(weekDay) {
    return isWeekDayChecked(weekDay, value, multiple);
  };

  var isDayAvailable = function isDayAvailable(day) {
    if (availableDates.length) {
      return availableDates.includes(day);
    }

    return true;
  };

  var isDisabled = function isDisabled(day) {
    return disabled || !isDayAvailable(day);
  };

  return getWeekDays().map(function (weekDay, index) {
    var isFirstInput = index === 0;
    var inputRef = isFirstInput ? ref : undefined;
    return React.createElement(WeekDay, {
      key: weekDay,
      name: name,
      value: weekDay,
      locale: locale,
      isChecked: isChecked(weekDay),
      disabled: isDisabled(weekDay),
      required: required,
      readOnly: readOnly,
      multiple: multiple,
      error: error,
      onChange: onChange,
      ref: inputRef
    });
  });
});
WeekDayItems.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.arrayOf(valuePropValidation), PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])]),
  availableDates: PropTypes.arrayOf(valuePropValidation),
  locale: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  multiple: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func
};
WeekDayItems.defaultProps = {
  name: undefined,
  value: undefined,
  availableDates: [],
  locale: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  multiple: false,
  error: null,
  onChange: function onChange() {}
};
export default WeekDayItems;