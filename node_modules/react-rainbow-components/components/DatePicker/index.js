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

var _constants = require("../../libs/constants");

var _calendarIcon = _interopRequireDefault(require("./calendarIcon"));

var _useFormatDate = _interopRequireDefault(require("./hooks/useFormatDate"));

var _DatePickerModal = _interopRequireDefault(require("../DatePickerModal"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DatePicker = _react["default"].forwardRef(function (props, ref) {
  var _useReduxForm = (0, _hooks.useReduxForm)(props),
      value = _useReduxForm.value,
      minDate = _useReduxForm.minDate,
      maxDate = _useReduxForm.maxDate,
      placeholder = _useReduxForm.placeholder,
      onClick = _useReduxForm.onClick,
      onChange = _useReduxForm.onChange,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      label = _useReduxForm.label,
      required = _useReduxForm.required,
      style = _useReduxForm.style,
      className = _useReduxForm.className,
      formatStyle = _useReduxForm.formatStyle,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      name = _useReduxForm.name,
      bottomHelpText = _useReduxForm.bottomHelpText,
      isCentered = _useReduxForm.isCentered,
      error = _useReduxForm.error,
      readOnly = _useReduxForm.readOnly,
      disabled = _useReduxForm.disabled,
      tabIndex = _useReduxForm.tabIndex,
      id = _useReduxForm.id,
      locale = _useReduxForm.locale,
      variant = _useReduxForm.variant,
      selectionType = _useReduxForm.selectionType,
      iconInProps = _useReduxForm.icon,
      disabledDays = _useReduxForm.disabledDays,
      size = _useReduxForm.size,
      valueAlignment = _useReduxForm.valueAlignment,
      borderRadius = _useReduxForm.borderRadius;

  var currentLocale = (0, _hooks.useLocale)(locale);
  var inputRef = (0, _react.useRef)();
  var formattedDate = (0, _useFormatDate["default"])({
    value: value,
    format: formatStyle,
    locale: currentLocale,
    selectionType: selectionType
  });

  var _useDisclosure = (0, _hooks.useDisclosure)(false),
      isOpen = _useDisclosure.isOpen,
      openModal = _useDisclosure.open,
      closeModal = _useDisclosure.close;

  var modalId = id && "".concat(id, "_modal");
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

  var handleFocus = function handleFocus() {
    onFocus(value);
  };

  var handleBlur = function handleBlur() {
    onBlur(value);
  };

  var handleChange = (0, _react.useCallback)(function (newValue) {
    if (selectionType === 'single' || newValue.length > 1) {
      closeModal();
    }

    onChange(newValue);
  }, [closeModal, onChange, selectionType]);
  var handleClick = (0, _react.useCallback)(function (event) {
    if (!readOnly) {
      openModal();
      onClick(event);
    }
  }, [onClick, openModal, readOnly]);
  var handleKeyDown = (0, _react.useCallback)(function (_ref) {
    var keyCode = _ref.keyCode;
    var shouldOpenModal = (keyCode === _constants.ENTER_KEY || keyCode === _constants.SPACE_KEY) && !readOnly;
    if (shouldOpenModal) openModal();
  }, [openModal, readOnly]);

  var icon = iconInProps || _react["default"].createElement(_calendarIcon["default"], null);

  return _react["default"].createElement(_styled.StyledContainer, {
    id: id,
    className: className,
    style: style
  }, _react["default"].createElement(_styled.StyledInput, {
    ref: inputRef,
    label: label,
    placeholder: placeholder,
    icon: icon,
    iconPosition: "right",
    required: required,
    value: formattedDate,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    labelAlignment: labelAlignment,
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
  }), _react["default"].createElement(_DatePickerModal["default"], {
    id: modalId,
    isOpen: isOpen,
    title: formattedDate || placeholder,
    variant: variant,
    locale: currentLocale,
    selectionType: selectionType,
    minDate: minDate,
    maxDate: maxDate,
    value: value,
    onChange: handleChange,
    onRequestClose: closeModal,
    disabledDays: disabledDays,
    borderRadius: borderRadius
  }));
});

DatePicker.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]))]),
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  formatStyle: _propTypes["default"].oneOf(['small', 'medium', 'large']),
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
  locale: _propTypes["default"].string,
  selectionType: _propTypes["default"].oneOf(['single', 'range']),
  variant: _propTypes["default"].oneOf(['single', 'double']),
  icon: _propTypes["default"].node,
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)])),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  valueAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DatePicker.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  formatStyle: 'medium',
  onChange: function onChange() {},
  placeholder: undefined,
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
  locale: undefined,
  selectionType: 'single',
  variant: 'single',
  icon: undefined,
  disabledDays: [],
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};
var _default = DatePicker;
exports["default"] = _default;