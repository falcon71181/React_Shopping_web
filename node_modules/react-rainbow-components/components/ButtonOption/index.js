"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ButtonOption;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _context = require("../ButtonGroupPicker/context");

var _hiddenElement = _interopRequireDefault(require("../Structural/hiddenElement"));

var _styled = require("./styled");

var _isOptionSelected = _interopRequireDefault(require("./helpers/isOptionSelected"));

var _hooks = require("../../libs/hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ButtonOption(props) {
  var inputId = (0, _hooks.useUniqueIdentifier)('button-option');
  var className = props.className,
      style = props.style,
      name = props.name,
      label = props.label,
      disabled = props.disabled,
      onClick = props.onClick;

  var _useContext = (0, _react.useContext)(_context.ButtonGroupPickerContext),
      type = _useContext.type,
      values = _useContext.values,
      contextName = _useContext.name,
      onChange = _useContext.onChange,
      ariaDescribedBy = _useContext.ariaDescribedBy,
      size = _useContext.size,
      variant = _useContext.variant;

  var checked = (0, _isOptionSelected["default"])(values, name);

  var handleClick = function handleClick() {
    return onClick({
      isSelected: checked
    });
  };

  var isShaded = variant === 'shaded';
  return _react["default"].createElement(_styled.StyledLabel, {
    className: className,
    style: style,
    onClick: handleClick,
    checked: checked,
    htmlFor: inputId,
    variant: variant
  }, _react["default"].createElement(_hiddenElement["default"], {
    id: inputId,
    as: "input",
    type: type,
    name: contextName,
    value: name,
    "aria-describedby": ariaDescribedBy,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), _react["default"].createElement(_styled.StyledText, {
    size: size,
    disabled: disabled,
    checked: checked,
    variant: variant
  }, label), _react["default"].createElement(_RenderIf["default"], {
    isTrue: isShaded
  }, _react["default"].createElement(_styled.StyledDivider, null)));
}

ButtonOption.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  name: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
ButtonOption.defaultProps = {
  className: undefined,
  style: undefined,
  name: undefined,
  label: undefined,
  disabled: false,
  onClick: function onClick() {}
};