import React from 'react';
import PropTypes from 'prop-types';
export default function RenderIf(_ref) {
  var isTrue = _ref.isTrue,
      children = _ref.children;

  if (isTrue) {
    return React.createElement(React.Fragment, null, children);
  }

  return null;
}
RenderIf.propTypes = {
  isTrue: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object, PropTypes.node])
};
RenderIf.defaultProps = {
  isTrue: false,
  children: []
};