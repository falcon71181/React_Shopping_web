import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';
export default function HeaderTitle(_ref) {
  var title = _ref.title;

  if (typeof title === 'string') {
    return React.createElement(StyledTitle, null, title);
  }

  return title;
}
HeaderTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
HeaderTitle.defaultProps = {
  title: null
};