import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

var Exclamation = function Exclamation(props) {
  var className = props.className,
      style = props.style;

  var _useTheme = useTheme(),
      palette = _useTheme.rainbow.palette;

  var color = useMemo(function () {
    return {
      background: palette.error.main,
      foreground: palette.getContrastText(palette.error.main)
    };
  }, [palette]);
  return React.createElement("svg", {
    className: className,
    style: style,
    width: "1rem",
    height: "1rem",
    viewBox: "0 0 20 20"
  }, React.createElement("g", {
    id: "components"
  }, React.createElement("circle", {
    fill: color.background,
    cx: "10",
    cy: "10",
    r: "10"
  }), React.createElement("path", {
    transform: "translate(8.5, -2)",
    fill: color.foreground,
    d: "m1.57577 5.85161c-.552285 0-1 .453036-1 .99703v6.00594c0 .550645.443865.99703 1 .99703 .552285 0 1-.453036 1-.99703v-6.00594c0-.550644-.443865-.99703-1-.99703v0Zm0 12c.552285 0 1-.447715 1-1 0-.552285-.447715-1-1-1 -.552285 0-1 .447715-1 1 0 .552285.447715 1 1 1v0Z"
  })));
};

Exclamation.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
Exclamation.defaultProps = {
  className: undefined,
  style: undefined
};
export default Exclamation;