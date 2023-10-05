import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import valuePropValidation from './helpers/valuePropValidation';
import getNormalizedValue from './helpers/getNormalizedValue';
import { useLocale, useUniqueIdentifier } from '../../libs/hooks';
import useReduxForm from '../../libs/hooks/useReduxForm';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import WeekDayItems from './weekDayItems';
import StyledTextError from '../Input/styled/errorText';
import { StyledFieldset, StyledHelpText } from './styled';
var WeekDayPicker = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      id = _useReduxForm.id,
      name = _useReduxForm.name,
      value = _useReduxForm.value,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      bottomHelpText = _useReduxForm.bottomHelpText,
      availableDates = _useReduxForm.availableDates,
      localeProp = _useReduxForm.locale,
      disabled = _useReduxForm.disabled,
      required = _useReduxForm.required,
      readOnly = _useReduxForm.readOnly,
      multiple = _useReduxForm.multiple,
      error = _useReduxForm.error,
      onChange = _useReduxForm.onChange,
      className = _useReduxForm.className,
      style = _useReduxForm.style;

  var locale = useLocale(localeProp);
  var defaultFieldsetName = useUniqueIdentifier('week-day-items');
  var fieldsetName = name || defaultFieldsetName;
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

  var handleOnChange = function handleOnChange(event) {
    var weekDayValue = event.target.value;
    var isChecked = event.target.checked;

    if (!disabled && !readOnly) {
      onChange(getNormalizedValue(weekDayValue, isChecked, multiple, value));
    }
  };

  return React.createElement(StyledFieldset, {
    className: className,
    style: style,
    id: id
  }, React.createElement(RenderIf, {
    isTrue: label
  }, React.createElement(Label, {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    as: "legend"
  })), React.createElement(WeekDayItems, {
    name: fieldsetName,
    value: value,
    availableDates: availableDates,
    locale: locale,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    multiple: multiple,
    error: error,
    onChange: handleOnChange,
    ref: inputRef
  }), React.createElement(RenderIf, {
    isTrue: bottomHelpText
  }, React.createElement(StyledHelpText, null, bottomHelpText)), React.createElement(RenderIf, {
    isTrue: error
  }, React.createElement(StyledTextError, null, error)));
});
WeekDayPicker.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.arrayOf(valuePropValidation), PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  availableDates: PropTypes.arrayOf(valuePropValidation),
  locale: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  multiple: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
WeekDayPicker.defaultProps = {
  id: undefined,
  name: undefined,
  value: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: undefined,
  availableDates: [],
  locale: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  multiple: false,
  error: null,
  onChange: function onChange() {},
  className: undefined,
  style: undefined
};
export default WeekDayPicker;