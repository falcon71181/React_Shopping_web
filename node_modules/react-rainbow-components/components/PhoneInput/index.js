"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("@rainbow-modules/hooks");

var _label = _interopRequireDefault(require("../Input/label"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _container = _interopRequireDefault(require("../Input/styled/container"));

var _helpText = _interopRequireDefault(require("../Input/styled/helpText"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _InternalOverlay = _interopRequireDefault(require("../InternalOverlay"));

var _styled = require("./styled");

var _hooks2 = require("../../libs/hooks");

var _hooks3 = require("./hooks");

var _countriesDropdown = _interopRequireDefault(require("./countriesDropdown"));

var _positionResolver = _interopRequireDefault(require("./helpers/positionResolver"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var PhoneInput = _react["default"].forwardRef(function (props, ref) {
  var _useReduxForm = (0, _hooks2.useReduxForm)(props),
      value = _useReduxForm.value,
      name = _useReduxForm.name,
      placeholder = _useReduxForm.placeholder,
      icon = _useReduxForm.icon,
      bottomHelpText = _useReduxForm.bottomHelpText,
      required = _useReduxForm.required,
      error = _useReduxForm.error,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      tabIndex = _useReduxForm.tabIndex,
      onChange = _useReduxForm.onChange,
      onClick = _useReduxForm.onClick,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      id = _useReduxForm.id,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      countriesProps = _useReduxForm.countries,
      size = _useReduxForm.size,
      borderRadius = _useReduxForm.borderRadius;

  var containerRef = (0, _react.useRef)();
  var triggerRef = (0, _react.useRef)();
  var searchRef = (0, _react.useRef)();
  var inputRef = (0, _react.useRef)();
  var pickerRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      click: function click() {
        inputRef.current.click();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });
  var inputId = (0, _hooks2.useUniqueIdentifier)('phone-input');
  var errorMessageId = (0, _hooks2.useErrorMessageId)(error);
  var labelId = (0, _hooks2.useLabelId)(label);
  var phone = value && value.phone || '';
  var countries = (0, _hooks3.useCountries)(countriesProps);
  var country = (0, _hooks3.useCountry)(value, countries);
  var countryCode = country.countryCode,
      isoCode = country.isoCode,
      flagIcon = country.flagIcon;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      hasFocus = _useState4[0],
      setHasFocus = _useState4[1];

  (0, _hooks.useOutsideClick)(pickerRef, function (event) {
    if (event.target !== triggerRef.current && !triggerRef.current.contains(event.target) && !pickerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, isOpen);
  (0, _hooks.useScrollingIntent)({
    callback: function callback() {
      return setIsOpen(false);
    },
    isListening: isOpen,
    triggerElementRef: function triggerElementRef() {
      return triggerRef;
    },
    threshold: 10
  });
  (0, _hooks2.useWindowResize)(function () {
    return setIsOpen(false);
  }, isOpen);
  (0, _react.useEffect)(function () {
    if (isOpen) searchRef.current.focus();
  }, [isOpen]);

  var handleFocus = function handleFocus() {
    if (!hasFocus) {
      setHasFocus(true);
      onFocus(value);
    }
  };

  var handleBlur = function handleBlur(event) {
    var relatedTarget = event.relatedTarget;

    if (relatedTarget !== null && !containerRef.current.contains(relatedTarget) && (!pickerRef.current || !pickerRef.current.contains(relatedTarget))) {
      setHasFocus(false);
      onBlur(value);
    }
  };

  var onCountryChange = function onCountryChange(newCountry) {
    setIsOpen(false);
    inputRef.current.focus();
    onChange(_objectSpread(_objectSpread({}, value), {}, {
      isoCode: newCountry.isoCode,
      countryCode: newCountry.countryCode
    }));
  };

  var handlePhoneChange = function handlePhoneChange(event) {
    var rawPhone = event.target.value;
    var newPhone = rawPhone.replace(/\D/g, '');
    onChange({
      countryCode: countryCode,
      isoCode: isoCode,
      phone: newPhone
    });
  };

  var handleClick = function handleClick() {
    if (isOpen) setIsOpen(false);else setIsOpen(true);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
      inputRef.current.focus();
    }
  };

  var formattedCountryCode = "(".concat(countryCode, ")");
  var isReadOnly = readOnly && !disabled;
  var hasTrigger = !isReadOnly && countries.length > 1;
  var isOnlyCountry = !isReadOnly && countries.length === 1;
  return _react["default"].createElement(_container["default"], {
    id: id,
    ref: containerRef,
    className: className,
    style: style,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, _react["default"].createElement(_label["default"], {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    inputId: inputId,
    readOnly: readOnly,
    id: labelId,
    size: size
  }), _react["default"].createElement(_styled.StyledInputContainer, {
    disabled: disabled,
    readOnly: readOnly,
    iconPosition: "right",
    icon: icon,
    error: error,
    isFocus: hasFocus,
    size: size,
    borderRadius: borderRadius
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: isReadOnly
  }, _react["default"].createElement(_styled.StyledFlagContainer, {
    readOnly: true
  }, _react["default"].createElement(_styled.StyledFlagIcon, {
    as: flagIcon,
    size: size
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasTrigger
  }, _react["default"].createElement(_styled.StyledTrigger, {
    ref: triggerRef,
    onClick: handleClick,
    tabIndex: tabIndex,
    disabled: disabled,
    type: "button",
    size: size
  }, _react["default"].createElement(_styled.StyledFlagContainer, {
    disabled: disabled
  }, _react["default"].createElement(_styled.StyledFlagIcon, {
    as: flagIcon,
    size: size
  }), _react["default"].createElement(_styled.StyledIndicator, {
    error: error,
    disabled: disabled
  })), _react["default"].createElement(_AssistiveText["default"], {
    text: "select country"
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: isOnlyCountry
  }, _react["default"].createElement(_styled.StyledTrigger, {
    ref: triggerRef,
    tabIndex: tabIndex,
    disabled: disabled
  }, _react["default"].createElement(_styled.StyledFlagContainer, {
    disabled: disabled
  }, _react["default"].createElement(_styled.StyledFlagIcon, {
    as: flagIcon,
    size: size
  })))), _react["default"].createElement(_styled.StyledCountryCode, {
    size: size
  }, formattedCountryCode), _react["default"].createElement(_styled.StyledInput, {
    id: inputId,
    ref: inputRef,
    name: name,
    value: phone,
    type: "tel",
    placeholder: placeholder,
    tabIndex: tabIndex,
    onClick: onClick,
    onChange: handlePhoneChange,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    iconPosition: "right",
    icon: icon,
    error: error,
    size: size
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_styled.StyledIconContainer, {
    error: error
  }, icon))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: bottomHelpText
  }, _react["default"].createElement(_helpText["default"], {
    alignSelf: "center"
  }, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: error
  }, _react["default"].createElement(_errorText["default"], {
    alignSelf: "center",
    id: errorMessageId
  }, error)), _react["default"].createElement(_InternalOverlay["default"], {
    isVisible: isOpen,
    positionResolver: _positionResolver["default"],
    triggerElementRef: function triggerElementRef() {
      return containerRef;
    },
    keepScrollEnabled: true
  }, _react["default"].createElement(_countriesDropdown["default"], {
    country: country,
    countries: countries,
    isOpen: isOpen,
    searchRef: searchRef,
    handleFocus: handleFocus,
    handleBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onCountryChange: onCountryChange,
    ref: pickerRef,
    borderRadius: borderRadius
  })));
});

PhoneInput.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    countryCode: _propTypes["default"].string,
    isoCode: _propTypes["default"].string,
    phone: _propTypes["default"].string
  })]),
  name: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  required: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  countries: _propTypes["default"].array,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
PhoneInput.defaultProps = {
  id: undefined,
  name: undefined,
  placeholder: null,
  icon: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: null,
  required: false,
  error: null,
  disabled: false,
  readOnly: false,
  tabIndex: undefined,
  className: undefined,
  style: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  size: 'medium',
  borderRadius: 'rounded',
  value: {
    countryCode: '+1',
    isoCode: 'us',
    phone: ''
  },
  countries: ['af', 'ax', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'ag', 'ar', 'am', 'aw', 'ac', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'bq', 'ba', 'bw', 'br', 'vg', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'cx', 'cc', 'co', 'km', 'cg', 'cd', 'ck', 'cr', 'ci', 'hr', 'cu', 'cw', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kv', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'bl', 'sh', 'kn', 'lc', 'mf', 'pm', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sx', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sj', 'sz', 'se', 'ch', 'sy', 'tw', 'tj', 'tz', 'th', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'vi', 'ug', 'ua', 'ae', 'gb', 'us', 'uy', 'uz', 'vu', 'va', 've', 'vn', 'wf', 'ye', 'zm', 'zw']
};
var _default = PhoneInput;
exports["default"] = _default;