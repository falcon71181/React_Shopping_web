import React from 'react';
import PropTypes from 'prop-types';

function SvgSomalia(_ref) {
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
    fill: "#338AF3",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("path", {
    fill: "#F0F0F0",
    d: "M16 8.348l1.727 5.314h5.587l-4.52 3.284 1.727 5.315L16 18.976l-4.52 3.285 1.726-5.314-4.52-3.285h5.587z"
  })));
}

SvgSomalia.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgSomalia.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgSomalia;