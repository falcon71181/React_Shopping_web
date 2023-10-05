import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './styled/header';
export default function Header(_ref) {
  var text = _ref.text;

  if (typeof text === 'string') {
    return React.createElement(StyledHeader, null, text);
  }

  return text;
}
Header.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Header.defaultProps = {
  text: undefined
};