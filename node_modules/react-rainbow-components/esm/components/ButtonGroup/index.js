import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
export default function ButtonGroup(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      variant = props.variant,
      borderRadius = props.borderRadius;
  return React.createElement(StyledContainer, {
    className: className,
    style: style,
    role: "group",
    variant: variant,
    borderRadius: borderRadius
  }, children);
}
ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'shaded']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
ButtonGroup.defaultProps = {
  children: null,
  className: undefined,
  style: undefined,
  variant: 'default',
  borderRadius: 'rounded'
};