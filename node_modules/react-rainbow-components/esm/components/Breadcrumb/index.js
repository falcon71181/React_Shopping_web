import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledAnchor from './styled/anchor';
import StyledButton from './styled/button';
import StyledLi from './styled/li';
export default function Breadcrumb(props) {
  var href = props.href,
      label = props.label,
      onClick = props.onClick,
      disabled = props.disabled,
      className = props.className,
      style = props.style;
  return React.createElement(StyledLi, {
    className: className,
    style: style
  }, React.createElement(RenderIf, {
    isTrue: href
  }, React.createElement(StyledAnchor, {
    disabled: disabled,
    href: href,
    "aria-disabled": !!disabled
  }, label)), React.createElement(RenderIf, {
    isTrue: onClick && !href
  }, React.createElement(StyledButton, {
    disabled: disabled,
    onClick: onClick,
    "aria-disabled": !!disabled
  }, label)));
}
Breadcrumb.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};
Breadcrumb.defaultProps = {
  label: undefined,
  href: undefined,
  onClick: function onClick() {},
  disabled: false,
  className: undefined,
  style: undefined
};