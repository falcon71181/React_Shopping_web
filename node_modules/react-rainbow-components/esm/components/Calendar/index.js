import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["locale", "selectionType", "variant", "value", "onChange"];
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '../../libs/hooks';
import SingleCalendar from './singleCalendar';
import DoubleCalendar from './doubleCalendar';
import { buildNewRangeFromValue } from './helpers';
import { useCurrentDateFromValue, useRangeFromValue } from './hooks';
export default function Calendar(props) {
  var locale = props.locale,
      selectionType = props.selectionType,
      variant = props.variant,
      value = props.value,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded);

  var currentLocale = useLocale(locale);
  var currentValue = useCurrentDateFromValue(value);
  var range = useRangeFromValue(value, selectionType);
  var handleChange = useCallback(function (newValue) {
    if (selectionType === 'single') return onChange(newValue);
    var result = buildNewRangeFromValue(newValue, range);
    return onChange(result.range);
  }, [selectionType, onChange, range]);
  if (variant === 'double') return React.createElement(DoubleCalendar, _extends({
    locale: currentLocale,
    value: currentValue,
    selectedRange: range,
    selectionType: selectionType,
    onChange: handleChange
  }, rest));
  return React.createElement(SingleCalendar, _extends({
    locale: currentLocale,
    value: currentValue,
    selectedRange: range,
    selectionType: selectionType,
    onChange: handleChange
  }, rest));
}
export { SingleCalendar as Component };
Calendar.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]))]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  locale: PropTypes.string,
  selectionType: PropTypes.oneOf(['single', 'range']),
  variant: PropTypes.oneOf(['single', 'double']),
  disabledDays: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]))
};
Calendar.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined,
  id: undefined,
  locale: undefined,
  selectionType: 'single',
  variant: 'single',
  disabledDays: []
};