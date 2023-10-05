import React from 'react';
import PropTypes, { bool, node } from 'prop-types';
export default function HighlighContainer(_ref) {
  var children = _ref.children,
      isInline = _ref.isInline,
      className = _ref.className,
      style = _ref.style;

  if (isInline) {
    return React.createElement("span", {
      className: className,
      style: style
    }, children);
  }

  return React.createElement("p", {
    className: className,
    style: style
  }, children);
}
HighlighContainer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: node,
  isInline: bool
};
HighlighContainer.defaultProps = {
  className: undefined,
  style: undefined,
  children: undefined,
  isInline: false
};