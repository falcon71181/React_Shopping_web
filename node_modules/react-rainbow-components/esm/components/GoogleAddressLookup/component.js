import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Lookup from '../Lookup';
import LocationIcon from './icons/locationIcon';
import { uniqueId } from '../../libs/utils';
import getSuggestions from './helpers/getSuggestions';
import getSearchForOption from './helpers/getSearchForOption';
import getFormattedValue from './helpers/getFormattedValue';
import SelectedLocationIcon from './icons/selectedLocationIcon';
import RenderIf from '../RenderIf';
import getSearchParams from './helpers/getSearchParams';
import * as CustomPropTypes from './proptypes';
import StyledPoweredByGoogleContainer from './styled/poweredByGoogleContainer';
import StyledPoweredByGoogleLogo from './styled/poweredByGoogleLogo';

var PlacesLookupComponent = function (_Component) {
  _inherits(PlacesLookupComponent, _Component);

  var _super = _createSuper(PlacesLookupComponent);

  function PlacesLookupComponent(props) {
    var _this;

    _classCallCheck(this, PlacesLookupComponent);

    _this = _super.call(this, props);
    _this.lookupId = uniqueId('gaddrlookup-input');
    _this.initialized = false;
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSearch = _this.handleSearch.bind(_assertThisInitialized(_this));
    _this.placesServiceRef = React.createRef();
    _this.state = {
      isSearching: false,
      places: [],
      suggestions: []
    };
    return _this;
  }

  _createClass(PlacesLookupComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevIsScriptLoaded = _ref.isScriptLoaded;
      var _this$props = this.props,
          isScriptLoaded = _this$props.isScriptLoaded,
          isScriptLoadSucceed = _this$props.isScriptLoadSucceed;

      if (!prevIsScriptLoaded && isScriptLoaded && isScriptLoadSucceed) {
        this.initComponent();
      }
    }
  }, {
    key: "getPlaceInfo",
    value: function getPlaceInfo(placeId) {
      var _this2 = this;

      this.setState({
        isSearching: true
      });
      return new Promise(function (resolve, reject) {
        _this2.placesService.getDetails({
          placeId: placeId
        }, function (details, status) {
          _this2.setState({
            isSearching: false
          });

          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            return resolve(details);
          }

          return reject(status);
        });
      });
    }
  }, {
    key: "initComponent",
    value: function initComponent() {
      this.autocompleteService = new window.google.maps.places.AutocompleteService();
      this.placesService = new window.google.maps.places.PlacesService(this.placesServiceRef.current);
      this.initialized = true;
    }
  }, {
    key: "handleChange",
    value: function handleChange(option) {
      var onChange = this.props.onChange;

      if (!option) {
        return onChange(null);
      }

      if (!option.id) {
        return onChange(option.data);
      }

      var places = this.state.places;
      var placePrediction = places.find(function (place) {
        return place.place_id === option.id;
      });
      return this.getPlaceInfo(option.id).then(function (result) {
        var resultValue = Object.assign(result, {
          predictionInfo: placePrediction
        });
        return onChange(resultValue);
      })["catch"](function () {
        var resultValue = placePrediction;
        return onChange(resultValue);
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(value) {
      var _this3 = this;

      if (!this.initialized) return;

      if (value) {
        this.searchGooglePlaces(value).then(function (results) {
          return _this3.processSearchResults(results, value);
        })["catch"](function () {
          return _this3.handleError(value);
        });
      } else if (!value) {
        this.clear();
      }
    }
  }, {
    key: "searchGooglePlaces",
    value: function searchGooglePlaces(needle) {
      var _this4 = this;

      var searchOptions = this.props.searchOptions;
      var searchParams = getSearchParams(searchOptions);
      this.setState({
        isSearching: true
      });
      return new Promise(function (resolve, reject) {
        _this4.autocompleteService.getPlacePredictions(_objectSpread(_objectSpread({}, searchParams), {}, {
          input: needle
        }), function (predictions, status) {
          _this4.setState({
            isSearching: false
          });

          if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
            return reject(status);
          }

          return resolve(predictions);
        });
      });
    }
  }, {
    key: "processSearchResults",
    value: function processSearchResults(results, searchValue) {
      this.setState({
        places: results,
        suggestions: getSuggestions(results, searchValue)
      });
    }
  }, {
    key: "handleError",
    value: function handleError(searchValue) {
      this.setState({
        places: [],
        suggestions: [getSearchForOption(searchValue)]
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setState({
        places: [],
        suggestions: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          className = _this$props2.className,
          label = _this$props2.label,
          error = _this$props2.error,
          readOnly = _this$props2.readOnly,
          placeholder = _this$props2.placeholder,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex,
          required = _this$props2.required,
          id = _this$props2.id,
          name = _this$props2.name,
          value = _this$props2.value,
          labelAlignment = _this$props2.labelAlignment,
          hideLabel = _this$props2.hideLabel,
          onClick = _this$props2.onClick,
          onBlur = _this$props2.onBlur,
          variant = _this$props2.variant,
          borderRadius = _this$props2.borderRadius;
      var _this$state = this.state,
          isSearching = _this$state.isSearching,
          suggestions = _this$state.suggestions;
      var options = suggestions.length > 0 ? suggestions : null;
      return React.createElement("div", {
        id: id,
        style: style,
        className: className
      }, React.createElement(Lookup, {
        id: this.lookupId,
        name: name,
        label: label,
        debounce: true,
        isLoading: isSearching,
        placeholder: placeholder,
        options: options,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        readOnly: readOnly,
        required: required,
        tabIndex: tabIndex,
        disabled: disabled,
        value: getFormattedValue(value, false, React.createElement(SelectedLocationIcon, null)),
        onChange: this.handleChange,
        onSearch: this.handleSearch,
        onClick: onClick,
        onBlur: onBlur,
        error: error,
        icon: React.createElement(LocationIcon, null),
        preferredSelectedOption: 1,
        variant: variant,
        borderRadius: borderRadius
      }), React.createElement(RenderIf, {
        isTrue: !error
      }, React.createElement(StyledPoweredByGoogleContainer, null, React.createElement(StyledPoweredByGoogleLogo, null))), React.createElement("div", {
        ref: this.placesServiceRef
      }));
    }
  }]);

  return PlacesLookupComponent;
}(Component);

PlacesLookupComponent.propTypes = {
  isScriptLoaded: PropTypes.bool.isRequired,
  isScriptLoadSucceed: PropTypes.bool.isRequired,
  searchOptions: CustomPropTypes.searchOptionsShape,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([CustomPropTypes.predictionShape, CustomPropTypes.placeDetailsShape, PropTypes.string]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
PlacesLookupComponent.defaultProps = {
  searchOptions: undefined,
  value: undefined,
  name: undefined,
  placeholder: null,
  required: false,
  readOnly: false,
  error: null,
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onBlur: function onBlur() {},
  tabIndex: undefined,
  label: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  variant: 'default',
  borderRadius: 'rounded'
};
export default withReduxForm(PlacesLookupComponent);
export { PlacesLookupComponent as Component };