"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Component = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _Lookup = _interopRequireDefault(require("../Lookup"));

var _locationIcon = _interopRequireDefault(require("./icons/locationIcon"));

var _utils = require("../../libs/utils");

var _getSuggestions = _interopRequireDefault(require("./helpers/getSuggestions"));

var _getSearchForOption = _interopRequireDefault(require("./helpers/getSearchForOption"));

var _getFormattedValue = _interopRequireDefault(require("./helpers/getFormattedValue"));

var _selectedLocationIcon = _interopRequireDefault(require("./icons/selectedLocationIcon"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _getSearchParams = _interopRequireDefault(require("./helpers/getSearchParams"));

var CustomPropTypes = _interopRequireWildcard(require("./proptypes"));

var _poweredByGoogleContainer = _interopRequireDefault(require("./styled/poweredByGoogleContainer"));

var _poweredByGoogleLogo = _interopRequireDefault(require("./styled/poweredByGoogleLogo"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PlacesLookupComponent = function (_Component) {
  (0, _inherits2["default"])(PlacesLookupComponent, _Component);

  var _super = _createSuper(PlacesLookupComponent);

  function PlacesLookupComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlacesLookupComponent);
    _this = _super.call(this, props);
    _this.lookupId = (0, _utils.uniqueId)('gaddrlookup-input');
    _this.initialized = false;
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSearch = _this.handleSearch.bind((0, _assertThisInitialized2["default"])(_this));
    _this.placesServiceRef = _react["default"].createRef();
    _this.state = {
      isSearching: false,
      places: [],
      suggestions: []
    };
    return _this;
  }

  (0, _createClass2["default"])(PlacesLookupComponent, [{
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
      var searchParams = (0, _getSearchParams["default"])(searchOptions);
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
        suggestions: (0, _getSuggestions["default"])(results, searchValue)
      });
    }
  }, {
    key: "handleError",
    value: function handleError(searchValue) {
      this.setState({
        places: [],
        suggestions: [(0, _getSearchForOption["default"])(searchValue)]
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
      return _react["default"].createElement("div", {
        id: id,
        style: style,
        className: className
      }, _react["default"].createElement(_Lookup["default"], {
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
        value: (0, _getFormattedValue["default"])(value, false, _react["default"].createElement(_selectedLocationIcon["default"], null)),
        onChange: this.handleChange,
        onSearch: this.handleSearch,
        onClick: onClick,
        onBlur: onBlur,
        error: error,
        icon: _react["default"].createElement(_locationIcon["default"], null),
        preferredSelectedOption: 1,
        variant: variant,
        borderRadius: borderRadius
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: !error
      }, _react["default"].createElement(_poweredByGoogleContainer["default"], null, _react["default"].createElement(_poweredByGoogleLogo["default"], null))), _react["default"].createElement("div", {
        ref: this.placesServiceRef
      }));
    }
  }]);
  return PlacesLookupComponent;
}(_react.Component);

exports.Component = PlacesLookupComponent;
PlacesLookupComponent.propTypes = {
  isScriptLoaded: _propTypes["default"].bool.isRequired,
  isScriptLoadSucceed: _propTypes["default"].bool.isRequired,
  searchOptions: CustomPropTypes.searchOptionsShape,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([CustomPropTypes.predictionShape, CustomPropTypes.placeDetailsShape, _propTypes["default"].string]),
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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

var _default = (0, _withReduxForm["default"])(PlacesLookupComponent);

exports["default"] = _default;