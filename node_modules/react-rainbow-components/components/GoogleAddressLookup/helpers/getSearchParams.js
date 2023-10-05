"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSearchParams;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _excluded = ["bounds", "country", "location"];

function getSearchParams(searchOptions) {
  var searchParams = {};

  if (searchOptions) {
    var bounds = searchOptions.bounds,
        country = searchOptions.country,
        location = searchOptions.location,
        otherSearchOptions = (0, _objectWithoutProperties2["default"])(searchOptions, _excluded);

    if (bounds) {
      var _bounds$sw = bounds.sw,
          swLatitude = _bounds$sw.latitude,
          swLongitude = _bounds$sw.longitude,
          _bounds$ne = bounds.ne,
          neLatitude = _bounds$ne.latitude,
          neLongitude = _bounds$ne.longitude;
      searchParams = Object.assign(searchParams, {
        bounds: new window.google.maps.LatLngBounds(new window.google.maps.LatLng(swLatitude, swLongitude), new window.google.maps.LatLng(neLatitude, neLongitude))
      });
    }

    if (location) {
      searchParams = Object.assign(searchParams, {
        location: new window.google.maps.LatLng(location.latitude, location.longitude)
      });
    }

    if (country) {
      searchParams = Object.assign(searchParams, {
        componentRestrictions: {
          country: country
        }
      });
    }

    searchParams = Object.assign(searchParams, otherSearchOptions);
  }

  return searchParams;
}