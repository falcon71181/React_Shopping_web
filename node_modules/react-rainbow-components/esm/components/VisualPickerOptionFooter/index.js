import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledLabel from './styled/label';
import StyledDescription from './styled/description';
export default function VisualPickerOptionFooter(props) {
  var label = props.label,
      description = props.description,
      className = props.className,
      style = props.style;
  return React.createElement(StyledContainer, {
    className: className,
    style: style
  }, React.createElement(RenderIf, {
    isTrue: label
  }, React.createElement(StyledLabel, null, label)), React.createElement(RenderIf, {
    isTrue: description
  }, React.createElement(StyledDescription, null, description)));
}
VisualPickerOptionFooter.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.object
};
VisualPickerOptionFooter.defaultProps = {
  label: '',
  description: '',
  className: undefined,
  style: undefined
};