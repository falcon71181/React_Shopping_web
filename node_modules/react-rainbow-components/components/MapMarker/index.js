"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapMarker;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../GMap/context");

var _utils = require("../../libs/utils");

var _icon = _interopRequireDefault(require("./icon"));

var _hiddenElement = _interopRequireDefault(require("../Structural/hiddenElement"));

var _button = _interopRequireDefault(require("./styled/button"));

var _textContainer = _interopRequireDefault(require("./styled/textContainer"));

var _label = _interopRequireDefault(require("./styled/label"));

var _li = _interopRequireDefault(require("./styled/li"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var marker = Symbol('marker');

var Marker = function (_Component) {
  (0, _inherits2["default"])(Marker, _Component);

  var _super = _createSuper(Marker);

  function Marker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Marker);
    _this = _super.call(this, props);
    _this.getLocationInfo = _this.getLocationInfo.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMarkerClick = _this.handleMarkerClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startAnimation = _this.startAnimation.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stopAnimation = _this.stopAnimation.bind((0, _assertThisInitialized2["default"])(_this));
    _this.name = (0, _utils.uniqueId)('marker');
    var label = props.label,
        description = props.description;
    _this.state = {
      label: label,
      description: description
    };
    return _this;
  }

  (0, _createClass2["default"])(Marker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var map = this.props.map;

      if (map) {
        this.setMarker();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          map = _this$props.map,
          latitude = _this$props.latitude,
          longitude = _this$props.longitude;

      if (!this[marker] && map && latitude && longitude) {
        this.setMarker();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.google.maps.event.removeListener(this.markerListener);
    }
  }, {
    key: "setMarker",
    value: function setMarker() {
      var _this$props2 = this.props,
          map = _this$props2.map,
          latitude = _this$props2.latitude,
          longitude = _this$props2.longitude,
          geocoder = _this$props2.geocoder,
          label = _this$props2.label,
          description = _this$props2.description;
      var infowindow = this.state.infowindow;
      var position = {
        lat: latitude,
        lng: longitude
      };
      this[marker] = new window.google.maps.Marker({
        position: position,
        map: map
      });
      this.markerListener = this[marker].addListener('click', this.handleMarkerClick);

      if (!label && !description) {
        geocoder.geocode({
          location: position
        }, this.getLocationInfo);
      } else if (!infowindow) {
        this.setInfoWindow();
      }
    }
  }, {
    key: "getLocationInfo",
    value: function getLocationInfo(results, status) {
      if (status === 'OK' && results[0]) {
        var geoLabel = results[0].address_components[0].long_name;
        var geoDescription = results[0].formatted_address;
        var infowindow = new window.google.maps.InfoWindow({
          content: geoDescription
        });
        this.setState({
          label: geoLabel,
          description: geoDescription,
          infowindow: infowindow
        });
      }
    }
  }, {
    key: "setInfoWindow",
    value: function setInfoWindow() {
      var _this$props3 = this.props,
          description = _this$props3.description,
          label = _this$props3.label;
      this.setState({
        infowindow: new window.google.maps.InfoWindow({
          content: description || label
        })
      });
    }
  }, {
    key: "getAssistiveAriaLiveText",
    value: function getAssistiveAriaLiveText() {
      var label = this.state.label;

      if (this.isSelected()) {
        return "".concat(label, " is currently selected");
      }

      return undefined;
    }
  }, {
    key: "handleMarkerClick",
    value: function handleMarkerClick() {
      var privateMarkerClick = this.props.privateMarkerClick;
      var infowindow = this.state.infowindow;

      if (this[marker]) {
        privateMarkerClick(infowindow, this[marker]);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props4 = this.props,
          privateOnClick = _this$props4.privateOnClick,
          latitude = _this$props4.latitude,
          longitude = _this$props4.longitude;
      var position = {
        lat: latitude,
        lng: longitude
      };

      if (this[marker]) {
        this[marker].setAnimation(null);
        privateOnClick(this.name, position);
      }
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      if (this[marker]) {
        this[marker].setAnimation(window.google.maps.Animation.BOUNCE);
      }
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      if (this[marker]) {
        this[marker].setAnimation(null);
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      var selectedMarker = this.props.selectedMarker;
      return this.name === selectedMarker;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          className = _this$props5.className,
          style = _this$props5.style,
          latitude = _this$props5.latitude,
          longitude = _this$props5.longitude,
          icon = _this$props5.icon;
      var _this$state = this.state,
          label = _this$state.label,
          description = _this$state.description;

      if (latitude && longitude) {
        return _react["default"].createElement(_li["default"], {
          className: className,
          style: style
        }, _react["default"].createElement(_hiddenElement["default"], {
          "aria-live": "polite"
        }, this.getAssistiveAriaLiveText()), _react["default"].createElement(_button["default"], {
          "aria-pressed": this.isSelected(),
          onClick: this.handleClick,
          onMouseOver: this.startAnimation,
          onFocus: this.startAnimation,
          onMouseLeave: this.stopAnimation,
          onBlur: this.stopAnimation
        }, _react["default"].createElement(_icon["default"], {
          icon: icon
        }), _react["default"].createElement(_textContainer["default"], null, _react["default"].createElement(_label["default"], null, label), _react["default"].createElement("span", null, description))));
      }

      return null;
    }
  }]);
  return Marker;
}(_react.Component);

function MapMarker(props) {
  return _react["default"].createElement(_context.Consumer, null, function (context) {
    return _react["default"].createElement(Marker, (0, _extends2["default"])({}, props, context));
  });
}

MapMarker.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  latitude: _propTypes["default"].number,
  longitude: _propTypes["default"].number,
  icon: _propTypes["default"].node,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
MapMarker.defaultProps = {
  label: undefined,
  description: undefined,
  latitude: undefined,
  longitude: undefined,
  icon: null,
  className: undefined,
  style: undefined
};