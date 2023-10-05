"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _valuePropValidation = _interopRequireDefault(require("./helpers/valuePropValidation"));

var _getNormalizedValue = _interopRequireDefault(require("./helpers/getNormalizedValue"));

var _hooks = require("../../libs/hooks");

var _useReduxForm2 = _interopRequireDefault(require("../../libs/hooks/useReduxForm"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _label = _interopRequireDefault(require("../Input/label"));

var _weekDayItems = _interopRequireDefault(require("./weekDayItems"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var WeekDayPicker = _react["default"].forwardRef(function (props, ref) {
  var _useReduxForm = (0, _useReduxForm2["default"])(props),
      id = _useReduxForm.id,
      name = _useReduxForm.name,
      value = _useReduxForm.value,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      bottomHelpText = _useReduxForm.bottomHelpText,
      availableDates = _useReduxForm.availableDates,
      localeProp = _useReduxForm.locale,
      disabled = _useReduxForm.disabled,
      required = _useReduxForm.required,
      readOnly = _useReduxForm.readOnly,
      multiple = _useReduxForm.multiple,
      error = _useReduxForm.error,
      onChange = _useReduxForm.onChange,
      className = _useReduxForm.className,
      style = _useReduxForm.style;

  var locale = (0, _hooks.useLocale)(localeProp);
  var defaultFieldsetName = (0, _hooks.useUniqueIdentifier)('week-day-items');
  var fieldsetName = name || defaultFieldsetName;
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

  var handleOnChange = function handleOnChange(event) {
    var weekDayValue = event.target.value;
    var isChecked = event.target.checked;

    if (!disabled && !readOnly) {
      onChange((0, _getNormalizedValue["default"])(weekDayValue, isChecked, multiple, value));
    }
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
  })), _react["default"].createElement(_weekDayItems["default"], {
    name: fieldsetName,
    value: value,
    availableDates: availableDates,
    locale: locale,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    multiple: multiple,
    error: error,
    onChange: handleOnChange,
    ref: inputRef
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: bottomHelpText
  }, _react["default"].createElement(_styled.StyledHelpText, null, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: error
  }, _react["default"].createElement(_errorText["default"], null, error)));
});

WeekDayPicker.propTypes = {
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_valuePropValidation["default"]), _propTypes["default"].oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  availableDates: _propTypes["default"].arrayOf(_valuePropValidation["default"]),
  locale: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
WeekDayPicker.defaultProps = {
  id: undefined,
  name: undefined,
  value: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: undefined,
  availableDates: [],
  locale: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  multiple: false,
  error: null,
  onChange: function onChange() {},
  className: undefined,
  style: undefined
};
var _default = WeekDayPicker;
exports["default"] = _default;