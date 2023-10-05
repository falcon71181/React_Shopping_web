import React from 'react';
import PropTypes from 'prop-types';
import StyledDescription from './styled/description';
export default function Description(_ref) {
  var text = _ref.text;

  if (typeof text === 'string') {
    return React.createElement(StyledDescription, null, text);
  }

  return text;
}
Description.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Description.defaultProps = {
  text: null
};