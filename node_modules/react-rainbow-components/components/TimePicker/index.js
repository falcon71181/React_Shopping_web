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

var _clock = _interopRequireDefault(require("./icons/clock"));

var _pickerInput = _interopRequireDefault(require("../Input/pickerInput"));

var _timeSelect = _interopRequireDefault(require("./timeSelect"));

var _get12HourTime = _interopRequireDefault(require("./helpers/get12HourTime"));

var _getInputValue = _interopRequireDefault(require("./helpers/getInputValue"));

var _constants = require("../../libs/constants");

var _container = _interopRequireDefault(require("./styled/container"));

var _modal = _interopRequireDefault(require("./styled/modal"));

var _hooks = require("../../libs/hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TimePicker = _react["default"].forwardRef(function (props, ref) {
  var _useReduxForm = (0, _hooks.useReduxForm)(props),
      placeholder = _useReduxForm.placeholder,
      label = _useReduxForm.label,
      required = _useReduxForm.required,
      style = _useReduxForm.style,
      className = _useReduxForm.className,
      hideLabel = _useReduxForm.hideLabel,
      name = _useReduxForm.name,
      bottomHelpText = _useReduxForm.bottomHelpText,
      isCentered = _useReduxForm.isCentered,
      error = _useReduxForm.error,
      readOnly = _useReduxForm.readOnly,
      disabled = _useReduxForm.disabled,
      tabIndex = _useReduxForm.tabIndex,
      id = _useReduxForm.id,
      cancelLabel = _useReduxForm.cancelLabel,
      okLabel = _useReduxForm.okLabel,
      onChange = _useReduxForm.onChange,
      hour24 = _useReduxForm.hour24,
      onClick = _useReduxForm.onClick,
      onBlur = _useReduxForm.onBlur,
      onFocus = _useReduxForm.onFocus,
      valueProp = _useReduxForm.value,
      iconInProps = _useReduxForm.icon,
      size = _useReduxForm.size,
      valueAlignment = _useReduxForm.valueAlignment,
      borderRadius = _useReduxForm.borderRadius;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(hour24 ? valueProp : (0, _get12HourTime["default"])(valueProp)),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var inputRef = (0, _react.useRef)();
  var timeSelectRef = (0, _react.useRef)();
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

  var getTriggerInputValue = function getTriggerInputValue() {
    return (0, _getInputValue["default"])(value, placeholder, hour24);
  };

  var setFocusToHourInput = function setFocusToHourInput() {
    timeSelectRef.current.focusHourInput();
  };

  var handleKeyDown = function handleKeyDown(event) {
    var keyCode = event.keyCode;
    var shouldOpenModal = (keyCode === _constants.ENTER_KEY || keyCode === _constants.SPACE_KEY) && !readOnly;

    if (shouldOpenModal) {
      setIsOpen(true);
    }
  };

  var handleClick = function handleClick(event) {
    if (!readOnly) {
      setIsOpen(true);
      onClick(event);
    }
  };

  var handleBlur = function handleBlur() {
    onBlur(valueProp);
  };

  var handleFocus = function handleFocus() {
    onFocus(valueProp);
  };

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  (0, _react.useEffect)(function () {
    setValue(hour24 ? valueProp : (0, _get12HourTime["default"])(valueProp));
  }, [valueProp, hour24]);

  var icon = iconInProps || _react["default"].createElement(_clock["default"], null);

  return _react["default"].createElement(_container["default"], {
    id: id,
    className: className,
    style: style
  }, _react["default"].createElement(_pickerInput["default"], {
    id: "time-picker_time-input",
    ref: inputRef,
    label: label,
    placeholder: placeholder,
    icon: icon,
    iconPosition: "right",
    required: required,
    value: getTriggerInputValue(),
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    hideLabel: hideLabel,
    name: name,
    bottomHelpText: bottomHelpText,
    isCentered: isCentered,
    error: error,
    readOnly: readOnly,
    disabled: disabled,
    tabIndex: tabIndex,
    size: size,
    valueAlignment: valueAlignment,
    borderRadius: borderRadius
  }), _react["default"].createElement(_modal["default"], {
    id: "time-picker_modal",
    isOpen: isOpen,
    onRequestClose: closeModal,
    onOpened: setFocusToHourInput,
    borderRadius: borderRadius
  }, _react["default"].createElement(_timeSelect["default"], {
    onCloseModal: closeModal,
    onChange: onChange,
    cancelLabel: cancelLabel,
    okLabel: okLabel,
    value: value,
    ref: timeSelectRef,
    hour24: hour24
  })));
});

TimePicker.propTypes = {
  value: _propTypes["default"].string,
  cancelLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  okLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onChange: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  isCentered: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  readOnly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  hour24: _propTypes["default"].bool,
  icon: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  valueAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
TimePicker.defaultProps = {
  value: undefined,
  cancelLabel: 'Cancel',
  okLabel: 'OK',
  onChange: function onChange() {},
  placeholder: null,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  required: false,
  name: undefined,
  bottomHelpText: null,
  isCentered: false,
  error: null,
  readOnly: false,
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  id: undefined,
  className: undefined,
  style: undefined,
  hour24: false,
  icon: undefined,
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};
var _default = TimePicker;
exports["default"] = _default;