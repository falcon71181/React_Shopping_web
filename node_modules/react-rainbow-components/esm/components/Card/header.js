import React from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from './headerTitle';
import RenderIf from '../RenderIf';
import StyledHeaderContainer from './styled/headerContainer';
import StyledHeader from './styled/header';
import StyledIcon from './styled/icon';
export default function Header(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      actions = _ref.actions;
  return React.createElement(RenderIf, {
    isTrue: icon || title || actions
  }, React.createElement(StyledHeaderContainer, null, React.createElement(StyledHeader, null, React.createElement(RenderIf, {
    isTrue: icon
  }, React.createElement(StyledIcon, null, icon)), React.createElement(HeaderTitle, {
    title: title
  })), React.createElement(RenderIf, {
    isTrue: actions
  }, React.createElement("div", null, actions))));
}
Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  actions: PropTypes.node
};
Header.defaultProps = {
  title: null,
  icon: null,
  actions: null
};