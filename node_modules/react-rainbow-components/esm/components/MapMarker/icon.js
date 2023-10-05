import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../AssistiveText';
import StyledIconContainer from './styled/iconContainer';
import MarkerIcon from './markerIcon';
import StyledIcon from './styled/icon';
var ICON_DESCRIPTION = 'marker icon';
export default function Icon(_ref) {
  var icon = _ref.icon;

  if (icon) {
    return React.createElement(StyledIconContainer, null, icon);
  }

  return React.createElement(StyledIcon, {
    title: ICON_DESCRIPTION
  }, React.createElement(MarkerIcon, null), React.createElement(AssistiveText, {
    text: ICON_DESCRIPTION
  }));
}
Icon.propTypes = {
  icon: PropTypes.node
};
Icon.defaultProps = {
  icon: null
};