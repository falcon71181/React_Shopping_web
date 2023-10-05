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

var _hooks = require("../../libs/hooks");

var _helpers = require("../CurrencyInput/helpers");

var _hooks2 = require("../CurrencyInput/hooks");

var _useOptions = _interopRequireDefault(require("./hooks/useOptions"));

var _label = _interopRequireDefault(require("../Input/label"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _relativeElement = _interopRequireDefault(require("../Structural/relativeElement"));

var _container = _interopRequireDefault(require("../Input/styled/container"));

var _iconContainer = _interopRequireDefault(require("../Input/styled/iconContainer"));

var _styled = require("../Input/inputBase/styled");

var _helpText = _interopRequireDefault(require("../Input/styled/helpText"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _formatPercent = _interopRequireDefault(require("./helpers/formatPercent"));

var _helpers2 = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PercentInput = (0, _react.forwardRef)(function (props, ref) {
  var _useReduxForm = (0, _hooks.useReduxForm)(props),
      value = _useReduxForm.value,
      name = _useReduxForm.name,
      placeholder = _useReduxForm.placeholder,
      icon = _useReduxForm.icon,
      iconPosition = _useReduxForm.iconPosition,
      bottomHelpText = _useReduxForm.bottomHelpText,
      required = _useReduxForm.required,
      error = _useReduxForm.error,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      onChange = _useReduxForm.onChange,
      tabIndex = _useReduxForm.tabIndex,
      onClick = _useReduxForm.onClick,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      onKeyDown = _useReduxForm.onKeyDown,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      variant = _useReduxForm.variant,
      id = _useReduxForm.id,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      localeProp = _useReduxForm.locale,
      size = _useReduxForm.size,
      valueAlignment = _useReduxForm.valueAlignment,
      borderRadius = _useReduxForm.borderRadius;

  var inputRef = (0, _react.useRef)();
  var inputId = (0, _hooks.useUniqueIdentifier)('percent-input');
  var errorMessageId = (0, _hooks.useErrorMessageId)(error);
  var labelId = (0, _hooks.useLabelId)(label);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      cursor = _useState4[0],
      setCursor = _useState4[1];

  var options = (0, _useOptions["default"])(props);
  var locale = (0, _hooks.useLocale)(localeProp);
  var decimalSeparator = (0, _hooks2.useDecimalSeparator)({
    locale: locale,
    style: 'percent'
  });
  var groupSeparator = (0, _hooks2.useGroupSeparator)({
    locale: locale,
    style: 'percent'
  });
  var normalizedValue = (0, _helpers2.normalizeValue)({
    value: value,
    locale: locale,
    decimalSeparator: decimalSeparator,
    options: options
  });
  var currentValue = focused ? normalizedValue : (0, _formatPercent["default"])({
    value: value,
    locale: locale,
    options: options
  });
  var isReadOnly = !!(!disabled && readOnly);
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
  (0, _react.useEffect)(function () {
    inputRef.current.setSelectionRange(cursor, cursor);
  }, [cursor]);

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
        newValue = _event$target.value,
        selectionStart = _event$target.selectionStart;
    var cleanValue = (0, _helpers.clearValue)(newValue, decimalSeparator);
    var normalizeNewValue = (0, _helpers2.normalizeValue)({
      value: cleanValue,
      locale: locale,
      decimalSeparator: decimalSeparator,
      options: options
    });

    if ((0, _helpers.isValidStringNumber)(cleanValue) && normalizeNewValue !== normalizedValue) {
      onChange(cleanValue);

      var _diffOfChar = (0, _helpers.countCharacters)(normalizeNewValue, groupSeparator) - (0, _helpers.countCharacters)(normalizedValue, groupSeparator);

      var newCursor = selectionStart + _diffOfChar;

      if (cleanValue.charAt(0) === '0' && cleanValue.charAt(1) && cleanValue.charAt(1) !== '0' && cleanValue.charAt(1) !== '.') {
        return setCursor(newCursor - 1);
      }

      if (_diffOfChar > -2) {
        return setCursor(newCursor);
      }

      return setCursor(selectionStart);
    }

    var diffOfChar = normalizedValue.length - newValue.length;
    return setCursor(selectionStart + diffOfChar);
  };

  var handleBlur = function handleBlur(event) {
    setFocused(false);
    onBlur(event);
  };

  var handleFocus = function handleFocus(event) {
    setFocused(true);
    onFocus(event);
  };

  return _react["default"].createElement(_container["default"], {
    id: id,
    className: className,
    style: style
  }, _react["default"].createElement(_label["default"], {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    inputId: inputId,
    readOnly: isReadOnly,
    id: labelId,
    size: size
  }), _react["default"].createElement(_relativeElement["default"], null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_iconContainer["default"], {
    iconPosition: iconPosition,
    readOnly: readOnly,
    error: error,
    size: size
  }, icon)), _react["default"].createElement(_styled.StyledInput, {
    ref: inputRef,
    id: inputId,
    name: name,
    type: "text",
    value: currentValue,
    placeholder: placeholder,
    onChange: handleChange,
    tabIndex: tabIndex,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: onClick,
    onKeyDown: onKeyDown,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    iconPosition: iconPosition,
    icon: icon,
    error: error,
    variant: variant,
    size: size,
    valueAlignment: valueAlignment,
    borderRadius: borderRadius,
    pattern: "\\d*"
  })), _react["default"].createElement(_RenderIf["default"], {
    isTrue: bottomHelpText
  }, _react["default"].createElement(_helpText["default"], {
    alignSelf: "center"
  }, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: error
  }, _react["default"].createElement(_errorText["default"], {
    alignSelf: "center",
    id: errorMessageId
  }, error)));
});
PercentInput.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  name: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
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
  onKeyDown: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare']),
  id: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  minimumIntegerDigits: _propTypes["default"].number,
  minimumFractionDigits: _propTypes["default"].number,
  maximumFractionDigits: _propTypes["default"].number,
  minimumSignificantDigits: _propTypes["default"].number,
  maximumSignificantDigits: _propTypes["default"].number,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  valueAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
PercentInput.defaultProps = {
  value: undefined,
  name: undefined,
  placeholder: null,
  icon: undefined,
  iconPosition: 'left',
  bottomHelpText: null,
  required: false,
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  className: undefined,
  style: undefined,
  variant: 'default',
  id: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  locale: undefined,
  minimumIntegerDigits: undefined,
  minimumFractionDigits: undefined,
  maximumFractionDigits: undefined,
  minimumSignificantDigits: undefined,
  maximumSignificantDigits: undefined,
  size: 'medium',
  valueAlignment: 'left',
  borderRadius: 'rounded'
};
var _default = PercentInput;
exports["default"] = _default;