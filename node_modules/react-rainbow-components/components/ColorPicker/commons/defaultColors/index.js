"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../../context");

var _styled = require("./styled");

var _color = require("../../../../styles/helpers/color");

var _hooks = require("../../../../libs/hooks");

var _color2 = _interopRequireDefault(require("./color"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DefaultColors = _react["default"].forwardRef(function (_props, ref) {
  var _useContext = (0, _react.useContext)(_context.ColorPickerContext),
      colors = _useContext.colors,
      rgba = _useContext.rgba,
      tabIndexProp = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var rgbaColor = (0, _color.recomposeColor)({
    type: 'rgba',
    values: rgba
  });
  var name = (0, _hooks.useUniqueIdentifier)('color-picker-default');
  var listColors = colors.map(function (color, index) {
    var tabIndex = index === 0 ? tabIndexProp : -1;
    var isSelected = (0, _color.colorToRgba)(color) === rgbaColor;
    var isFirstInput = index === 0;
    var inputRef = isFirstInput ? ref : undefined;
    return _react["default"].createElement(_color2["default"], {
      key: color,
      color: color,
      name: name,
      isChecked: isSelected,
      onChange: onChange,
      ref: inputRef,
      tabIndex: tabIndex
    });
  });
  return _react["default"].createElement(_styled.StyledContainer, null, _react["default"].createElement(_styled.StyledColors, null, listColors));
});

var _default = DefaultColors;
exports["default"] = _default;