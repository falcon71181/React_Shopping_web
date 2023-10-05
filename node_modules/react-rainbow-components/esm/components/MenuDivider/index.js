import React from 'react';
import PropTypes from 'prop-types';
import StyledDivider from './styled/divider';
export default function MenuDivider(props) {
  var variant = props.variant,
      className = props.className,
      style = props.style;
  return React.createElement(StyledDivider, {
    className: className,
    style: style,
    variant: variant,
    role: "separator"
  });
}
MenuDivider.propTypes = {
  variant: PropTypes.oneOf(['default', 'space']),
  className: PropTypes.string,
  style: PropTypes.object
};
MenuDivider.defaultProps = {
  variant: 'default',
  className: undefined,
  style: undefined
};