import React from 'react';
import PropTypes from 'prop-types';

function SvgTunisia(_ref) {
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
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 7.652
  }), React.createElement("g", {
    fill: "#D80027"
  }, React.createElement("path", {
    d: "M16.943 13.074l1.312 1.81 2.127-.69L19.066 16l1.312 1.81-2.125-.693-1.315 1.808.001-2.235-2.125-.692 2.126-.69z"
  }), React.createElement("path", {
    d: "M17.74 20.522a4.522 4.522 0 112.15-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z"
  }))));
}

SvgTunisia.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgTunisia.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgTunisia;