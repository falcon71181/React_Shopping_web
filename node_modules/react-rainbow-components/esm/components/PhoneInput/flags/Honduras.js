import React from 'react';
import PropTypes from 'prop-types';

function SvgHonduras(_ref) {
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
  }), React.createElement("g", {
    fill: "#338AF3"
  }, React.createElement("path", {
    d: "M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32zM16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0zM9.847 10.435l.518 1.594h1.676l-1.356.985.518 1.595-1.356-.986-1.357.986.518-1.595-1.356-.985H9.33zM9.847 17.391l.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.518-1.594-1.356-.985H9.33zM22.153 10.435l.519 1.594h1.676l-1.356.985.518 1.595-1.357-.986-1.356.986.518-1.595-1.356-.985h1.676zM22.153 17.391l.519 1.595h1.676l-1.356.985.518 1.594-1.357-.985-1.356.985.518-1.594-1.356-.985h1.676zM16 13.913l.518 1.594h1.676l-1.356.986.518 1.594L16 17.102l-1.356.985.518-1.594-1.356-.986h1.676z"
  }))));
}

SvgHonduras.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgHonduras.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgHonduras;