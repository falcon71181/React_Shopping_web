"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _header = _interopRequireDefault(require("./header"));

var _context = require("./context");

var _getMapContainerStyles = _interopRequireDefault(require("./getMapContainerStyles"));

var _container = _interopRequireDefault(require("./styled/container"));

var _mapContainer = _interopRequireDefault(require("./styled/mapContainer"));

var _coordinatesContainer = _interopRequireDefault(require("./styled/coordinatesContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var currentInfoWindow = Symbol('currentInfoWindow');

var MapComponent = function (_Component) {
  (0, _inherits2["default"])(MapComponent, _Component);

  var _super = _createSuper(MapComponent);

  function MapComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MapComponent);
    _this = _super.call(this, props);
    _this.container = _react["default"].createRef();
    _this.mapContainer = _react["default"].createRef();
    _this.initMap = _this.initMap.bind((0, _assertThisInitialized2["default"])(_this));
    _this.selectMarker = _this.selectMarker.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleInfoWindow = _this.toggleInfoWindow.bind((0, _assertThisInitialized2["default"])(_this));
    _this[currentInfoWindow] = null;
    _this.state = {
      privateOnClick: _this.selectMarker,
      privateMarkerClick: _this.toggleInfoWindow
    };
    return _this;
  }

  (0, _createClass2["default"])(MapComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevIsScriptLoaded = _ref.isScriptLoaded;
      var _this$props = this.props,
          isScriptLoaded = _this$props.isScriptLoaded,
          isScriptLoadSucceed = _this$props.isScriptLoadSucceed;

      if (!prevIsScriptLoaded && isScriptLoaded && isScriptLoadSucceed) {
        this.initMap();
      }
    }
  }, {
    key: "getContainerClassNames",
    value: function getContainerClassNames() {
      var className = this.props.className;

      if (className && typeof className === 'string') {
        return "rainbow-google-map ".concat(className);
      }

      return 'rainbow-google-map';
    }
  }, {
    key: "initMap",
    value: function initMap() {
      var _this$props2 = this.props,
          zoom = _this$props2.zoom,
          latitude = _this$props2.latitude,
          longitude = _this$props2.longitude;
      var map = new window.google.maps.Map(this.mapContainer.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom,
        fullscreenControl: false
      });
      var geocoder = new window.google.maps.Geocoder();
      this.setState({
        map: map,
        geocoder: geocoder
      });
    }
  }, {
    key: "selectMarker",
    value: function selectMarker(name, position) {
      var map = this.state.map;
      this.setState({
        selectedMarker: name
      });
      map.panTo(position);
    }
  }, {
    key: "toggleInfoWindow",
    value: function toggleInfoWindow(infowindow, marker) {
      var map = this.state.map;

      if (this[currentInfoWindow] === null) {
        this[currentInfoWindow] = infowindow;
        return infowindow.open(map, marker);
      }

      if (this[currentInfoWindow] && this[currentInfoWindow].content !== infowindow.content) {
        this[currentInfoWindow].close(map, marker);
        this[currentInfoWindow] = infowindow;
        return infowindow.open(map, marker);
      }

      this[currentInfoWindow].close(map, marker);
      this[currentInfoWindow] = null;
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          header = _this$props3.header,
          children = _this$props3.children,
          style = _this$props3.style;
      return _react["default"].createElement(_container["default"], {
        className: this.getContainerClassNames(),
        style: style,
        ref: this.container
      }, _react["default"].createElement(_mapContainer["default"], {
        className: "rainbow-google-map_map-container",
        ref: this.mapContainer,
        style: (0, _getMapContainerStyles["default"])(this.container.current)
      }), _react["default"].createElement(_coordinatesContainer["default"], null, _react["default"].createElement(_RenderIf["default"], {
        isTrue: header
      }, _react["default"].createElement(_header["default"], {
        text: header
      })), _react["default"].createElement("ul", null, _react["default"].createElement(_context.Provider, {
        value: this.state
      }, children))));
    }
  }]);
  return MapComponent;
}(_react.Component);

exports["default"] = MapComponent;
MapComponent.propTypes = {
  isScriptLoaded: _propTypes["default"].bool.isRequired,
  isScriptLoadSucceed: _propTypes["default"].bool.isRequired,
  latitude: _propTypes["default"].number.isRequired,
  longitude: _propTypes["default"].number.isRequired,
  zoom: _propTypes["default"].number.isRequired,
  header: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
MapComponent.defaultProps = {
  header: undefined,
  children: null,
  className: undefined,
  style: undefined
};