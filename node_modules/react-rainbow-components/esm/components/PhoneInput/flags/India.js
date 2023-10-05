import React from 'react';
import PropTypes from 'prop-types';

function SvgIndia(_ref) {
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
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("path", {
    d: "M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0z",
    fill: "#FF9811"
  }), React.createElement("path", {
    d: "M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z",
    fill: "#6DA544"
  }), React.createElement("circle", {
    fill: "#0052B4",
    cx: 16,
    cy: 16,
    r: 5.565
  }), React.createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 3.478
  }), React.createElement("path", {
    fill: "#0052B4",
    d: "M16 11.708l1.073 2.434 2.644-.288L18.147 16l1.57 2.146-2.644-.288L16 20.293l-1.073-2.434-2.644.288L13.853 16l-1.57-2.146 2.644.288z"
  })));
}

SvgIndia.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgIndia.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgIndia;