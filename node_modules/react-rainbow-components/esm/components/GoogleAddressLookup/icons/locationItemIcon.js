import React from 'react';
import PropTypes from 'prop-types';
import { IconCircleColor, IconPinColor } from '../styled/icons';

var LocationItemIcon = function LocationItemIcon(props) {
  var className = props.className;
  return React.createElement("svg", {
    className: className,
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement(IconCircleColor, null, React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "14"
  }), React.createElement(IconPinColor, null, React.createElement("path", {
    transform: "translate(8 6)",
    fillRule: "nonzero",
    d: "M5.383 15.677C.843 9.095 0 8.42 0 6a6 6 0 1 1 12 0c0 2.42-.843 3.095-5.383 9.677a.75.75 0 0 1-1.234 0zM6 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
  }))));
};

LocationItemIcon.propTypes = {
  className: PropTypes.string
};
LocationItemIcon.defaultProps = {
  className: undefined
};
export default LocationItemIcon;