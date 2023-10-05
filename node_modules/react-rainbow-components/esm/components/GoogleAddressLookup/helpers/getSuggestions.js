import React from 'react';
import getSearchForOption from './getSearchForOption';
import getFormattedValue from './getFormattedValue';
import LocationItemIcon from '../icons/locationItemIcon';
export default function getSuggestions(results, searchValue) {
  return [getSearchForOption(searchValue)].concat(results.map(function (place) {
    return getFormattedValue(place, true, React.createElement(LocationItemIcon, null));
  }));
}