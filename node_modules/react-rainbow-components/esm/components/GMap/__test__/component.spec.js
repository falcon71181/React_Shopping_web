import React from 'react';
import { mount } from 'enzyme';
import MapComponent from '../component';
import MapMarker from '../../MapMarker';
import StyledMarkerButton from '../../MapMarker/styled/button';
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
    var component = mount(React.createElement(MapComponent, {
      className: "some-class"
    }));
    expect(component.find('.rainbow-google-map.some-class').exists()).toBe(true);
  });
  it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are false', function () {
    var component = mount(React.createElement(MapComponent, {
      className: "some-class"
    }));
    component.setProps({
      isScriptLoaded: false,
      isScriptLoadSucceed: false
    });
    expect(global.google.maps.Map).not.toHaveBeenCalled();
  });
  it('should not call google.maps.Map when isScriptLoaded is true and isScriptLoadSucceed is false', function () {
    var component = mount(React.createElement(MapComponent, {
      className: "some-class"
    }));
    component.setProps({
      isScriptLoaded: true,
      isScriptLoadSucceed: false
    });
    expect(global.google.maps.Map).not.toHaveBeenCalled();
  });
  it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', function () {
    var component = mount(React.createElement(MapComponent, {
      className: "some-class",
      isScriptLoaded: true
    }));
    component.setProps(nextProps);
    expect(global.google.maps.Map).not.toHaveBeenCalled();
  });
  it('should call google.maps.Map with the right data', function () {
    var component = mount(React.createElement(MapComponent, {
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
    var component = mount(React.createElement(MapComponent, {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }));
    component.setProps(nextProps);
    expect(global.google.maps.Geocoder).toHaveBeenCalled();
  });
  it('should set the right state after isScriptLoaded and isScriptLoadSucceed are set to true', function () {
    var component = mount(React.createElement(MapComponent, {
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
    var component = mount(React.createElement(MapComponent, {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }, React.createElement(MapMarker, {
      latitude: 9,
      longitude: 12
    }), React.createElement(MapMarker, {
      latitude: 10,
      longitude: 15
    }), React.createElement(MapMarker, {
      latitude: 8,
      longitude: 10
    })));
    component.setProps(nextProps);
    component.find(StyledMarkerButton).at(1).simulate('click');
    expect(component.state().selectedMarker).toBe('marker-2');
  });
  it('should call map.panTo with the right data when a marker button is clicked', function () {
    var component = mount(React.createElement(MapComponent, {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }, React.createElement(MapMarker, {
      latitude: 9,
      longitude: 12
    }), React.createElement(MapMarker, {
      latitude: 10,
      longitude: 15
    }), React.createElement(MapMarker, {
      latitude: 8,
      longitude: 10
    })));
    component.setProps(nextProps);
    component.find(StyledMarkerButton).at(1).simulate('click');
    expect(component.state().map.panTo).toHaveBeenCalledWith({
      lat: 10,
      lng: 15
    });
  });
  it('should render right amount of children', function () {
    var component = mount(React.createElement(MapComponent, {
      latitude: 8,
      longitude: 12,
      zoom: 15
    }, React.createElement(MapMarker, {
      latitude: 9,
      longitude: 12
    }), React.createElement(MapMarker, {
      latitude: 8,
      longitude: 10
    })));
    expect(component.find('ul').children().length).toBe(2);
  });
});