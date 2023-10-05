import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
export default function CardBoddy(_ref) {
  var isLoading = _ref.isLoading,
      children = _ref.children;

  if (isLoading) {
    return React.createElement(Spinner, {
      isVisible: isLoading,
      size: "small"
    });
  }

  return children;
}
CardBoddy.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node
};
CardBoddy.defaultProps = {
  isLoading: null,
  children: null
};