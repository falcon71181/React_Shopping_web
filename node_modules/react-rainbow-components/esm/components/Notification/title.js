import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';
export default function Title(_ref) {
  var text = _ref.text;

  if (typeof text === 'string') {
    return React.createElement(StyledTitle, null, text);
  }

  return text;
}
Title.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Title.defaultProps = {
  text: null
};