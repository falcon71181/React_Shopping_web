"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("../../context");

var _styled = require("../../styled");

var _styled2 = _interopRequireDefault(require("./styled"));

var _color = require("../../../../styles/helpers/color");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Rgba = _react["default"].forwardRef(function (_props, ref) {
  var _ref = (0, _react.useContext)(_context.ColorPickerContext) || {},
      rgba = _ref.rgba,
      hsv = _ref.hsv,
      hex = _ref.hex,
      tabIndex = _ref.tabIndex,
      onChange = _ref.onChange;

  var firstRef = (0, _react.useRef)();
  var lastRef = (0, _react.useRef)();
  var isAlphaEmpty = (0, _react.useRef)(false);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        firstRef.current.focus();
      },
      click: function click() {
        firstRef.current.click();
      },
      blur: function blur() {
        lastRef.current.blur();
      }
    };
  });

  var handleAlphaChange = function handleAlphaChange(event) {
    isAlphaEmpty.current = event.target.value === '';
    var value = parseInt(event.target.value, 10);
    var newApha = isNaN(value) ? 0 : Math.max(0, Math.min(value, 100)) / 100;
    rgba[3] = newApha;
    onChange({
      hex: hex,
      rgba: rgba,
      hsv: hsv
    });
  };

  var handleChange = function handleChange(index, event) {
    var value = parseInt(event.target.value, 10);

    if (isNaN(value)) {
      rgba[index] = 0;
    } else {
      rgba[index] = Math.max(0, Math.min(value, 255));
    }

    var rgbaColor = (0, _color.recomposeColor)({
      type: 'rgba',
      values: rgba
    });
    onChange({
      hex: "#".concat((0, _color.rgbaToHex)(rgbaColor)),
      rgba: rgba,
      hsv: (0, _color.decomposeColor)((0, _color.rgbToHsv)(rgbaColor)).values
    });
  };

  var _rgba = (0, _slicedToArray2["default"])(rgba, 4),
      r = _rgba[0],
      g = _rgba[1],
      b = _rgba[2],
      a = _rgba[3];

  var alpha = isAlphaEmpty.current ? '' : Math.round(a * 100);
  return _react["default"].createElement(_styled.StyledFlexContainer, null, _react["default"].createElement(_styled2["default"], {
    type: "number",
    value: r,
    bottomHelpText: "R",
    onChange: function onChange(event) {
      return handleChange(0, event);
    },
    tabIndex: tabIndex,
    ref: firstRef
  }), _react["default"].createElement(_styled2["default"], {
    type: "number",
    value: g,
    bottomHelpText: "G",
    onChange: function onChange(event) {
      return handleChange(1, event);
    },
    tabIndex: tabIndex
  }), _react["default"].createElement(_styled2["default"], {
    type: "number",
    value: b,
    bottomHelpText: "B",
    onChange: function onChange(event) {
      return handleChange(2, event);
    },
    tabIndex: tabIndex
  }), _react["default"].createElement(_styled2["default"], {
    type: "number",
    value: alpha,
    bottomHelpText: "ALPHA",
    onChange: handleAlphaChange,
    tabIndex: tabIndex,
    ref: lastRef
  }));
});

var _default = Rgba;
exports["default"] = _default;