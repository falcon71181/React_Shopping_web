import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import StyledLi from './styled/li';
export default function NavigationButton(props) {
  var onClick = props.onClick,
      icon = props.icon,
      disabled = props.disabled,
      dataId = props.dataId,
      ariaLabel = props.ariaLabel,
      variant = props.variant;

  var handleOnClick = function handleOnClick(event) {
    if (!disabled) {
      onClick(event);
    }
  };

  var getTabIndex = function getTabIndex() {
    if (disabled) {
      return -1;
    }

    return 0;
  };

  return React.createElement(StyledLi, null, React.createElement(StyledButton, {
    disabled: disabled,
    "data-id": dataId,
    onClick: handleOnClick,
    "aria-disabled": !!disabled,
    tabIndex: getTabIndex(),
    "aria-label": ariaLabel,
    variant: variant
  }, icon));
}
NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  dataId: PropTypes.string,
  ariaLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'shaded'])
};
NavigationButton.defaultProps = {
  disabled: false,
  dataId: undefined,
  ariaLabel: undefined,
  variant: 'default'
};