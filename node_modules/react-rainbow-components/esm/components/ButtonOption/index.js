import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { ButtonGroupPickerContext } from '../ButtonGroupPicker/context';
import HiddenElement from '../Structural/hiddenElement';
import { StyledLabel, StyledText, StyledDivider } from './styled';
import isOptionSelected from './helpers/isOptionSelected';
import { useUniqueIdentifier } from '../../libs/hooks';
export default function ButtonOption(props) {
  var inputId = useUniqueIdentifier('button-option');
  var className = props.className,
      style = props.style,
      name = props.name,
      label = props.label,
      disabled = props.disabled,
      onClick = props.onClick;

  var _useContext = useContext(ButtonGroupPickerContext),
      type = _useContext.type,
      values = _useContext.values,
      contextName = _useContext.name,
      onChange = _useContext.onChange,
      ariaDescribedBy = _useContext.ariaDescribedBy,
      size = _useContext.size,
      variant = _useContext.variant;

  var checked = isOptionSelected(values, name);

  var handleClick = function handleClick() {
    return onClick({
      isSelected: checked
    });
  };

  var isShaded = variant === 'shaded';
  return React.createElement(StyledLabel, {
    className: className,
    style: style,
    onClick: handleClick,
    checked: checked,
    htmlFor: inputId,
    variant: variant
  }, React.createElement(HiddenElement, {
    id: inputId,
    as: "input",
    type: type,
    name: contextName,
    value: name,
    "aria-describedby": ariaDescribedBy,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), React.createElement(StyledText, {
    size: size,
    disabled: disabled,
    checked: checked,
    variant: variant
  }, label), React.createElement(RenderIf, {
    isTrue: isShaded
  }, React.createElement(StyledDivider, null)));
}
ButtonOption.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
ButtonOption.defaultProps = {
  className: undefined,
  style: undefined,
  name: undefined,
  label: undefined,
  disabled: false,
  onClick: function onClick() {}
};