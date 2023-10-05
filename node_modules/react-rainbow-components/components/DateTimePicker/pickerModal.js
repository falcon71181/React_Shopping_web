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

var _extractDate = _interopRequireDefault(require("./helpers/extractDate"));

var _extractTime = _interopRequireDefault(require("./helpers/extractTime"));

var _formatDateTime = _interopRequireDefault(require("./helpers/formatDateTime"));

var _modal = _interopRequireDefault(require("./styled/modal"));

var _header = _interopRequireDefault(require("./styled/header"));

var _title = _interopRequireDefault(require("./styled/title"));

var _responsiveContainer = _interopRequireDefault(require("./styled/responsiveContainer"));

var _calendar = _interopRequireDefault(require("./styled/calendar"));

var _divider = _interopRequireDefault(require("./styled/divider"));

var _timeSelect = _interopRequireDefault(require("./styled/timeSelect"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DateTimePickerModal(props) {
  var id = props.id,
      isOpen = props.isOpen,
      title = props.title,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      formatStyle = props.formatStyle,
      okLabel = props.okLabel,
      cancelLabel = props.cancelLabel,
      onRequestClose = props.onRequestClose,
      onChange = props.onChange,
      locale = props.locale,
      hour24 = props.hour24,
      disabledDays = props.disabledDays,
      borderRadius = props.borderRadius;

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _extractTime["default"])(value, hour24)),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      time = _useState4[0],
      setTime = _useState4[1];

  var _useState5 = (0, _react.useState)(title),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      modalTitle = _useState6[0],
      setModalTitle = _useState6[1];

  (0, _react.useEffect)(function () {
    setDate(value);
    setTime(!value ? '' : (0, _extractTime["default"])(value, hour24));
  }, [isOpen, value, hour24]);
  (0, _react.useEffect)(function () {
    var currentDateTime = new Date("".concat((0, _extractDate["default"])(date), " ").concat(time));
    setModalTitle((0, _formatDateTime["default"])(currentDateTime, formatStyle, locale, hour24));
  }, [date, time, formatStyle, locale, hour24]);

  var handleChange = function handleChange(selectedTime) {
    var currentValue = new Date("".concat((0, _extractDate["default"])(date), " ").concat(selectedTime));
    onChange(currentValue);
  };

  var handleDateChange = function handleDateChange(selectedDate) {
    setDate(selectedDate);

    if (!value && !time) {
      setTime('12:00 AM');
    }
  };

  return _react["default"].createElement(_modal["default"], {
    id: id,
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    borderRadius: borderRadius
  }, _react["default"].createElement(_header["default"], null, _react["default"].createElement(_title["default"], null, modalTitle)), _react["default"].createElement(_responsiveContainer["default"], null, _react["default"].createElement(_calendar["default"], {
    value: date,
    locale: locale,
    minDate: minDate,
    maxDate: maxDate,
    formatStyle: formatStyle,
    onChange: handleDateChange,
    disabledDays: disabledDays
  }), _react["default"].createElement(_divider["default"], null), _react["default"].createElement(_timeSelect["default"], {
    value: time,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    onCloseModal: onRequestClose,
    onChange: handleChange,
    hour24: hour24
  })));
}

DateTimePickerModal.propTypes = {
  id: _propTypes["default"].string,
  title: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  formatStyle: _propTypes["default"].oneOf(['small', 'medium', 'large']).isRequired,
  onRequestClose: _propTypes["default"].func.isRequired,
  okLabel: _propTypes["default"].string,
  cancelLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  hour24: _propTypes["default"].bool,
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)])),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DateTimePickerModal.defaultProps = {
  id: undefined,
  title: undefined,
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  okLabel: 'Ok',
  cancelLabel: 'Cancel',
  onChange: function onChange() {},
  locale: undefined,
  hour24: false,
  disabledDays: [],
  borderRadius: 'rounded'
};
var _default = DateTimePickerModal;
exports["default"] = _default;