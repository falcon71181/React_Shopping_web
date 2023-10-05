import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["apiKey"];
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import MapComponent from './component';
var googleMapApiUrl = 'https://maps.googleapis.com/maps/api/js';
export default function PresenceMap(props) {
  var apiKey = props.apiKey,
      rest = _objectWithoutProperties(props, _excluded);

  var Component = useCallback(scriptLoader("".concat(googleMapApiUrl, "?key=").concat(apiKey))(MapComponent), [apiKey]);
  return React.createElement(Component, rest);
}
PresenceMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  markers: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    }).isRequired,
    icon: PropTypes.shape({
      path: PropTypes.string.isRequired,
      fillColor: PropTypes.string,
      fillOpacity: PropTypes.number,
      scale: PropTypes.number,
      strokeColor: PropTypes.string,
      strokeOpacity: PropTypes.number,
      strokeWeight: PropTypes.number,
      rotation: PropTypes.number
    })
  })),
  className: PropTypes.string,
  style: PropTypes.object,
  zoom: PropTypes.number,
  center: PropTypes.oneOfType([PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }), PropTypes.oneOf(['auto'])]),
  showTraffic: PropTypes.bool,
  showTransit: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['roadmap', 'satellite', 'hybrid', 'terrain']),
  onMarkerClick: PropTypes.func
};
PresenceMap.defaultProps = {
  markers: [],
  zoom: 2,
  className: undefined,
  style: undefined,
  center: 'auto',
  showTraffic: false,
  showTransit: false,
  children: null,
  type: 'roadmap',
  onMarkerClick: function onMarkerClick() {}
};