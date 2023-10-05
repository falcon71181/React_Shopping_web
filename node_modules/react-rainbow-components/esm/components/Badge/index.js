import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import Content from './content';
export default function Badge(props) {
  var className = props.className,
      style = props.style,
      label = props.label,
      title = props.title,
      children = props.children,
      variant = props.variant,
      size = props.size,
      borderRadius = props.borderRadius;

  if (children === null && label === null) {
    return null;
  }

  return React.createElement(StyledContainer, {
    className: className,
    style: style,
    variant: variant,
    title: title,
    size: size,
    borderRadius: borderRadius
  }, React.createElement(Content, {
    label: label
  }, children));
}
Badge.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'inverse', 'lightest', 'outline-brand', 'brand', 'warning', 'success', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  style: PropTypes.object,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Badge.defaultProps = {
  label: null,
  title: undefined,
  children: null,
  variant: 'default',
  size: 'medium',
  className: undefined,
  style: undefined,
  borderRadius: 'rounded'
};