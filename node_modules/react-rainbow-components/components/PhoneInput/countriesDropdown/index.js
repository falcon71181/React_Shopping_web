"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("./hooks");

var _styled = require("./styled");

var _styled2 = require("../../InternalDropdown/styled");

var _countriesList = _interopRequireDefault(require("./countriesList"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _searchIcon = _interopRequireDefault(require("../../Lookup/options/styled/searchIcon"));

var _optionsContainer = _interopRequireDefault(require("../../Lookup/options/styled/optionsContainer"));

var _emptyMessage = _interopRequireDefault(require("../../Lookup/options/styled/emptyMessage"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CountriesDropdown = (0, _react.memo)(_react["default"].forwardRef(function (props, ref) {
  var country = props.country,
      countries = props.countries,
      isOpen = props.isOpen,
      searchRef = props.searchRef,
      onCountryChange = props.onCountryChange,
      onKeyDown = props.onKeyDown,
      borderRadius = props.borderRadius;
  var scrollableRef = (0, _react.useRef)();

  var _useFilterCountries = (0, _hooks.useFilterCountries)(countries, country),
      _useFilterCountries2 = (0, _slicedToArray2["default"])(_useFilterCountries, 3),
      query = _useFilterCountries2[0],
      countriesFiltered = _useFilterCountries2[1],
      setQuery = _useFilterCountries2[2];

  var itemsRef = (0, _hooks.useItemsRef)(countriesFiltered.length);
  var handleCountryChange = (0, _hooks.useHandleCountryChange)(scrollableRef, onCountryChange, setQuery);
  var handleActiveChange = (0, _hooks.useKeyboardNavigation)(country, countriesFiltered, searchRef, scrollableRef, itemsRef, handleCountryChange);

  var _useScrollControls = (0, _hooks.useScrollControls)(scrollableRef),
      showScrollUp = _useScrollControls.showScrollUp,
      showScrollDown = _useScrollControls.showScrollDown,
      handleScrollUpMouseEnter = _useScrollControls.handleScrollUpMouseEnter,
      handleScrollDownouseEnter = _useScrollControls.handleScrollDownouseEnter,
      stopScroll = _useScrollControls.stopScroll;

  var listHeight = countriesFiltered.length * 45;
  return _react["default"].createElement(_styled.StyledDropdown, {
    isOpen: isOpen,
    onKeyDown: onKeyDown,
    ref: ref,
    borderRadius: borderRadius
  }, _react["default"].createElement(_styled.StyledSearchContainer, null, _react["default"].createElement(_styled.StyledSearch, {
    ref: searchRef,
    type: "text",
    value: query,
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    }
  })), _react["default"].createElement(_styled.StyledScrollControls, null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: showScrollUp
  }, _react["default"].createElement(_styled2.Arrow, {
    direction: "up",
    onMouseEnter: handleScrollUpMouseEnter,
    onMouseLeave: stopScroll
  })), _react["default"].createElement(_styled.StyledScrollable, {
    ref: scrollableRef
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: countriesFiltered.length > 0
  }, _react["default"].createElement(_styled.StyledUl, {
    role: "listbox",
    listHeight: listHeight
  }, _react["default"].createElement(_countriesList["default"], {
    countries: countriesFiltered,
    country: country,
    itemsRef: itemsRef,
    handleCountryChange: handleCountryChange,
    handleActiveChange: handleActiveChange
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: countriesFiltered.length === 0
  }, _react["default"].createElement(_optionsContainer["default"], {
    as: "div",
    "data-id": "phone-country-empty-container"
  }, _react["default"].createElement(_searchIcon["default"], null), _react["default"].createElement(_emptyMessage["default"], null, "Our robots did not find any match for", _react["default"].createElement("span", null, " \"".concat(query, "\""))))))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: showScrollDown
  }, _react["default"].createElement(_styled2.Arrow, {
    direction: "down",
    onMouseEnter: handleScrollDownouseEnter,
    onMouseLeave: stopScroll
  })));
}));
CountriesDropdown.propTypes = {
  countries: _propTypes["default"].array,
  country: _propTypes["default"].object,
  searchRef: _propTypes["default"].object,
  isOpen: _propTypes["default"].bool,
  onCountryChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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
var _default = CountriesDropdown;
exports["default"] = _default;