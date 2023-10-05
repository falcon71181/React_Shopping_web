import React from 'react';
import PropTypes from 'prop-types';

function SvgMauritania(_ref) {
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
    fill: "#496E2D",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("g", {
    fill: "#FFDA44"
  }, React.createElement("path", {
    d: "M16 18.484a5.566 5.566 0 01-5.436-4.372 5.565 5.565 0 1010.872 0A5.566 5.566 0 0116 18.484z"
  }), React.createElement("path", {
    d: "M16 11.13l.518 1.595h1.676l-1.356.985.518 1.594L16 14.32l-1.356.985.518-1.594-1.356-.985h1.676z"
  }))));
}

SvgMauritania.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgMauritania.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgMauritania;