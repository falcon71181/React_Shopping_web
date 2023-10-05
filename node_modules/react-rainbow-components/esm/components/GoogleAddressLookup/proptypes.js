import { PropTypes } from 'prop-types';
export var aspectsRating = PropTypes.shape({
  rating: PropTypes.number,
  type: PropTypes.string
});
export var mapCoordinates = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
});
export var mapViewportCoordinates = PropTypes.shape({
  south: PropTypes.number.isRequired,
  west: PropTypes.number.isRequired,
  north: PropTypes.number.isRequired,
  east: PropTypes.number.isRequired
});
export var searchOptionsShape = PropTypes.shape({
  bounds: PropTypes.shape({
    sw: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
    ne: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  }),
  country: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  radius: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.string)
});
export var predictionShape = PropTypes.shape({
  description: PropTypes.string,
  matched_substrings: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
    offset: PropTypes.number
  })),
  place_id: PropTypes.string,
  structured_formatting: PropTypes.arrayOf(PropTypes.shape({
    main_text: PropTypes.string,
    main_text_matched_substrings: PropTypes.arrayOf(PropTypes.shape({
      length: PropTypes.number,
      offset: PropTypes.number
    })),
    secondary_text: PropTypes.string
  })),
  terms: PropTypes.arrayOf(PropTypes.shape({
    offset: PropTypes.number,
    value: PropTypes.string
  })),
  types: PropTypes.arrayOf(PropTypes.string)
});
export var placeDetailsShape = PropTypes.shape({
  address_components: PropTypes.arrayOf(PropTypes.shape({
    long_name: PropTypes.string,
    short_name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string)
  })),
  aspects: PropTypes.arrayOf(aspectsRating),
  formatted_address: PropTypes.string,
  formatted_phone_number: PropTypes.string,
  geometry: PropTypes.shape({
    location: mapCoordinates,
    viewport: mapViewportCoordinates
  }),
  html_attributions: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.string,
  international_phone_number: PropTypes.string,
  name: PropTypes.string,
  permanently_closed: PropTypes.bool,
  photos: PropTypes.arrayOf(PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    html_attributions: PropTypes.arrayOf(PropTypes.string),
    photo_reference: PropTypes.string
  })),
  place_id: PropTypes.string,
  price_level: PropTypes.number,
  rating: PropTypes.number,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    aspects: PropTypes.arrayOf(aspectsRating),
    author_name: PropTypes.string,
    author_url: PropTypes.string,
    language: PropTypes.string,
    text: PropTypes.string
  })),
  types: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  vicinity: PropTypes.string,
  website: PropTypes.string,
  predictionInfo: predictionShape
});