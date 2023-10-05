import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import Header from './header';
import { Provider } from './context';
import getMapContainerStyles from './getMapContainerStyles';
import StyledContainer from './styled/container';
import StyledMapContainer from './styled/mapContainer';
import StyledCoordinatesContainer from './styled/coordinatesContainer';
var currentInfoWindow = Symbol('currentInfoWindow');

var MapComponent = function (_Component) {
  _inherits(MapComponent, _Component);

  var _super = _createSuper(MapComponent);

  function MapComponent(props) {
    var _this;

    _classCallCheck(this, MapComponent);

    _this = _super.call(this, props);
    _this.container = React.createRef();
    _this.mapContainer = React.createRef();
    _this.initMap = _this.initMap.bind(_assertThisInitialized(_this));
    _this.selectMarker = _this.selectMarker.bind(_assertThisInitialized(_this));
    _this.toggleInfoWindow = _this.toggleInfoWindow.bind(_assertThisInitialized(_this));
    _this[currentInfoWindow] = null;
    _this.state = {
      privateOnClick: _this.selectMarker,
      privateMarkerClick: _this.toggleInfoWindow
    };
    return _this;
  }

  _createClass(MapComponent, [{
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
      return React.createElement(StyledContainer, {
        className: this.getContainerClassNames(),
        style: style,
        ref: this.container
      }, React.createElement(StyledMapContainer, {
        className: "rainbow-google-map_map-container",
        ref: this.mapContainer,
        style: getMapContainerStyles(this.container.current)
      }), React.createElement(StyledCoordinatesContainer, null, React.createElement(RenderIf, {
        isTrue: header
      }, React.createElement(Header, {
        text: header
      })), React.createElement("ul", null, React.createElement(Provider, {
        value: this.state
      }, children))));
    }
  }]);

  return MapComponent;
}(Component);

export { MapComponent as default };
MapComponent.propTypes = {
  isScriptLoaded: PropTypes.bool.isRequired,
  isScriptLoadSucceed: PropTypes.bool.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.object
};
MapComponent.defaultProps = {
  header: undefined,
  children: null,
  className: undefined,
  style: undefined
};