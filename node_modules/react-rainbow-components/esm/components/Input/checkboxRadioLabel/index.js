import React from 'react';
import PropTypes from 'prop-types';
import HiddenElement from '../../Structural/hiddenElement';
import StyledLabelText from './labelText';
export default function Label(props) {
  var label = props.label,
      disabled = props.disabled,
      hideLabel = props.hideLabel,
      inputId = props.inputId,
      id = props.id;

  if (hideLabel) {
    return React.createElement("label", {
      htmlFor: inputId,
      id: id
    }, React.createElement("span", {
      className: "rainbow-input_faux"
    }), React.createElement(HiddenElement, null, label));
  }

  return React.createElement("label", {
    htmlFor: inputId,
    id: id
  }, React.createElement("span", {
    className: "rainbow-input_faux"
  }), React.createElement(StyledLabelText, {
    disabled: disabled
  }, label));
}
Label.propTypes = {
  label: PropTypes.node,
  inputId: PropTypes.string,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string
};
Label.defaultProps = {
  label: undefined,
  inputId: undefined,
  disabled: false,
  hideLabel: false,
  id: undefined
};