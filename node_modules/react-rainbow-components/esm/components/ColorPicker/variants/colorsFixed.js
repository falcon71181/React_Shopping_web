import React, { useRef, useImperativeHandle } from 'react';
import { DefaultColors } from '../commons';
var ColorsFixed = React.forwardRef(function (_props, ref) {
  var colorsRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        colorsRef.current.focus();
      },
      click: function click() {
        colorsRef.current.click();
      },
      blur: function blur() {
        colorsRef.current.blur();
      }
    };
  });
  return React.createElement(DefaultColors, {
    ref: colorsRef
  });
});
export default ColorsFixed;