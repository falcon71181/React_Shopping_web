"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _button = _interopRequireDefault(require("../styled/button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var marker = {
  addListener: jest.fn(),
  setAnimation: jest.fn()
};
global.google = {
  maps: {
    Marker: jest.fn(function () {
      return marker;
    }),
    event: {
      removeListener: jest.fn()
    },
    Animation: {
      BOUNCE: 'bounce animation'
    },
    InfoWindow: jest.fn()
  }
};
var newContext = {
  map: 'my map',
  geocoder: {
    geocode: jest.fn()
  }
};
describe('<MapMarker/>', function () {
  it('should set aria-pressed to true in marker button when it is selected', function () {
    marker.setAnimation.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10,
      selectedMarker: "marker-1"
    }));
    expect(component.find(_button["default"]).prop('aria-pressed')).toBe(true);
  });
  it('should not retrun anything when latitude and longitude are not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.find('li').exists()).toBe(false);
  });
  it('should render the marker when latitude and longitude are passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    expect(component.find('li').exists()).toBe(true);
  });
  it('should not call google.maps.Marker when latitude is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      longitude: 10
    }));
    component.setProps(newContext);
    expect(global.google.maps.Marker).not.toHaveBeenCalled();
  });
  it('should not call google.maps.Marker when longitude is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 10
    }));
    component.setProps(newContext);
    expect(global.google.maps.Marker).not.toHaveBeenCalled();
  });
  it('should call google.maps.Marker with the right data', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    expect(global.google.maps.Marker).toHaveBeenCalledWith({
      position: {
        lat: 5,
        lng: 10
      },
      map: 'my map'
    });
  });
  it('should call addListener on marker with the right data', function () {
    marker.addListener.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    expect(marker.addListener).toHaveBeenCalledWith('click', expect.any(Function));
  });
  it('should call geocoder.geocode with the right data when label and description are not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    expect(newContext.geocoder.geocode).toHaveBeenCalledWith({
      location: {
        lat: 5,
        lng: 10
      }
    }, expect.any(Function));
  });
  it('should not call geocoder.geocode when label is passed', function () {
    newContext.geocoder.geocode.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10,
      label: "my label"
    }));
    component.setProps(newContext);
    expect(newContext.geocoder.geocode).not.toHaveBeenCalled();
  });
  it('should not call geocoder.geocode when description is passed', function () {
    newContext.geocoder.geocode.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10,
      description: "my description"
    }));
    component.setProps(newContext);
    expect(newContext.geocoder.geocode).not.toHaveBeenCalled();
  });
  it('should call global.google.maps.InfoWindow with the description is passed', function () {
    global.google.maps.InfoWindow.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10,
      description: "my description"
    }));
    component.setProps(newContext);
    expect(global.google.maps.InfoWindow).toHaveBeenCalledWith({
      content: 'my description'
    });
  });
  it('should call global.google.maps.InfoWindow with the label is passed', function () {
    global.google.maps.InfoWindow.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10,
      label: "my label"
    }));
    component.setProps(newContext);
    expect(global.google.maps.InfoWindow).toHaveBeenCalledWith({
      content: 'my label'
    });
  });
  it('should call google.maps.event.removeListener when unmount the component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    component.unmount();
    expect(global.google.maps.event.removeListener).toHaveBeenCalled();
  });
  it('should call setAnimation on marker with null when the marker button is clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));

    var context = _objectSpread(_objectSpread({}, newContext), {}, {
      privateOnClick: jest.fn()
    });

    component.setProps(context);
    component.find(_button["default"]).simulate('click');
    expect(marker.setAnimation).toHaveBeenCalledWith(null);
  });
  it('should call setAnimation on marker with the bounce animation when mouseover event occurs on marker button', function () {
    marker.setAnimation.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    component.find(_button["default"]).simulate('mouseover');
    expect(marker.setAnimation).toHaveBeenCalledWith(global.google.maps.Animation.BOUNCE);
  });
  it('should call setAnimation on marker with the bounce animation when the marker button is focused', function () {
    marker.setAnimation.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    component.find(_button["default"]).simulate('focus');
    expect(marker.setAnimation).toHaveBeenCalledWith(global.google.maps.Animation.BOUNCE);
  });
  it('should call setAnimation on marker with null when mouseleave event occurs on marker button', function () {
    marker.setAnimation.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    component.find(_button["default"]).simulate('mouseleave');
    expect(marker.setAnimation).toHaveBeenCalledWith(null);
  });
  it('should call setAnimation on marker with null when the marker button is blurred', function () {
    marker.setAnimation.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    component.setProps(newContext);
    component.find(_button["default"]).simulate('blur');
    expect(marker.setAnimation).toHaveBeenCalledWith(null);
  });
  it('should set aria-pressed to false in marker button when it is not selected', function () {
    marker.setAnimation.mockReset();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      latitude: 5,
      longitude: 10
    }));
    expect(component.find(_button["default"]).prop('aria-pressed')).toBe(false);
  });
});