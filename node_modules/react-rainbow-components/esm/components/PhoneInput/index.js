import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useRef, useImperativeHandle, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick, useScrollingIntent } from '@rainbow-modules/hooks';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import StyledContainer from '../Input/styled/container';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import AssistiveText from '../AssistiveText';
import InternalOverlay from '../InternalOverlay';
import { StyledInputContainer, StyledInput, StyledIndicator, StyledTrigger, StyledFlagContainer, StyledCountryCode, StyledIconContainer, StyledFlagIcon } from './styled';
import { useUniqueIdentifier, useReduxForm, useErrorMessageId, useLabelId, useWindowResize } from '../../libs/hooks';
import { useCountry, useCountries } from './hooks';
import CountriesDropdown from './countriesDropdown';
import positionResolver from './helpers/positionResolver';
var PhoneInput = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
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

  var containerRef = useRef();
  var triggerRef = useRef();
  var searchRef = useRef();
  var inputRef = useRef();
  var pickerRef = useRef();
  useImperativeHandle(ref, function () {
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
  var inputId = useUniqueIdentifier('phone-input');
  var errorMessageId = useErrorMessageId(error);
  var labelId = useLabelId(label);
  var phone = value && value.phone || '';
  var countries = useCountries(countriesProps);
  var country = useCountry(value, countries);
  var countryCode = country.countryCode,
      isoCode = country.isoCode,
      flagIcon = country.flagIcon;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasFocus = _useState4[0],
      setHasFocus = _useState4[1];

  useOutsideClick(pickerRef, function (event) {
    if (event.target !== triggerRef.current && !triggerRef.current.contains(event.target) && !pickerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, isOpen);
  useScrollingIntent({
    callback: function callback() {
      return setIsOpen(false);
    },
    isListening: isOpen,
    triggerElementRef: function triggerElementRef() {
      return triggerRef;
    },
    threshold: 10
  });
  useWindowResize(function () {
    return setIsOpen(false);
  }, isOpen);
  useEffect(function () {
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
  return React.createElement(StyledContainer, {
    id: id,
    ref: containerRef,
    className: className,
    style: style,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, React.createElement(Label, {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    inputId: inputId,
    readOnly: readOnly,
    id: labelId,
    size: size
  }), React.createElement(StyledInputContainer, {
    disabled: disabled,
    readOnly: readOnly,
    iconPosition: "right",
    icon: icon,
    error: error,
    isFocus: hasFocus,
    size: size,
    borderRadius: borderRadius
  }, React.createElement(RenderIf, {
    isTrue: isReadOnly
  }, React.createElement(StyledFlagContainer, {
    readOnly: true
  }, React.createElement(StyledFlagIcon, {
    as: flagIcon,
    size: size
  }))), React.createElement(RenderIf, {
    isTrue: hasTrigger
  }, React.createElement(StyledTrigger, {
    ref: triggerRef,
    onClick: handleClick,
    tabIndex: tabIndex,
    disabled: disabled,
    type: "button",
    size: size
  }, React.createElement(StyledFlagContainer, {
    disabled: disabled
  }, React.createElement(StyledFlagIcon, {
    as: flagIcon,
    size: size
  }), React.createElement(StyledIndicator, {
    error: error,
    disabled: disabled
  })), React.createElement(AssistiveText, {
    text: "select country"
  }))), React.createElement(RenderIf, {
    isTrue: isOnlyCountry
  }, React.createElement(StyledTrigger, {
    ref: triggerRef,
    tabIndex: tabIndex,
    disabled: disabled
  }, React.createElement(StyledFlagContainer, {
    disabled: disabled
  }, React.createElement(StyledFlagIcon, {
    as: flagIcon,
    size: size
  })))), React.createElement(StyledCountryCode, {
    size: size
  }, formattedCountryCode), React.createElement(StyledInput, {
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
  }), React.createElement(RenderIf, {
    isTrue: icon
  }, React.createElement(StyledIconContainer, {
    error: error
  }, icon))), React.createElement(RenderIf, {
    isTrue: bottomHelpText
  }, React.createElement(HelpText, {
    alignSelf: "center"
  }, bottomHelpText)), React.createElement(RenderIf, {
    isTrue: error
  }, React.createElement(ErrorText, {
    alignSelf: "center",
    id: errorMessageId
  }, error)), React.createElement(InternalOverlay, {
    isVisible: isOpen,
    positionResolver: positionResolver,
    triggerElementRef: function triggerElementRef() {
      return containerRef;
    },
    keepScrollEnabled: true
  }, React.createElement(CountriesDropdown, {
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    countryCode: PropTypes.string,
    isoCode: PropTypes.string,
    phone: PropTypes.string
  })]),
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  countries: PropTypes.array,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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
export default PhoneInput;