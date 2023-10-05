import _extends from "@babel/runtime/helpers/extends";
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
import { Consumer } from '../GMap/context';
import { uniqueId } from '../../libs/utils';
import Icon from './icon';
import HiddenElement from '../Structural/hiddenElement';
import StyledButton from './styled/button';
import StyledTextContainer from './styled/textContainer';
import StyledLabel from './styled/label';
import StyledLi from './styled/li';
var marker = Symbol('marker');

var Marker = function (_Component) {
  _inherits(Marker, _Component);

  var _super = _createSuper(Marker);

  function Marker(props) {
    var _this;

    _classCallCheck(this, Marker);

    _this = _super.call(this, props);
    _this.getLocationInfo = _this.getLocationInfo.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleMarkerClick = _this.handleMarkerClick.bind(_assertThisInitialized(_this));
    _this.startAnimation = _this.startAnimation.bind(_assertThisInitialized(_this));
    _this.stopAnimation = _this.stopAnimation.bind(_assertThisInitialized(_this));
    _this.name = uniqueId('marker');
    var label = props.label,
        description = props.description;
    _this.state = {
      label: label,
      description: description
    };
    return _this;
  }

  _createClass(Marker, [{
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
        return React.createElement(StyledLi, {
          className: className,
          style: style
        }, React.createElement(HiddenElement, {
          "aria-live": "polite"
        }, this.getAssistiveAriaLiveText()), React.createElement(StyledButton, {
          "aria-pressed": this.isSelected(),
          onClick: this.handleClick,
          onMouseOver: this.startAnimation,
          onFocus: this.startAnimation,
          onMouseLeave: this.stopAnimation,
          onBlur: this.stopAnimation
        }, React.createElement(Icon, {
          icon: icon
        }), React.createElement(StyledTextContainer, null, React.createElement(StyledLabel, null, label), React.createElement("span", null, description))));
      }

      return null;
    }
  }]);

  return Marker;
}(Component);

export default function MapMarker(props) {
  return React.createElement(Consumer, null, function (context) {
    return React.createElement(Marker, _extends({}, props, context));
  });
}
MapMarker.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  icon: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
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