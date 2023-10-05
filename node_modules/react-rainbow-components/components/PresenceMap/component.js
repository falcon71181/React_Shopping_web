"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapComponent;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = _interopRequireDefault(require("./styled/container"));

var _controls = _interopRequireDefault(require("./styled/controls"));

var _getMapContainerStyles = _interopRequireDefault(require("./getMapContainerStyles"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MAX_ZOOM = 15;

function MapComponent(props) {
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
  var container = (0, _react.useRef)();
  var mapContainer = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      map = _useState2[0],
      setMap = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      mapMarkers = _useState4[0],
      updateMapMarkers = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      trafficLayer = _useState6[0],
      setTrafficLayer = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      transitLayer = _useState8[0],
      setTransitLayer = _useState8[1];

  (0, _react.useEffect)(function () {
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

  (0, _react.useEffect)(function () {
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
  (0, _react.useEffect)(function () {
    if (map) {
      trafficLayer.setMap(showTraffic ? map : null);
    }
  }, [showTraffic, map, trafficLayer]);
  (0, _react.useEffect)(function () {
    if (map) {
      transitLayer.setMap(showTransit ? map : null);
    }
  }, [showTransit, map]);
  (0, _react.useEffect)(function () {
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
  (0, _react.useEffect)(function () {
    if (map) {
      map.setZoom(Math.min(zoom, MAX_ZOOM));
    }
  }, [zoom, map]);
  (0, _react.useEffect)(function () {
    if (map) {
      map.setMapTypeId(type);
    }
  }, [type, map]);
  return _react["default"].createElement(_container["default"], {
    style: style,
    className: className,
    ref: container
  }, _react["default"].createElement("div", {
    ref: mapContainer,
    style: (0, _getMapContainerStyles["default"])(container.current)
  }), _react["default"].createElement(_controls["default"], null, children));
}

MapComponent.propTypes = {
  isScriptLoaded: _propTypes["default"].bool.isRequired,
  isScriptLoadSucceed: _propTypes["default"].bool.isRequired,
  markers: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    position: _propTypes["default"].shape({
      lat: _propTypes["default"].number,
      lng: _propTypes["default"].number
    }).isRequired,
    icon: _propTypes["default"].shape({
      path: _propTypes["default"].string.isRequired,
      fillColor: _propTypes["default"].string,
      fillOpacity: _propTypes["default"].number,
      scale: _propTypes["default"].number,
      strokeColor: _propTypes["default"].string,
      strokeOpacity: _propTypes["default"].number,
      strokeWeight: _propTypes["default"].number,
      rotation: _propTypes["default"].number
    })
  })),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  zoom: _propTypes["default"].number,
  center: _propTypes["default"].oneOfType([_propTypes["default"].shape({
    lat: _propTypes["default"].number,
    lng: _propTypes["default"].number
  }), _propTypes["default"].oneOf(['auto'])]),
  showTraffic: _propTypes["default"].bool,
  showTransit: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  type: _propTypes["default"].oneOf(['roadmap', 'satellite', 'hybrid', 'terrain']),
  onMarkerClick: _propTypes["default"].func
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