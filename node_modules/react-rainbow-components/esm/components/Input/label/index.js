import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../../RequiredAsterisk';
import HiddenElement from '../../Structural/hiddenElement';
import LabelText from './labelText';
import RenderIf from '../../RenderIf';
export default function Label(props) {
  var className = props.className,
      label = props.label,
      required = props.required,
      inputId = props.inputId,
      readOnly = props.readOnly,
      id = props.id,
      labelAlignment = props.labelAlignment,
      hideLabel = props.hideLabel,
      variant = props.variant,
      as = props.as,
      size = props.size;

  if (hideLabel) {
    return React.createElement(HiddenElement, {
      as: "label",
      htmlFor: inputId,
      id: id
    }, React.createElement(RequiredAsterisk, {
      required: required
    }), label);
  }

  return React.createElement(RenderIf, {
    isTrue: label
  }, React.createElement(LabelText, {
    className: className,
    readOnly: readOnly,
    labelAlignment: labelAlignment,
    htmlFor: inputId,
    as: as,
    id: id,
    variant: variant,
    size: size
  }, React.createElement(RequiredAsterisk, {
    required: required
  }), label));
}
Label.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  required: PropTypes.bool,
  inputId: PropTypes.string,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  as: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'inverse']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
Label.defaultProps = {
  className: undefined,
  label: undefined,
  required: false,
  inputId: undefined,
  readOnly: false,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  as: undefined,
  variant: 'default',
  size: 'medium'
};