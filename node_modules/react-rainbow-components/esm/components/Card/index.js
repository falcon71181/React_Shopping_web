import React from 'react';
import PropTypes from 'prop-types';
import CardBoddy from './cardBody';
import Header from './header';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledFooter from './styled/footer';
export default function Card(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      actions = props.actions,
      children = props.children,
      footer = props.footer,
      title = props.title,
      icon = props.icon,
      isLoading = props.isLoading;
  var hasHeader = icon || title || actions;
  var showFooter = !!(footer && !isLoading);
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style,
    hasHeader: hasHeader
  }, React.createElement(Header, {
    actions: actions,
    title: title,
    icon: icon
  }), React.createElement(CardBoddy, {
    isLoading: isLoading
  }, children), React.createElement(RenderIf, {
    isTrue: showFooter
  }, React.createElement(StyledFooter, null, footer)));
}
Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  actions: PropTypes.node,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string
};
Card.defaultProps = {
  title: null,
  icon: null,
  actions: null,
  footer: null,
  isLoading: false,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined
};