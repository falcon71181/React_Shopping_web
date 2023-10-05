import React from 'react';
import PropTypes from 'prop-types';
import StyledOl from './styled/ol';
import StyledNav from './styled/nav';
export default function Breadcrumbs(props) {
  var children = props.children,
      className = props.className,
      style = props.style;
  return React.createElement(StyledNav, {
    "aria-label": "Breadcrumbs",
    style: style,
    className: className
  }, React.createElement(StyledOl, null, children));
}
Breadcrumbs.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object])
};
Breadcrumbs.defaultProps = {
  className: undefined,
  style: undefined,
  children: []
};