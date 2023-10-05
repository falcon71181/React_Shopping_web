import React from 'react';
import PropTypes from 'prop-types';

function SvgSvalbardAndJanMayen(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, React.createElement("defs", null, React.createElement("circle", {
    id: "svalbard-and-jan-mayen_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "svalbard-and-jan-mayen_svg__b",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#svalbard-and-jan-mayen_svg__a"
  })), React.createElement("use", {
    fill: "#D8D8D8",
    xlinkHref: "#svalbard-and-jan-mayen_svg__a"
  }), React.createElement("g", {
    mask: "url(#svalbard-and-jan-mayen_svg__b)",
    fillRule: "nonzero"
  }, React.createElement("path", {
    fill: "#EF2B2D",
    d: "M-4-.91h46.504v33.822H-4z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M8.683-.91h8.455v33.822H8.683z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M-4 11.774h46.504v8.455H-4z"
  }), React.createElement("path", {
    fill: "#002868",
    d: "M10.797-.91h4.228v33.822h-4.228z"
  }), React.createElement("path", {
    fill: "#002868",
    d: "M-4 13.888h46.504v4.228H-4z"
  }))));
}

SvgSvalbardAndJanMayen.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgSvalbardAndJanMayen.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgSvalbardAndJanMayen;