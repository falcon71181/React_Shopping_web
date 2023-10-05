import React from 'react';
import PropTypes from 'prop-types';

var SelectedLocationIcon = function SelectedLocationIcon(props) {
  var className = props.className;
  return React.createElement("svg", {
    className: className,
    width: "15",
    height: "20",
    viewBox: "0 0 12.033 16.05",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("path", {
    fill: "#ee3840",
    fillRule: "nonzero",
    d: "M5.383 15.677C.843 9.095 0 8.42 0 6a6 6 0 1 1 12 0c0 2.42-.843 3.095-5.383 9.677a.75.75 0 0 1-1.234 0zM6 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
  }));
};

SelectedLocationIcon.propTypes = {
  className: PropTypes.string
};
SelectedLocationIcon.defaultProps = {
  className: undefined
};
export default SelectedLocationIcon;