import React from 'react';
import PropTypes from 'prop-types';

function SvgParaguay(_ref) {
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
    fill: "#D80027"
  }), React.createElement("path", {
    d: "M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z",
    fill: "#0052B4"
  }), React.createElement("path", {
    d: "M19.935 11.37l-1.476 1.475a3.478 3.478 0 11-4.919 0l-1.475-1.476a5.565 5.565 0 107.87 0z",
    fill: "#6DA544"
  }), React.createElement("path", {
    fill: "#FFDA44",
    d: "M16 13.217l.518 1.595h1.676l-1.356.985.518 1.594L16 16.406l-1.356.985.518-1.594-1.356-.985h1.676z"
  })));
}

SvgParaguay.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgParaguay.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgParaguay;