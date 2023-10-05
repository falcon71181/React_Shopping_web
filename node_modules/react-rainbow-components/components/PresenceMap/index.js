"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PresenceMap;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAsyncScriptLoader = _interopRequireDefault(require("react-async-script-loader"));

var _component = _interopRequireDefault(require("./component"));

var _excluded = ["apiKey"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var googleMapApiUrl = 'https://maps.googleapis.com/maps/api/js';

function PresenceMap(props) {
  var apiKey = props.apiKey,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var Component = (0, _react.useCallback)((0, _reactAsyncScriptLoader["default"])("".concat(googleMapApiUrl, "?key=").concat(apiKey))(_component["default"]), [apiKey]);
  return _react["default"].createElement(Component, rest);
}

PresenceMap.propTypes = {
  apiKey: _propTypes["default"].string.isRequired,
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