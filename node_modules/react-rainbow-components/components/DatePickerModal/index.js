"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatePickerModal;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _styled = require("./styled");

function DatePickerModal(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      locale = props.locale,
      minDate = props.minDate,
      maxDate = props.maxDate,
      selectionType = props.selectionType,
      variant = props.variant,
      value = props.value,
      onChange = props.onChange,
      onRequestClose = props.onRequestClose,
      isOpen = props.isOpen,
      title = props.title,
      disabledDays = props.disabledDays,
      borderRadius = props.borderRadius;
  var calendarId = id && "".concat(id, "_calendar");
  return _react["default"].createElement(_styled.StyledModal, {
    id: id,
    className: className,
    style: style,
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    borderRadius: borderRadius
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: title
  }, _react["default"].createElement(_styled.Header, {
    variant: variant
  }, _react["default"].createElement(_styled.HeaderTitle, null, title))), _react["default"].createElement(_styled.StyledCalendar, {
    id: calendarId,
    locale: locale,
    minDate: minDate,
    maxDate: maxDate,
    selectionType: selectionType,
    variant: variant,
    value: value,
    onChange: onChange,
    disabledDays: disabledDays
  }));
}

DatePickerModal.propTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  locale: _propTypes["default"].string,
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  selectionType: _propTypes["default"].oneOf(['single', 'range']),
  variant: _propTypes["default"].oneOf(['single', 'double']),
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]))]),
  isOpen: _propTypes["default"].bool,
  onRequestClose: _propTypes["default"].func,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)])),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DatePickerModal.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  locale: undefined,
  maxDate: undefined,
  minDate: undefined,
  selectionType: 'single',
  variant: 'single',
  value: undefined,
  isOpen: false,
  onChange: function onChange() {},
  onRequestClose: function onRequestClose() {},
  title: undefined,
  disabledDays: [],
  borderRadius: 'rounded'
};