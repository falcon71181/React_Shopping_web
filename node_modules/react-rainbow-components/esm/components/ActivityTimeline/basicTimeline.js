import React from 'react';
import PropTypes from 'prop-types';
import StyledUl from './styled/ul';
export default function BasicTimeline(props) {
  var id = props.id,
      children = props.children,
      className = props.className,
      style = props.style;
  return React.createElement(StyledUl, {
    id: id,
    className: className,
    style: style
  }, children);
}
BasicTimeline.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};
BasicTimeline.defaultProps = {
  id: undefined,
  children: null,
  className: undefined,
  style: undefined
};