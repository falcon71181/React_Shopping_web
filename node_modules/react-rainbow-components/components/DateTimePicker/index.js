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

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _Input = _interopRequireDefault(require("../Input"));

var _icon = _interopRequireDefault(require("./icon"));

var _pickerModal = _interopRequireDefault(require("./pickerModal"));

var _formatDateTime = _interopRequireDefault(require("./helpers/formatDateTime"));

var _constants = require("../../libs/constants");

var _container = _interopRequireDefault(require("./styled/container"));

var _context = require("../Application/context");

var _utils = require("../../libs/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DateTimePicker = _react["default"].forwardRef(function (props, ref) {
  var placeholder = props.placeholder,
      labelAlignment = props.labelAlignment,
      hideLabel = props.hideLabel,
      required = props.required,
      name = props.name,
      label = props.label,
      error = props.error,
      readOnly = props.readOnly,
      disabled = props.disabled,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      id = props.id,
      className = props.className,
      style = props.style,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      formatStyle = props.formatStyle,
      okLabel = props.okLabel,
      cancelLabel = props.cancelLabel,
      isCentered = props.isCentered,
      bottomHelpText = props.bottomHelpText,
      hour24 = props.hour24,
      localeProp = props.locale,
      iconInProps = props.icon,
      disabledDays = props.disabledDays,
      size = props.size,
      valueAlignment = props.valueAlignment,
      borderRadius = props.borderRadius;
  var inputRef = (0, _react.useRef)();
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
  var context = (0, _react.useContext)(_context.AppContext);
  var locale = (0, _utils.getLocale)(context, localeProp);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _formatDateTime["default"])(value, formatStyle, locale, hour24)),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      formattedDatetime = _useState4[0],
      setFormattedDatetime = _useState4[1];

  (0, _react.useEffect)(function () {
    setFormattedDatetime((0, _formatDateTime["default"])(value, formatStyle, locale, hour24));
  }, [value, formatStyle, locale, hour24]);

  var openModal = function openModal(event) {
    if (!readOnly) {
      setIsOpen(true);
      onClick(event);
    }
  };

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  var handleFocus = function handleFocus() {
    onFocus(value);
  };

  var handleBlur = function handleBlur() {
    onBlur(value);
  };

  var handleKeyDown = function handleKeyDown(_ref) {
    var keyCode = _ref.keyCode;
    var shouldOpenModal = (keyCode === _constants.ENTER_KEY || keyCode === _constants.SPACE_KEY) && !readOnly;

    if (shouldOpenModal) {
      setIsOpen(true);
    }
  };

  var handleChange = function handleChange() {
    closeModal();
    onChange.apply(void 0, arguments);
  };

  var icon = iconInProps || _react["default"].createElement(_icon["default"], null);

  return _react["default"].createElement(_container["default"], {
    id: id,
    className: className,
    style: style
  }, _react["default"].createElement(_Input["default"], {
    ref: inputRef,
    label: label,
    placeholder: placeholder,
    icon: icon,
    iconPosition: "right",
    required: required,
    value: formattedDatetime,
    onKeyDown: handleKeyDown,
    onClick: openModal,
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
    autoComplete: "off",
    size: size,
    valueAlignment: valueAlignment,
    borderRadius: borderRadius
  }), _react["default"].createElement(_pickerModal["default"], {
    id: modalId,
    isOpen: isOpen,
    title: formattedDatetime,
    onRequestClose: closeModal,
    formatStyle: formatStyle,
    value: value,
    onChange: handleChange,
    minDate: minDate,
    maxDate: maxDate,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    locale: locale,
    hour24: hour24,
    disabledDays: disabledDays,
    borderRadius: borderRadius
  }));
});

DateTimePicker.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  formatStyle: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  name: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  isCentered: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  readOnly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  okLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  cancelLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  locale: _propTypes["default"].string,
  hour24: _propTypes["default"].bool,
  icon: _propTypes["default"].node,
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)])),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  valueAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DateTimePicker.defaultProps = {
  placeholder: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  required: false,
  name: undefined,
  error: null,
  readOnly: false,
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  id: undefined,
  className: undefined,
  style: undefined,
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  formatStyle: 'medium',
  okLabel: 'Ok',
  cancelLabel: 'Cancel',
  bottomHelpText: '',
  isCentered: false,
  locale: undefined,
  hour24: false,
  icon: undefined,
  disabledDays: [],
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};

var _default = (0, _withReduxForm["default"])(DateTimePicker);

exports["default"] = _default;