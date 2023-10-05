"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchOptionsShape = exports.predictionShape = exports.placeDetailsShape = exports.mapViewportCoordinates = exports.mapCoordinates = exports.aspectsRating = void 0;

var _propTypes = require("prop-types");

var aspectsRating = _propTypes.PropTypes.shape({
  rating: _propTypes.PropTypes.number,
  type: _propTypes.PropTypes.string
});

exports.aspectsRating = aspectsRating;

var mapCoordinates = _propTypes.PropTypes.shape({
  lat: _propTypes.PropTypes.number.isRequired,
  lng: _propTypes.PropTypes.number.isRequired
});

exports.mapCoordinates = mapCoordinates;

var mapViewportCoordinates = _propTypes.PropTypes.shape({
  south: _propTypes.PropTypes.number.isRequired,
  west: _propTypes.PropTypes.number.isRequired,
  north: _propTypes.PropTypes.number.isRequired,
  east: _propTypes.PropTypes.number.isRequired
});

exports.mapViewportCoordinates = mapViewportCoordinates;

var searchOptionsShape = _propTypes.PropTypes.shape({
  bounds: _propTypes.PropTypes.shape({
    sw: _propTypes.PropTypes.shape({
      latitude: _propTypes.PropTypes.number.isRequired,
      longitude: _propTypes.PropTypes.number.isRequired
    }),
    ne: _propTypes.PropTypes.shape({
      latitude: _propTypes.PropTypes.number.isRequired,
      longitude: _propTypes.PropTypes.number.isRequired
    })
  }),
  country: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string), _propTypes.PropTypes.string]),
  location: _propTypes.PropTypes.shape({
    latitude: _propTypes.PropTypes.number.isRequired,
    longitude: _propTypes.PropTypes.number.isRequired
  }),
  radius: _propTypes.PropTypes.number,
  types: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string)
});

exports.searchOptionsShape = searchOptionsShape;

var predictionShape = _propTypes.PropTypes.shape({
  description: _propTypes.PropTypes.string,
  matched_substrings: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
    length: _propTypes.PropTypes.number,
    offset: _propTypes.PropTypes.number
  })),
  place_id: _propTypes.PropTypes.string,
  structured_formatting: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
    main_text: _propTypes.PropTypes.string,
    main_text_matched_substrings: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
      length: _propTypes.PropTypes.number,
      offset: _propTypes.PropTypes.number
    })),
    secondary_text: _propTypes.PropTypes.string
  })),
  terms: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
    offset: _propTypes.PropTypes.number,
    value: _propTypes.PropTypes.string
  })),
  types: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string)
});

exports.predictionShape = predictionShape;

var placeDetailsShape = _propTypes.PropTypes.shape({
  address_components: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
    long_name: _propTypes.PropTypes.string,
    short_name: _propTypes.PropTypes.string,
    types: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string)
  })),
  aspects: _propTypes.PropTypes.arrayOf(aspectsRating),
  formatted_address: _propTypes.PropTypes.string,
  formatted_phone_number: _propTypes.PropTypes.string,
  geometry: _propTypes.PropTypes.shape({
    location: mapCoordinates,
    viewport: mapViewportCoordinates
  }),
  html_attributions: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
  icon: _propTypes.PropTypes.string,
  international_phone_number: _propTypes.PropTypes.string,
  name: _propTypes.PropTypes.string,
  permanently_closed: _propTypes.PropTypes.bool,
  photos: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
    height: _propTypes.PropTypes.number,
    width: _propTypes.PropTypes.number,
    html_attributions: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
    photo_reference: _propTypes.PropTypes.string
  })),
  place_id: _propTypes.PropTypes.string,
  price_level: _propTypes.PropTypes.number,
  rating: _propTypes.PropTypes.number,
  reviews: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
    aspects: _propTypes.PropTypes.arrayOf(aspectsRating),
    author_name: _propTypes.PropTypes.string,
    author_url: _propTypes.PropTypes.string,
    language: _propTypes.PropTypes.string,
    text: _propTypes.PropTypes.string
  })),
  types: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
  url: _propTypes.PropTypes.string,
  vicinity: _propTypes.PropTypes.string,
  website: _propTypes.PropTypes.string,
  predictionInfo: predictionShape
});

exports.placeDetailsShape = placeDetailsShape;