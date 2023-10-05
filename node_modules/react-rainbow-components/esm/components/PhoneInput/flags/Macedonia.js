import React from 'react';
import PropTypes from 'prop-types';

function SvgMacedonia(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("circle", {
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("g", {
    transform: "translate(.125 .125)",
    fill: "#D80027"
  }, React.createElement("path", {
    d: "M18.308 31.691a15.914 15.914 0 007.029-2.914l-9.462-12.902 2.433 15.816zM13.442.059a15.916 15.916 0 00-7.029 2.914l9.462 12.902L13.442.059zM6.413 28.777a15.917 15.917 0 007.029 2.914l2.433-15.816-9.462 12.902z"
  }), React.createElement("path", {
    d: "M2.973 6.413a15.916 15.916 0 00-2.914 7.029l15.816 2.433L2.973 6.413zM.059 18.308a15.914 15.914 0 002.914 7.029l12.902-9.462L.059 18.308z"
  }), React.createElement("path", {
    d: "M31.691 13.442a15.916 15.916 0 00-2.914-7.029l-12.902 9.462 15.816-2.433z"
  }), React.createElement("path", {
    d: "M25.337 2.972A15.915 15.915 0 0018.308.06l-2.433 15.816 9.462-12.903z"
  }), React.createElement("path", {
    d: "M28.778 25.337a15.917 15.917 0 002.913-7.029l-15.816-2.433 12.903 9.462z"
  }), React.createElement("circle", {
    cx: 15.875,
    cy: 15.875,
    r: 5.565
  })), React.createElement("circle", {
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 4.174
  })));
}

SvgMacedonia.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgMacedonia.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgMacedonia;