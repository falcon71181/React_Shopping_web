import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useContext, useRef, useImperativeHandle } from 'react';
import { ColorPickerContext } from '../../context';
import { StyledFlexContainer } from '../../styled';
import StyledNumberInput from './styled';
import { recomposeColor, rgbaToHex, rgbToHsv, decomposeColor } from '../../../../styles/helpers/color';
var Rgba = React.forwardRef(function (_props, ref) {
  var _ref = useContext(ColorPickerContext) || {},
      rgba = _ref.rgba,
      hsv = _ref.hsv,
      hex = _ref.hex,
      tabIndex = _ref.tabIndex,
      onChange = _ref.onChange;

  var firstRef = useRef();
  var lastRef = useRef();
  var isAlphaEmpty = useRef(false);
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        firstRef.current.focus();
      },
      click: function click() {
        firstRef.current.click();
      },
      blur: function blur() {
        lastRef.current.blur();
      }
    };
  });

  var handleAlphaChange = function handleAlphaChange(event) {
    isAlphaEmpty.current = event.target.value === '';
    var value = parseInt(event.target.value, 10);
    var newApha = isNaN(value) ? 0 : Math.max(0, Math.min(value, 100)) / 100;
    rgba[3] = newApha;
    onChange({
      hex: hex,
      rgba: rgba,
      hsv: hsv
    });
  };

  var handleChange = function handleChange(index, event) {
    var value = parseInt(event.target.value, 10);

    if (isNaN(value)) {
      rgba[index] = 0;
    } else {
      rgba[index] = Math.max(0, Math.min(value, 255));
    }

    var rgbaColor = recomposeColor({
      type: 'rgba',
      values: rgba
    });
    onChange({
      hex: "#".concat(rgbaToHex(rgbaColor)),
      rgba: rgba,
      hsv: decomposeColor(rgbToHsv(rgbaColor)).values
    });
  };

  var _rgba = _slicedToArray(rgba, 4),
      r = _rgba[0],
      g = _rgba[1],
      b = _rgba[2],
      a = _rgba[3];

  var alpha = isAlphaEmpty.current ? '' : Math.round(a * 100);
  return React.createElement(StyledFlexContainer, null, React.createElement(StyledNumberInput, {
    type: "number",
    value: r,
    bottomHelpText: "R",
    onChange: function onChange(event) {
      return handleChange(0, event);
    },
    tabIndex: tabIndex,
    ref: firstRef
  }), React.createElement(StyledNumberInput, {
    type: "number",
    value: g,
    bottomHelpText: "G",
    onChange: function onChange(event) {
      return handleChange(1, event);
    },
    tabIndex: tabIndex
  }), React.createElement(StyledNumberInput, {
    type: "number",
    value: b,
    bottomHelpText: "B",
    onChange: function onChange(event) {
      return handleChange(2, event);
    },
    tabIndex: tabIndex
  }), React.createElement(StyledNumberInput, {
    type: "number",
    value: alpha,
    bottomHelpText: "ALPHA",
    onChange: handleAlphaChange,
    tabIndex: tabIndex,
    ref: lastRef
  }));
});
export default Rgba;