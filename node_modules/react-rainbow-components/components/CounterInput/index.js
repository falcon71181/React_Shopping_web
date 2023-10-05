"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../libs/hooks");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _relativeElement = _interopRequireDefault(require("../Structural/relativeElement"));

var _label = _interopRequireDefault(require("../Input/label"));

var _helpText = _interopRequireDefault(require("../Input/styled/helpText"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _plus = _interopRequireDefault(require("./icons/plus"));

var _minus = _interopRequireDefault(require("./icons/minus"));

var _getValue = _interopRequireDefault(require("./helpers/getValue"));

var _getNormalizedValue = _interopRequireDefault(require("./helpers/getNormalizedValue"));

var _isButtonDisabled = _interopRequireDefault(require("./helpers/isButtonDisabled"));

var _isMax = _interopRequireDefault(require("./helpers/isMax"));

var _isMin = _interopRequireDefault(require("./helpers/isMin"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CounterInput = _react["default"].forwardRef(function (props, ref) {
  var _useReduxForm = (0, _hooks.useReduxForm)(props),
      id = _useReduxForm.id,
      name = _useReduxForm.name,
      value = _useReduxForm.value,
      placeholder = _useReduxForm.placeholder,
      _onChange = _useReduxForm.onChange,
      tabIndex = _useReduxForm.tabIndex,
      _onFocus = _useReduxForm.onFocus,
      _onBlur = _useReduxForm.onBlur,
      onClick = _useReduxForm.onClick,
      onKeyDown = _useReduxForm.onKeyDown,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      required = _useReduxForm.required,
      min = _useReduxForm.min,
      max = _useReduxForm.max,
      isBare = _useReduxForm.isBare,
      error = _useReduxForm.error,
      variant = _useReduxForm.variant,
      step = _useReduxForm.step,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      bottomHelpText = _useReduxForm.bottomHelpText,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      size = _useReduxForm.size,
      borderRadius = _useReduxForm.borderRadius;

  var inputRef = (0, _react.useRef)(null);
  var inputId = (0, _hooks.useUniqueIdentifier)('counter-input');
  var errorMessageId = (0, _hooks.useErrorMessageId)(error);
  var labelId = (0, _hooks.useLabelId)(label);
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

  var handlePlusMouseDown = function handlePlusMouseDown(event) {
    event.preventDefault();
    inputRef.current.focus();
    var val = (0, _getValue["default"])(Number(value));
    if (val < min) return _onChange((0, _getNormalizedValue["default"])(min));
    return _onChange((0, _getNormalizedValue["default"])(val + step));
  };

  var handleMinusMouseDown = function handleMinusMouseDown(event) {
    event.preventDefault();
    inputRef.current.focus();
    var val = (0, _getValue["default"])(Number(value));
    if (val > max) return _onChange((0, _getNormalizedValue["default"])(max));
    return _onChange((0, _getNormalizedValue["default"])(val - step));
  };

  var handleEvents = function handleEvents(event, callback) {
    if (event.target.value === '') {
      return callback();
    }

    return callback(Number(event.target.value));
  };

  return _react["default"].createElement(_styled.StyledContainer, {
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
  }), _react["default"].createElement(_relativeElement["default"], null, _react["default"].createElement(_styled.ButtonContainer, {
    iconPosition: "left",
    readOnly: readOnly,
    error: error
  }, _react["default"].createElement(_styled.StyledButton, {
    variant: "base",
    size: "small",
    icon: _react["default"].createElement(_minus["default"], null),
    onMouseDown: handleMinusMouseDown,
    tabIndex: -1,
    disabled: (0, _isButtonDisabled["default"])((0, _isMin["default"])(value, step, min), disabled, readOnly),
    assistiveText: "minus button"
  })), _react["default"].createElement(_styled.StyledInput, {
    id: inputId,
    name: name,
    type: "number",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(event) {
      return handleEvents(event, _onChange);
    },
    tabIndex: tabIndex,
    onFocus: function onFocus(event) {
      return handleEvents(event, _onFocus);
    },
    onBlur: function onBlur(event) {
      return handleEvents(event, _onBlur);
    },
    onClick: onClick,
    onKeyDown: onKeyDown,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    min: min,
    max: max,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    ref: inputRef,
    isBare: isBare,
    error: error,
    variant: variant,
    step: step,
    autoComplete: "off",
    size: size,
    borderRadius: borderRadius
  }), _react["default"].createElement(_styled.ButtonContainer, {
    iconPosition: "right",
    readOnly: readOnly,
    error: error
  }, _react["default"].createElement(_styled.StyledButton, {
    variant: "base",
    size: "small",
    icon: _react["default"].createElement(_plus["default"], null),
    onMouseDown: handlePlusMouseDown,
    disabled: (0, _isButtonDisabled["default"])((0, _isMax["default"])(value, step, max), disabled, readOnly),
    tabIndex: -1,
    assistiveText: "plus button"
  }))), _react["default"].createElement(_RenderIf["default"], {
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

var _default = (0, _withReduxForm["default"])(CounterInput);

exports["default"] = _default;
CounterInput.propTypes = {
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  placeholder: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare']),
  step: _propTypes["default"].number,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
CounterInput.defaultProps = {
  id: undefined,
  name: undefined,
  value: undefined,
  placeholder: null,
  tabIndex: undefined,
  disabled: false,
  readOnly: false,
  required: false,
  min: undefined,
  max: undefined,
  error: null,
  step: 1,
  variant: 'default',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: null,
  className: undefined,
  style: undefined,
  size: 'mediun',
  borderRadius: 'rounded'
};