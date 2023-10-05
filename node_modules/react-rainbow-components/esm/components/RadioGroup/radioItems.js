import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["description", "disabled"];
import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../Input/inputRadio/radio';
import StyledItemContainer from './styled/itemContainer';
import RenderIf from '../RenderIf';
import StyledItemDescription from './styled/itemDescription';
export default function RadioItems(props) {
  var options = props.options,
      ariaDescribedby = props.ariaDescribedby,
      onChange = props.onChange,
      value = props.value,
      name = props.name,
      error = props.error;

  var isChecked = function isChecked(option) {
    return option.value === value;
  };

  return options.map(function (option, index) {
    var key = "radio-".concat(index);

    var description = option.description,
        disabled = option.disabled,
        rest = _objectWithoutProperties(option, _excluded);

    return React.createElement(StyledItemContainer, {
      key: key,
      "data-id": "input-radiogroup_container"
    }, React.createElement(Radio, _extends({}, rest, {
      onChange: onChange,
      checked: isChecked(option),
      ariaDescribedby: ariaDescribedby,
      name: name,
      error: error,
      disabled: disabled
    })), React.createElement(RenderIf, {
      isTrue: description
    }, React.createElement(StyledItemDescription, {
      disabled: disabled
    }, description)));
  });
}
RadioItems.propTypes = {
  ariaDescribedby: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired
};
RadioItems.defaultProps = {
  ariaDescribedby: undefined,
  value: undefined,
  onChange: function onChange() {}
};