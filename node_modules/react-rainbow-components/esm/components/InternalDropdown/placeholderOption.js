import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "title", "isChecked", "onClick"];
import React from 'react';
import PropTypes from 'prop-types';
import StyledHeaderLabel from '../Option/styled/headerLabel';
import { StyledPrimitiveCheckbox, StyledTopHeader } from './styled';

function PlaceholderOption(props) {
  var label = props.label,
      title = props.title,
      isChecked = props.isChecked,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, _excluded);

  return React.createElement(StyledTopHeader, {
    title: title,
    role: "presentation",
    onMouseDown: onClick
  }, React.createElement(StyledPrimitiveCheckbox, _extends({
    type: "checkbox",
    label: "",
    checked: isChecked
  }, rest)), React.createElement(StyledHeaderLabel, null, label));
}

PlaceholderOption.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  isChecked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onClick: PropTypes.func
};
PlaceholderOption.defaultProps = {
  label: undefined,
  title: undefined,
  isChecked: false,
  onClick: function onClick() {}
};
export default PlaceholderOption;