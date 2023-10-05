import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { useFilterCountries, useKeyboardNavigation, useScrollControls, useItemsRef, useHandleCountryChange } from './hooks';
import { StyledScrollable, StyledUl, StyledDropdown, StyledSearchContainer, StyledSearch, StyledScrollControls } from './styled';
import { Arrow } from '../../InternalDropdown/styled';
import CountriesList from './countriesList';
import RenderIf from '../../RenderIf';
import StyledSearchIcon from '../../Lookup/options/styled/searchIcon';
import StyledOptionsContainer from '../../Lookup/options/styled/optionsContainer';
import StyledEmptyMessage from '../../Lookup/options/styled/emptyMessage';
var CountriesDropdown = memo(React.forwardRef(function (props, ref) {
  var country = props.country,
      countries = props.countries,
      isOpen = props.isOpen,
      searchRef = props.searchRef,
      onCountryChange = props.onCountryChange,
      onKeyDown = props.onKeyDown,
      borderRadius = props.borderRadius;
  var scrollableRef = useRef();

  var _useFilterCountries = useFilterCountries(countries, country),
      _useFilterCountries2 = _slicedToArray(_useFilterCountries, 3),
      query = _useFilterCountries2[0],
      countriesFiltered = _useFilterCountries2[1],
      setQuery = _useFilterCountries2[2];

  var itemsRef = useItemsRef(countriesFiltered.length);
  var handleCountryChange = useHandleCountryChange(scrollableRef, onCountryChange, setQuery);
  var handleActiveChange = useKeyboardNavigation(country, countriesFiltered, searchRef, scrollableRef, itemsRef, handleCountryChange);

  var _useScrollControls = useScrollControls(scrollableRef),
      showScrollUp = _useScrollControls.showScrollUp,
      showScrollDown = _useScrollControls.showScrollDown,
      handleScrollUpMouseEnter = _useScrollControls.handleScrollUpMouseEnter,
      handleScrollDownouseEnter = _useScrollControls.handleScrollDownouseEnter,
      stopScroll = _useScrollControls.stopScroll;

  var listHeight = countriesFiltered.length * 45;
  return React.createElement(StyledDropdown, {
    isOpen: isOpen,
    onKeyDown: onKeyDown,
    ref: ref,
    borderRadius: borderRadius
  }, React.createElement(StyledSearchContainer, null, React.createElement(StyledSearch, {
    ref: searchRef,
    type: "text",
    value: query,
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    }
  })), React.createElement(StyledScrollControls, null, React.createElement(RenderIf, {
    isTrue: showScrollUp
  }, React.createElement(Arrow, {
    direction: "up",
    onMouseEnter: handleScrollUpMouseEnter,
    onMouseLeave: stopScroll
  })), React.createElement(StyledScrollable, {
    ref: scrollableRef
  }, React.createElement(RenderIf, {
    isTrue: countriesFiltered.length > 0
  }, React.createElement(StyledUl, {
    role: "listbox",
    listHeight: listHeight
  }, React.createElement(CountriesList, {
    countries: countriesFiltered,
    country: country,
    itemsRef: itemsRef,
    handleCountryChange: handleCountryChange,
    handleActiveChange: handleActiveChange
  }))), React.createElement(RenderIf, {
    isTrue: countriesFiltered.length === 0
  }, React.createElement(StyledOptionsContainer, {
    as: "div",
    "data-id": "phone-country-empty-container"
  }, React.createElement(StyledSearchIcon, null), React.createElement(StyledEmptyMessage, null, "Our robots did not find any match for", React.createElement("span", null, " \"".concat(query, "\""))))))), React.createElement(RenderIf, {
    isTrue: showScrollDown
  }, React.createElement(Arrow, {
    direction: "down",
    onMouseEnter: handleScrollDownouseEnter,
    onMouseLeave: stopScroll
  })));
}));
CountriesDropdown.propTypes = {
  countries: PropTypes.array,
  country: PropTypes.object,
  searchRef: PropTypes.object,
  isOpen: PropTypes.bool,
  onCountryChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
CountriesDropdown.defaultProps = {
  countries: [],
  country: undefined,
  isOpen: false,
  searchRef: undefined,
  onCountryChange: function onCountryChange() {},
  onKeyDown: function onKeyDown() {},
  borderRadius: 'rounded'
};
export default CountriesDropdown;