import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import StyledCloseIcon from './styled/closeIcon';
import StyledCloseButton from './styled/closeButton';
import StyledInputIcon from './styled/inputIcon';
export default function RightElement(_ref) {
  var showCloseButton = _ref.showCloseButton,
      onClear = _ref.onClear,
      icon = _ref.icon,
      error = _ref.error;

  if (showCloseButton) {
    return React.createElement(StyledCloseButton, null, React.createElement(ButtonIcon, {
      assistiveText: "close",
      size: "small",
      title: "close",
      tabIndex: -1,
      icon: React.createElement(StyledCloseIcon, null),
      onClick: onClear
    }));
  }

  return React.createElement(StyledInputIcon, {
    error: error
  }, icon);
}
RightElement.propTypes = {
  icon: PropTypes.node,
  showCloseButton: PropTypes.bool,
  onClear: PropTypes.func,
  error: PropTypes.node
};
RightElement.defaultProps = {
  icon: undefined,
  showCloseButton: false,
  error: null,
  onClear: function onClear() {}
};