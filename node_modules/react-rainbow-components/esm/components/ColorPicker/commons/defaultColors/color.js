import React from 'react';
import PropTypes from 'prop-types';
import { StyledColor, StyledInput, StyledLabel } from './styled';
import AssistiveText from '../../../AssistiveText';
import { useUniqueIdentifier } from '../../../../libs/hooks';
import { colorToRgba, isValidColor, rgbToHsv, rgbaToHex, decomposeColor } from '../../../../styles/helpers/color';
var Color = React.forwardRef(function (props, ref) {
  var color = props.color,
      name = props.name,
      tabIndex = props.tabIndex,
      isChecked = props.isChecked,
      onChange = props.onChange;
  var rgba = colorToRgba(color);
  var colorId = useUniqueIdentifier('color-picker-default');

  if (!isValidColor(rgba)) {
    return null;
  }

  var handleChange = function handleChange() {
    onChange({
      hex: "#".concat(rgbaToHex(rgba)),
      rgba: decomposeColor(rgba).values,
      hsv: decomposeColor(rgbToHsv(rgba)).values
    });
  };

  var style = {
    backgroundColor: color
  };
  return React.createElement(StyledColor, null, React.createElement(StyledInput, {
    id: colorId,
    as: "input",
    name: name,
    checked: isChecked,
    value: color,
    type: "radio",
    onChange: handleChange,
    ref: ref,
    tabIndex: tabIndex
  }), React.createElement(StyledLabel, {
    htmlFor: colorId,
    style: style
  }, React.createElement(AssistiveText, null, color)));
});
Color.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};
Color.defaultProps = {
  color: undefined,
  name: '',
  isChecked: false,
  onChange: function onChange() {}
};
export default Color;