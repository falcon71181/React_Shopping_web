import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';
import StyledDivider from './styled/divider';
export default function Header(_ref) {
  var content = _ref.content,
      id = _ref.id;

  if (typeof content === 'string') {
    return React.createElement(React.Fragment, null, React.createElement(StyledTitle, {
      id: id
    }, content), React.createElement(StyledDivider, null));
  }

  return React.createElement(React.Fragment, null, content);
}
Header.propTypes = {
  id: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Header.defaultProps = {
  id: undefined,
  content: undefined
};