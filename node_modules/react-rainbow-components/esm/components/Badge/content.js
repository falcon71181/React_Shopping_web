import React from 'react';
import PropTypes from 'prop-types';
import TruncatedText from '../Structural/truncatedText';
export default function Content(props) {
  var label = props.label,
      children = props.children;

  if (children || children === 0) {
    return React.createElement(TruncatedText, null, children);
  }

  return React.createElement(TruncatedText, null, label);
}
Content.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node
};
Content.defaultProps = {
  label: null,
  children: null
};