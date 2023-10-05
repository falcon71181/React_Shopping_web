"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _label = _interopRequireDefault(require("../Input/label"));

var _iconContainer = _interopRequireDefault(require("../Input/styled/iconContainer"));

var _relativeElement = _interopRequireDefault(require("../Structural/relativeElement"));

var _input = _interopRequireDefault(require("./styled/input"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _strengthBar = _interopRequireDefault(require("./strengthBar"));

var _styled = require("./styled");

var _hooks = require("../../libs/hooks");

var _usePasswordState = _interopRequireDefault(require("./hooks/usePasswordState"));

var _useReduxForm2 = _interopRequireDefault(require("../../libs/hooks/useReduxForm"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StrongPasswordInput = _react["default"].forwardRef(function (props, ref) {
  var _useReduxForm = (0, _useReduxForm2["default"])(props),
      id = _useReduxForm.id,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      bottomHelpText = _useReduxForm.bottomHelpText,
      error = _useReduxForm.error,
      passwordState = _useReduxForm.passwordState,
      passwordStateLabels = _useReduxForm.passwordStateLabels,
      value = _useReduxForm.value,
      placeholder = _useReduxForm.placeholder,
      onChange = _useReduxForm.onChange,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      tabIndex = _useReduxForm.tabIndex,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      onClick = _useReduxForm.onClick,
      onKeyDown = _useReduxForm.onKeyDown,
      maxLength = _useReduxForm.maxLength,
      minLength = _useReduxForm.minLength,
      icon = _useReduxForm.icon,
      required = _useReduxForm.required,
      name = _useReduxForm.name,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      iconPosition = _useReduxForm.iconPosition,
      size = _useReduxForm.size,
      borderRadius = _useReduxForm.borderRadius;

  var inputId = (0, _hooks.useUniqueIdentifier)('input');
  var errorMessageId = (0, _hooks.useErrorMessageId)(error);
  var labelId = (0, _hooks.useLabelId)(label);
  var status = (0, _usePasswordState["default"])(passwordState);
  var inputRef = (0, _react.useRef)();
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
    readOnly: readOnly,
    id: labelId,
    size: size
  }), _react["default"].createElement(_relativeElement["default"], null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_iconContainer["default"], {
    iconPosition: iconPosition,
    readOnly: readOnly,
    error: error,
    size: size
  }, icon)), _react["default"].createElement(_input["default"], {
    id: inputId,
    name: name,
    type: "password",
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    tabIndex: tabIndex,
    onFocus: onFocus,
    onBlur: onBlur,
    onClick: onClick,
    onKeyDown: onKeyDown,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    maxLength: maxLength,
    minLength: minLength,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    iconPosition: iconPosition,
    icon: icon,
    error: error,
    status: status,
    ref: inputRef,
    size: size,
    borderRadius: borderRadius
  })), _react["default"].createElement(_strengthBar["default"], {
    passwordState: passwordState,
    passwordStateLabels: passwordStateLabels
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: bottomHelpText
  }, _react["default"].createElement(_styled.StyledHelpText, {
    alignSelf: "center"
  }, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: error
  }, _react["default"].createElement(_errorText["default"], {
    alignSelf: "center",
    id: errorMessageId
  }, error)));
});

StrongPasswordInput.propTypes = {
  value: _propTypes["default"].string,
  name: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  maxLength: _propTypes["default"].number,
  minLength: _propTypes["default"].number,
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
  id: _propTypes["default"].string,
  passwordState: _propTypes["default"].oneOf(['weak', 'average', 'strong']),
  passwordStateLabels: _propTypes["default"].shape({
    weak: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    average: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    strong: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
  }),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
StrongPasswordInput.defaultProps = {
  value: undefined,
  name: undefined,
  placeholder: null,
  icon: undefined,
  iconPosition: 'left',
  maxLength: undefined,
  minLength: undefined,
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
  id: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  passwordState: undefined,
  passwordStateLabels: undefined,
  size: 'medium',
  borderRadius: 'rounded'
};
var _default = StrongPasswordInput;
exports["default"] = _default;