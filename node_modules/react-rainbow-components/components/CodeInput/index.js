"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputItems = _interopRequireDefault(require("./inputItems"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _label = _interopRequireDefault(require("../Input/label"));

var _hooks = require("../../libs/hooks");

var _hooks2 = require("./hooks");

var _helpers = require("./helpers");

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CodeInput = _react["default"].forwardRef(function (props, ref) {
  var _useReduxForm = (0, _hooks.useReduxForm)(props),
      id = _useReduxForm.id,
      valueProp = _useReduxForm.value,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      bottomHelpText = _useReduxForm.bottomHelpText,
      length = _useReduxForm.length,
      disabled = _useReduxForm.disabled,
      required = _useReduxForm.required,
      readOnly = _useReduxForm.readOnly,
      error = _useReduxForm.error,
      tabIndex = _useReduxForm.tabIndex,
      onClick = _useReduxForm.onClick,
      onChange = _useReduxForm.onChange,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      onKeyDown = _useReduxForm.onKeyDown,
      className = _useReduxForm.className,
      style = _useReduxForm.style;

  var inputRef = (0, _react.useRef)();
  var value = (0, _hooks2.useValueState)(valueProp, length);
  var focusedIndex = (0, _hooks2.useFocusedIndexState)(value, length, disabled, readOnly);
  var previousFocusedIndex = (0, _hooks2.usePreviousIndex)(focusedIndex);
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
    if (previousFocusedIndex !== undefined) {
      (0, _helpers.setFocus)(inputRef);
    }
  }, [inputRef, focusedIndex, previousFocusedIndex]);

  var handleOnChange = function handleOnChange(inputValue, index) {
    var newValue = (0, _helpers.getNormalizedValue)(inputValue, index, value);
    var hasValueChanged = newValue !== valueProp;

    if (hasValueChanged) {
      onChange(newValue);
    }
  };

  var handleOnFocus = function handleOnFocus(event, index) {
    if (focusedIndex !== index) {
      (0, _helpers.setFocus)(inputRef);
    }

    onFocus(event);
  };

  var handleOnPaste = function handleOnPaste(event) {
    onChange((0, _helpers.getNumbersFromClipboard)(event.clipboardData.getData('Text')));
  };

  return _react["default"].createElement(_styled.StyledFieldset, {
    className: className,
    style: style,
    id: id
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: label
  }, _react["default"].createElement(_label["default"], {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    as: "legend"
  })), _react["default"].createElement(_inputItems["default"], {
    value: value,
    disabled: disabled,
    readOnly: readOnly,
    error: error,
    tabIndex: tabIndex,
    onClick: onClick,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onPaste: handleOnPaste,
    focusedIndex: focusedIndex,
    ref: inputRef
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: bottomHelpText
  }, _react["default"].createElement(_styled.StyledHelpText, null, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: error
  }, _react["default"].createElement(_styled.StyledErrorMessage, null, error)));
});

CodeInput.propTypes = {
  id: _propTypes["default"].string,
  value: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  length: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
CodeInput.defaultProps = {
  id: undefined,
  value: '',
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: undefined,
  length: 4,
  disabled: false,
  required: false,
  readOnly: false,
  error: null,
  tabIndex: undefined,
  onClick: function onClick() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  className: undefined,
  style: undefined
};
var _default = CodeInput;
exports["default"] = _default;