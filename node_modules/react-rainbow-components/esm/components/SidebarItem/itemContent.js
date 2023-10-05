import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledIcon from './styled/icon';
import StyledLabel from './styled/label';
export default function ItemContent(props) {
  var label = props.label,
      icon = props.icon,
      isSelected = props.isSelected;
  return React.createElement(React.Fragment, null, React.createElement(StyledIcon, null, icon), React.createElement(RenderIf, {
    isTrue: label
  }, React.createElement(StyledLabel, {
    isSelected: isSelected
  }, label)));
}
ItemContent.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  isSelected: PropTypes.bool.isRequired
};
ItemContent.defaultProps = {
  label: undefined,
  icon: null
};