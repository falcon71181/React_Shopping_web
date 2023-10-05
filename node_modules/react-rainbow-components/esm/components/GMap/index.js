import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["apiKey"];
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import MapComponent from './component';
var googleMapApiUrl = 'https://maps.googleapis.com/maps/api/js';
export default function GMap(props) {
  var apiKey = props.apiKey,
      rest = _objectWithoutProperties(props, _excluded);

  var Component = useCallback(scriptLoader("".concat(googleMapApiUrl, "?key=").concat(apiKey, "&libraries=places"))(MapComponent), [apiKey]);
  return React.createElement(Component, rest);
}
GMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.object
};
GMap.defaultProps = {
  latitude: 37.8,
  longitude: -122.5,
  zoom: 8,
  header: undefined,
  children: null,
  className: undefined,
  style: undefined
};