import React from 'react';
import PropTypes from 'prop-types';
import StyledFaux from './styled/faux';
import HiddenElement from '../Structural/hiddenElement';
export default function Label(props) {
  var label = props.label,
      inputId = props.inputId;
  return React.createElement("label", {
    "data-id": "table-input-checkbox_label",
    htmlFor: inputId
  }, React.createElement(StyledFaux, {
    className: "rainbow-table-input-checkbox_faux"
  }), React.createElement(HiddenElement, null, label));
}
Label.propTypes = {
  label: PropTypes.node.isRequired,
  inputId: PropTypes.string.isRequired
};