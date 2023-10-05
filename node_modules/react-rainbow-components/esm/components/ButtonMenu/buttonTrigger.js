import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "icon", "iconPosition"];
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import RenderIf from '../RenderIf';
import LeftIcon from './styled/styledLeftIcon';
import RightIcon from './styled/styledRightIcon';
var ButtonTrigger = React.forwardRef(function (props, ref) {
  var label = props.label,
      icon = props.icon,
      iconPosition = props.iconPosition,
      rest = _objectWithoutProperties(props, _excluded);

  var hasLeftIcon = icon && iconPosition !== 'right';
  var hasRightIcon = icon && iconPosition === 'right';

  if (label) {
    return React.createElement(Button, _extends({}, rest, {
      ref: ref
    }), React.createElement(RenderIf, {
      isTrue: hasLeftIcon
    }, React.createElement(LeftIcon, null, icon)), label, React.createElement(RenderIf, {
      isTrue: hasRightIcon
    }, React.createElement(RightIcon, null, icon)));
  }

  return React.createElement(ButtonIcon, _extends({}, rest, {
    icon: icon,
    ref: ref
  }));
});
ButtonTrigger.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right'])
};
ButtonTrigger.defaultProps = {
  label: undefined,
  icon: null,
  iconPosition: 'left'
};
export default ButtonTrigger;