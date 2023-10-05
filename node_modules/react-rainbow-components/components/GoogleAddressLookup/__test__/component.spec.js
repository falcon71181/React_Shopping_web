"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _component = require("../component");

var setupGoogleMapsMock = function setupGoogleMapsMock() {
  var google = {
    maps: {
      places: {
        AutocompleteService: (0, _createClass2["default"])(function AutocompleteService() {
          (0, _classCallCheck2["default"])(this, AutocompleteService);
        }),
        PlacesService: (0, _createClass2["default"])(function PlacesService() {
          (0, _classCallCheck2["default"])(this, PlacesService);
        })
      }
    }
  };
  global.window.google = google;
};

var nextProps = {
  isScriptLoaded: true,
  isScriptLoadSucceed: true
};
beforeAll(function () {
  setupGoogleMapsMock();
});
describe('<PlacesLookupComponent/>', function () {
  it('should not call any google.maps.places service when isScriptLoaded and isScriptLoadSucceed are false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component.Component, null));
    component.setProps({
      isScriptLoaded: false,
      isScriptLoadSucceed: false
    });
    expect(component.instance().autocompleteService).toBe(undefined);
    expect(component.instance().placesService).toBe(undefined);
  });
  it('should not call any google.maps.places service when isScriptLoaded is true and isScriptLoadSucceed is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component.Component, null));
    component.setProps({
      isScriptLoaded: true,
      isScriptLoadSucceed: false
    });
    expect(component.instance().autocompleteService).toBe(undefined);
    expect(component.instance().placesService).toBe(undefined);
  });
  it('should not call AutocompleteService or PlacesService when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component.Component, {
      isScriptLoaded: true
    }));
    component.setProps(nextProps);
    expect(component.instance().autocompleteService).toBe(undefined);
    expect(component.instance().placesService).toBe(undefined);
  });
  it('should call google.maps.places.AutocompleteService and google.maps.places.PlacesService', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component.Component, null));
    component.setProps(nextProps);
    expect(component.instance().autocompleteService).toBeInstanceOf(global.google.maps.places.AutocompleteService);
    expect(component.instance().placesService).toBeInstanceOf(global.google.maps.places.PlacesService);
  });
  it('should be intialized after isScriptLoaded and isScriptLoadSucceed are set to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component.Component, null));
    expect(component.instance().initialized).toBe(false);
    component.setProps(nextProps);
    expect(component.instance().initialized).toBe(true);
  });
  it('should fire onBlur with null when there is not value', function () {
    var onBlurMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component.Component, {
      onBlur: onBlurMockFn
    }));
    component.setProps(nextProps);
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(null);
  });
});