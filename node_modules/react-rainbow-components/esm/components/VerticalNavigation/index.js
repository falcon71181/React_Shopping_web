import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import StyledNav from './styled/nav';
export default function VerticalNavigation(props) {
  var id = props.id,
      ariaLabel = props.ariaLabel,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      compact = props.compact,
      shaded = props.shaded,
      className = props.className,
      children = props.children;
  var context = {
    selectedItem: selectedItem,
    onSelect: onSelect
  };
  return React.createElement(StyledNav, {
    id: id,
    className: className,
    style: style,
    "aria-label": ariaLabel,
    compact: compact,
    shaded: shaded
  }, React.createElement(Provider, {
    value: context
  }, children));
}
VerticalNavigation.propTypes = {
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func,
  compact: PropTypes.bool,
  shaded: PropTypes.bool,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  id: PropTypes.string
};
VerticalNavigation.defaultProps = {
  selectedItem: null,
  onSelect: function onSelect() {},
  compact: false,
  shaded: false,
  ariaLabel: undefined,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined
};