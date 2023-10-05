import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["apiKey"];
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import PlacesLookupComponent from './component';
import * as CustomPropTypes from './proptypes';
var googleMapApiUrl = 'https://maps.googleapis.com/maps/api/js';
export default function GoogleAddressLookup(props) {
  var apiKey = props.apiKey,
      rest = _objectWithoutProperties(props, _excluded);

  var Component = useCallback(scriptLoader("".concat(googleMapApiUrl, "?key=").concat(apiKey, "&libraries=places"))(PlacesLookupComponent), [apiKey]);
  return React.createElement(Component, rest);
}
GoogleAddressLookup.propTypes = {
  apiKey: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  value: PropTypes.oneOfType([CustomPropTypes.predictionShape, CustomPropTypes.placeDetailsShape, PropTypes.string]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  searchOptions: CustomPropTypes.searchOptionsShape,
  variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
GoogleAddressLookup.defaultProps = {
  label: undefined,
  value: undefined,
  name: undefined,
  placeholder: null,
  required: false,
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onBlur: function onBlur() {},
  tabIndex: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  searchOptions: {},
  variant: 'default',
  borderRadius: 'rounded'
};