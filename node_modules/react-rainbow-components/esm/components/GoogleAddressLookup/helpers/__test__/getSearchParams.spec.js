import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import getSearchParams from '../getSearchParams';

var setupGoogleMapsMock = function setupGoogleMapsMock() {
  var google = {
    maps: {
      LatLng: _createClass(function LatLng(lat, lng) {
        _classCallCheck(this, LatLng);

        return {
          lat: lat,
          lng: lng
        };
      }),
      LatLngBounds: _createClass(function LatLngBounds(se, ne) {
        _classCallCheck(this, LatLngBounds);

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
    expect(getSearchParams(searchOptions)).toEqual({
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
    expect(getSearchParams(searchOptions)).toEqual({
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
    expect(getSearchParams(searchOptions)).toEqual({
      componentRestrictions: {
        country: ['us', 'ca']
      }
    });
  });
});