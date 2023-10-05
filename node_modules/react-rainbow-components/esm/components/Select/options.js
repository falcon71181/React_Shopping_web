import React from 'react';
import PropTypes from 'prop-types';
export default function Options(_ref) {
  var options = _ref.options;
  return options.map(function (option, index) {
    var key = "option-".concat(index);
    return React.createElement("option", {
      value: option.value,
      disabled: option.disabled,
      key: key
    }, option.label);
  });
}
Options.propTypes = {
  options: PropTypes.array.isRequired
};