"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _getSearchParams = _interopRequireDefault(require("../getSearchParams"));

var setupGoogleMapsMock = function setupGoogleMapsMock() {
  var google = {
    maps: {
      LatLng: (0, _createClass2["default"])(function LatLng(lat, lng) {
        (0, _classCallCheck2["default"])(this, LatLng);
        return {
          lat: lat,
          lng: lng
        };
      }),
      LatLngBounds: (0, _createClass2["default"])(function LatLngBounds(se, ne) {
        (0, _classCallCheck2["default"])(this, LatLngBounds);
        return {
          se: se,
          ne: ne
        };
      })
    }
  };
  global.window.google = google;
};

beforeAll(function () {
  setupGoogleMapsMock();
});
describe('getSearchParams', function () {
  it('should convert searchOptions (with bounds and types) into google.maps.places.AutocompleteRequest search options', function () {
    var searchOptions = {
      bounds: {
        sw: {
          latitude: -63.941264,
          longitude: 151.2042969
        },
        ne: {
          latitude: 63.941264,
          longitude: -151.2042969
        }
      },
      types: ['address']
    };
    expect((0, _getSearchParams["default"])(searchOptions)).toEqual({
      bounds: {
        se: {
          lat: -63.941264,
          lng: 151.2042969
        },
        ne: {
          lat: 63.941264,
          lng: -151.2042969
        }
      },
      types: ['address']
    });
  });
  it('should convert searchOptions (with location, radiusn types and country) into google.maps.places.AutocompleteRequest search options', function () {
    var searchOptions = {
      location: {
        latitude: -33.941264,
        longitude: 151.2042969
      },
      country: 'us',
      radius: 150000,
      types: ['address']
    };
    expect((0, _getSearchParams["default"])(searchOptions)).toEqual({
      location: {
        lat: -33.941264,
        lng: 151.2042969
      },
      componentRestrictions: {
        country: 'us'
      },
      radius: 150000,
      types: ['address']
    });
  });
  it('should convert searchOptions (several countries) into google.maps.places.AutocompleteRequest search options', function () {
    var searchOptions = {
      country: ['us', 'ca']
    };
    expect((0, _getSearchParams["default"])(searchOptions)).toEqual({
      componentRestrictions: {
        country: ['us', 'ca']
      }
    });
  });
});