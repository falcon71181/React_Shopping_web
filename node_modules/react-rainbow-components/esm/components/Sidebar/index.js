import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import StyledNav from './styled/nav';
import StyledUl from './styled/ul';
export default function Sidebar(props) {
  var ariaLabel = props.ariaLabel,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      className = props.className,
      children = props.children,
      id = props.id,
      hideSelectedItemIndicator = props.hideSelectedItemIndicator;
  var context = {
    selectedItem: selectedItem,
    onSelect: onSelect,
    hideSelectedItemIndicator: hideSelectedItemIndicator
  };
  return React.createElement(StyledNav, {
    id: id,
    className: className,
    style: style,
    "aria-label": ariaLabel
  }, React.createElement(Provider, {
    value: context
  }, React.createElement(StyledUl, null, children)));
}
Sidebar.propTypes = {
  id: PropTypes.string,
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  hideSelectedItemIndicator: PropTypes.bool
};
Sidebar.defaultProps = {
  selectedItem: null,
  onSelect: function onSelect() {},
  ariaLabel: undefined,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined,
  hideSelectedItemIndicator: false
};