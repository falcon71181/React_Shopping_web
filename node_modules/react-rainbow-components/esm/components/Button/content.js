import React from 'react';
import PropTypes from 'prop-types';
import ButtonContent from './buttonContent';
import StyledSpinner from './styled/spinner';
import StyledContent from './styled/content';
var variantMap = {
  base: 'base',
  neutral: 'base',
  brand: 'inverse',
  destructive: 'inverse',
  success: 'inverse',
  inverse: 'inverse',
  'outline-brand': 'brand',
  'border-inverse': 'inverse',
  'border-filled': 'base'
};
var spinnerMap = {
  small: 'x-small',
  medium: 'small',
  large: 'medium'
};
export default function Content(_ref) {
  var label = _ref.label,
      children = _ref.children,
      variant = _ref.variant,
      isLoading = _ref.isLoading,
      size = _ref.size;

  if (isLoading) {
    return React.createElement(StyledContent, null, React.createElement(ButtonContent, {
      label: label
    }, children), React.createElement(StyledSpinner, {
      isVisible: isLoading,
      variant: variantMap[variant],
      size: spinnerMap[size]
    }));
  }

  return React.createElement(ButtonContent, {
    label: label
  }, children);
}
Content.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  variant: PropTypes.string,
  isLoading: PropTypes.bool,
  size: PropTypes.string
};
Content.defaultProps = {
  label: undefined,
  children: null,
  variant: 'neutral',
  isLoading: false,
  size: 'medium'
};