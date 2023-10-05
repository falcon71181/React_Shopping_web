import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledDescription from './styled/description';
export default function Description(_ref) {
  var description = _ref.description,
      isExpanded = _ref.isExpanded;
  return React.createElement(RenderIf, {
    isTrue: description
  }, React.createElement(StyledDescription, {
    isExpanded: isExpanded
  }, description));
}
Description.propTypes = {
  description: PropTypes.node,
  isExpanded: PropTypes.bool.isRequired
};
Description.defaultProps = {
  description: ''
};