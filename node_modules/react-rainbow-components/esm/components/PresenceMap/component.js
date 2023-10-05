import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import StyledControls from './styled/controls';
import getMapContainerStyles from './getMapContainerStyles';
var MAX_ZOOM = 15;
export default function MapComponent(props) {
  var showTraffic = props.showTraffic,
      showTransit = props.showTransit,
      center = props.center,
      zoom = props.zoom,
      markers = props.markers,
      style = props.style,
      className = props.className,
      children = props.children,
      type = props.type,
      isScriptLoaded = props.isScriptLoaded,
      isScriptLoadSucceed = props.isScriptLoadSucceed,
      onMarkerClick = props.onMarkerClick;
  var container = useRef();
  var mapContainer = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      map = _useState2[0],
      setMap = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      mapMarkers = _useState4[0],
      updateMapMarkers = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      trafficLayer = _useState6[0],
      setTrafficLayer = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      transitLayer = _useState8[0],
      setTransitLayer = _useState8[1];

  useEffect(function () {
    if (isScriptLoaded && isScriptLoadSucceed) {
      var mapOptions = {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0
        },
        disableDefaultUI: true
      };
      var mapInstance = new window.google.maps.Map(mapContainer.current, mapOptions);
      var trafficInstance = new window.google.maps.TrafficLayer();
      var transitInstance = new window.google.maps.TransitLayer();
      setMap(mapInstance);
      setTrafficLayer(trafficInstance);
      setTransitLayer(transitInstance);
    }
  }, [isScriptLoaded, isScriptLoadSucceed]);

  var handleMarkerClick = function handleMarkerClick(marker, index) {
    onMarkerClick(marker, index);
  };

  useEffect(function () {
    if (map) {
      mapMarkers.forEach(function (marker) {
        return marker.setMap(null);
      });

      if (Array.isArray(markers)) {
        var instances = markers.map(function (marker, index) {
          var instance = new window.google.maps.Marker({
            position: marker.position,
            icon: marker.icon,
            map: map,
            zIndex: Math.round(marker.position.lat * 100000)
          });
          instance.addListener('click', function () {
            return handleMarkerClick(marker, index);
          });
          return instance;
        });
        updateMapMarkers(instances);
      } else {
        updateMapMarkers([]);
      }
    }
  }, [markers, map]);
  useEffect(function () {
    if (map) {
      trafficLayer.setMap(showTraffic ? map : null);
    }
  }, [showTraffic, map, trafficLayer]);
  useEffect(function () {
    if (map) {
      transitLayer.setMap(showTransit ? map : null);
    }
  }, [showTransit, map]);
  useEffect(function () {
    if (map) {
      var hasNewMarkers = mapMarkers.length > 0;

      if (center === 'auto') {
        if (hasNewMarkers) {
          var bounds = new window.google.maps.LatLngBounds();
          mapMarkers.forEach(function (markerInstance) {
            return bounds.extend(markerInstance.getPosition());
          });
          map.setCenter(bounds.getCenter());

          if (mapMarkers.length > 1) {
            map.fitBounds(bounds);
          } else {
            map.setZoom(MAX_ZOOM);
          }
        }
      } else {
        map.setCenter(center);
        map.setZoom(MAX_ZOOM);
      }
    }
  }, [center, map, mapMarkers]);
  useEffect(function () {
    if (map) {
      map.setZoom(Math.min(zoom, MAX_ZOOM));
    }
  }, [zoom, map]);
  useEffect(function () {
    if (map) {
      map.setMapTypeId(type);
    }
  }, [type, map]);
  return React.createElement(StyledContainer, {
    style: style,
    className: className,
    ref: container
  }, React.createElement("div", {
    ref: mapContainer,
    style: getMapContainerStyles(container.current)
  }), React.createElement(StyledControls, null, children));
}
MapComponent.propTypes = {
  isScriptLoaded: PropTypes.bool.isRequired,
  isScriptLoadSucceed: PropTypes.bool.isRequired,
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
MapComponent.defaultProps = {
  markers: [],
  className: undefined,
  style: undefined,
  zoom: 2,
  center: 'auto',
  showTraffic: false,
  showTransit: false,
  children: null,
  type: 'roadmap',
  onMarkerClick: function onMarkerClick() {}
};