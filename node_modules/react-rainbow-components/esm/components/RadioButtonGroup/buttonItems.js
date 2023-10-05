import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonItem from './radioButtonItem';
export default function ButtonItems(props) {
  var options = props.options,
      ariaDescribedby = props.ariaDescribedby,
      onChange = props.onChange,
      value = props.value,
      name = props.name,
      required = props.required,
      variant = props.variant,
      size = props.size;

  var isChecked = function isChecked(option) {
    return option.value === value;
  };

  return options.map(function (option, index) {
    var key = "radiobutton-".concat(index);
    return React.createElement(RadioButtonItem, _extends({
      key: key,
      itemRef: option.optionRef,
      required: required,
      onChange: onChange,
      isChecked: isChecked(option),
      ariaDescribedby: ariaDescribedby,
      name: name,
      variant: variant,
      size: size
    }, option));
  });
}
ButtonItems.propTypes = {
  ariaDescribedby: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(['default', 'inverse', 'brand'])
};
ButtonItems.defaultProps = {
  ariaDescribedby: undefined,
  value: undefined,
  onChange: function onChange() {},
  variant: 'default'
};