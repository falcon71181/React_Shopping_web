import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';
export default function RatingItems(props) {
  var onChange = props.onChange,
      value = props.value,
      name = props.name,
      readOnly = props.readOnly,
      required = props.required,
      describedBy = props.describedBy;
  return Array(5).fill(0).map(function (item, index) {
    var key = "star-".concat(index);
    var normalizedValue = readOnly ? Math.ceil(value) : Math.round(value);
    var isFilled = index < normalizedValue;
    var isHalf = readOnly && Number(value) < index + 1 && !Number.isInteger(Number(value));
    return React.createElement(Star, {
      key: key,
      name: name,
      onChange: onChange,
      value: index + 1,
      isFilled: isFilled,
      isHalf: isHalf,
      readOnly: readOnly,
      required: required,
      describedBy: describedBy
    });
  });
}
RatingItems.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  describedBy: PropTypes.string
};
RatingItems.defaultProps = {
  value: 0,
  onChange: function onChange() {},
  name: undefined,
  readOnly: false,
  required: false,
  describedBy: undefined
};