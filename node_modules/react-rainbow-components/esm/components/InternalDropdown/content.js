import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { SpinnerContainer } from './styled';
export default function Content(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading;

  if (isLoading) {
    return React.createElement(SpinnerContainer, null, React.createElement(Spinner, {
      assistiveText: "loading menu",
      isVisible: true,
      size: "small"
    }));
  }

  return children;
}
Content.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool
};
Content.defaultProps = {
  children: undefined,
  isLoading: false
};