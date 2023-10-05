import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from './infoIcon';
import ErrorIcon from './errorIcon';
import SuccessIcon from './successIcon';
import WarningIcon from './warningIcon';
import StyledIconContainer from '../styled/iconContainer';
var iconMap = {
  info: function info() {
    return React.createElement(InfoIcon, null);
  },
  error: function error() {
    return React.createElement(ErrorIcon, null);
  },
  warning: function warning() {
    return React.createElement(WarningIcon, null);
  },
  success: function success() {
    return React.createElement(SuccessIcon, null);
  }
};

function VariantIcon(_ref) {
  var icon = _ref.icon;

  if (iconMap[icon]) {
    return React.createElement(StyledIconContainer, {
      icon: icon
    }, iconMap[icon]());
  }

  return null;
}

export default function Icon(_ref2) {
  var icon = _ref2.icon;

  if (typeof icon === 'string') {
    return React.createElement(VariantIcon, {
      icon: icon
    });
  }

  return React.createElement(StyledIconContainer, null, icon);
}
Icon.propTypes = {
  icon: PropTypes.node
};
Icon.defaultProps = {
  icon: null
};