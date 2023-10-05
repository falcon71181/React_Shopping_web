"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _component = _interopRequireDefault(require("../component"));

var _MapMarker = _interopRequireDefault(require("../../MapMarker"));

var _button = _interopRequireDefault(require("../../MapMarker/styled/button"));

global.google = {
  maps: {
    Map: jest.fn(function () {
      return {
        panTo: jest.fn()
      };
    }),
    Geocoder: jest.fn(function () {
      return {
        geocode: jest.fn()
      };
    }),
    Marker: jest.fn(function () {
      return {
        addListener: jest.fn(),
        setAnimation: jest.fn()
      };
    })
  }
};
var nextProps = {
  isScriptLoaded: true,
  isScriptLoadSucceed: true
};
describe('<MapComponent/>', function () {
  it('should have the right class names', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      className: "some-class"
    }));
    expect(component.find('.rainbow-google-map.some-class').exists()).toBe(true);
  });
  it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      className: "some-class"
    }));
    component.setProps({
      isScriptLoaded: false,
      isScriptLoadSucceed: false
    });
    expect(global.google.maps.Map).not.toHaveBeenCalled();
  });
  it('should not call google.maps.Map when isScriptLoaded is true and isScriptLoadSucceed is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      className: "some-class"
    }));
    component.setProps({
      isScriptLoaded: true,
      isScriptLoadSucceed: false
    });
    expect(global.google.maps.Map).not.toHaveBeenCalled();
  });
  it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      className: "some-class",
      isScriptLoaded: true
    }));
    component.setProps(nextProps);
    expect(global.google.maps.Map).not.toHaveBeenCalled();
  });
  it('should call google.maps.Map with the right data', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }));
    component.setProps(nextProps);
    expect(global.google.maps.Map).toHaveBeenCalledWith(expect.any(Node), {
      center: {
        lat: 8,
        lng: 12
      },
      zoom: 15,
      fullscreenControl: false
    });
  });
  it('should call google.maps.Geocoder', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }));
    component.setProps(nextProps);
    expect(global.google.maps.Geocoder).toHaveBeenCalled();
  });
  it('should set the right state after isScriptLoaded and isScriptLoadSucceed are set to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }));
    expect(component.state().map).toBeUndefined();
    expect(component.state().geocoder).toBeUndefined();
    component.setProps(nextProps);
    expect(component.state().map).toEqual(expect.any(Object));
    expect(component.state().geocoder).toEqual(expect.any(Object));
  });
  it('should set the right state when a marker button is clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }, _react["default"].createElement(_MapMarker["default"], {
      latitude: 9,
      longitude: 12
    }), _react["default"].createElement(_MapMarker["default"], {
      latitude: 10,
      longitude: 15
    }), _react["default"].createElement(_MapMarker["default"], {
      latitude: 8,
      longitude: 10
    })));
    component.setProps(nextProps);
    component.find(_button["default"]).at(1).simulate('click');
    expect(component.state().selectedMarker).toBe('marker-2');
  });
  it('should call map.panTo with the right data when a marker button is clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }, _react["default"].createElement(_MapMarker["default"], {
      latitude: 9,
      longitude: 12
    }), _react["default"].createElement(_MapMarker["default"], {
      latitude: 10,
      longitude: 15
    }), _react["default"].createElement(_MapMarker["default"], {
      latitude: 8,
      longitude: 10
    })));
    component.setProps(nextProps);
    component.find(_button["default"]).at(1).simulate('click');
    expect(component.state().map.panTo).toHaveBeenCalledWith({
      lat: 10,
      lng: 15
    });
  });
  it('should render right amount of children', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }, _react["default"].createElement(_MapMarker["default"], {
      latitude: 9,
      longitude: 12
    }), _react["default"].createElement(_MapMarker["default"], {
      latitude: 8,
      longitude: 10
    })));
    expect(component.find('ul').children().length).toBe(2);
  });
});