import React from 'react';
import PropTypes from 'prop-types';

function SvgSaintMartin(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, React.createElement("defs", null, React.createElement("circle", {
    id: "saint-martin_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "saint-martin_svg__b",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#saint-martin_svg__a"
  })), React.createElement("use", {
    fill: "#D8D8D8",
    xlinkHref: "#saint-martin_svg__a"
  }), React.createElement("g", {
    mask: "url(#saint-martin_svg__b)",
    fillRule: "nonzero"
  }, React.createElement("g", {
    transform: "translate(-11 -3)"
  }, React.createElement("path", {
    fill: "#003787",
    d: "M0 0h54v36H0z"
  }), React.createElement("path", {
    fill: "#F1F2F2",
    d: "M0 0h54L30 24v12h-6V24z"
  }), React.createElement("circle", {
    fill: "#F9D90F",
    cx: 27,
    cy: 15,
    r: 4
  }), React.createElement("path", {
    fill: "#F1F2F2",
    d: "M22 15h10l-5 9z"
  }), React.createElement("path", {
    fill: "#CF142B",
    d: "M27 24l-8-7.5h16z"
  })))));
}

SvgSaintMartin.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgSaintMartin.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgSaintMartin;