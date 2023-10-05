import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import StyledBadge from './styled/badge';
import { getSuffixSI } from '../../libs/utils';
export default function BadgeOverlay(props) {
  var className = props.className,
      style = props.style,
      value = props.value,
      overlap = props.overlap,
      children = props.children,
      variant = props.variant,
      isHidden = props.isHidden,
      position = props.position;

  if (children === null) {
    return null;
  }

  return React.createElement(StyledContainer, {
    className: className,
    style: style,
    overlap: overlap
  }, children, React.createElement(StyledBadge, {
    variant: variant,
    position: position,
    overlap: overlap,
    value: value,
    isHidden: isHidden
  }, getSuffixSI(value)));
}
BadgeOverlay.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overlap: PropTypes.oneOf(['circle', 'rectangle']),
  children: PropTypes.node,
  variant: PropTypes.oneOf(['brand', 'success', 'error', 'warning']),
  isHidden: PropTypes.bool,
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  className: PropTypes.string,
  style: PropTypes.object
};
BadgeOverlay.defaultProps = {
  value: undefined,
  overlap: 'rectangle',
  children: null,
  variant: 'error',
  isHidden: false,
  position: 'top-right',
  className: undefined,
  style: undefined
};