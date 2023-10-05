import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledIcon from './styled/icon';
export default function Icon(_ref) {
  var icon = _ref.icon,
      isVisible = _ref.isVisible,
      position = _ref.position;
  return React.createElement(RenderIf, {
    isTrue: isVisible
  }, React.createElement(StyledIcon, {
    position: position
  }, icon));
}
Icon.propTypes = {
  icon: PropTypes.node,
  isVisible: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired
};
Icon.defaultProps = {
  icon: null
};