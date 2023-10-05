import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import React from 'react';
import { mount } from 'enzyme';
import { Component as PlacesLookupComponent } from '../component';

var setupGoogleMapsMock = function setupGoogleMapsMock() {
  var google = {
    maps: {
      places: {
        AutocompleteService: _createClass(function AutocompleteService() {
          _classCallCheck(this, AutocompleteService);
        }),
        PlacesService: _createClass(function PlacesService() {
          _classCallCheck(this, PlacesService);
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
    var component = mount(React.createElement(PlacesLookupComponent, null));
    component.setProps({
      isScriptLoaded: false,
      isScriptLoadSucceed: false
    });
    expect(component.instance().autocompleteService).toBe(undefined);
    expect(component.instance().placesService).toBe(undefined);
  });
  it('should not call any google.maps.places service when isScriptLoaded is true and isScriptLoadSucceed is false', function () {
    var component = mount(React.createElement(PlacesLookupComponent, null));
    component.setProps({
      isScriptLoaded: true,
      isScriptLoadSucceed: false
    });
    expect(component.instance().autocompleteService).toBe(undefined);
    expect(component.instance().placesService).toBe(undefined);
  });
  it('should not call AutocompleteService or PlacesService when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', function () {
    var component = mount(React.createElement(PlacesLookupComponent, {
      isScriptLoaded: true
    }));
    component.setProps(nextProps);
    expect(component.instance().autocompleteService).toBe(undefined);
    expect(component.instance().placesService).toBe(undefined);
  });
  it('should call google.maps.places.AutocompleteService and google.maps.places.PlacesService', function () {
    var component = mount(React.createElement(PlacesLookupComponent, null));
    component.setProps(nextProps);
    expect(component.instance().autocompleteService).toBeInstanceOf(global.google.maps.places.AutocompleteService);
    expect(component.instance().placesService).toBeInstanceOf(global.google.maps.places.PlacesService);
  });
  it('should be intialized after isScriptLoaded and isScriptLoadSucceed are set to true', function () {
    var component = mount(React.createElement(PlacesLookupComponent, null));
    expect(component.instance().initialized).toBe(false);
    component.setProps(nextProps);
    expect(component.instance().initialized).toBe(true);
  });
  it('should fire onBlur with null when there is not value', function () {
    var onBlurMockFn = jest.fn();
    var component = mount(React.createElement(PlacesLookupComponent, {
      onBlur: onBlurMockFn
    }));
    component.setProps(nextProps);
    component.find('input').simulate('focus');
    component.find('input').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith(null);
  });
});