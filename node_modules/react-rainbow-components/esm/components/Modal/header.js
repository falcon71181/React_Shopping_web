import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './styled/header';
import StyledTitle from './styled/title';
export default function Header(_ref) {
  var title = _ref.title,
      id = _ref.id;

  if (typeof title === 'string') {
    return React.createElement(StyledHeader, null, React.createElement(StyledTitle, {
      id: id
    }, title));
  }

  return title;
}
Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Header.defaultProps = {
  id: undefined,
  title: undefined
};