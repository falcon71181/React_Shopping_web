"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

var _styled = require("../styled");

var _styled2 = require("./styled");

var _commons = require("../commons");

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Default = _react["default"].forwardRef(function (_props, ref) {
  var _useContext = (0, _react.useContext)(_context.ColorPickerContext),
      colors = _useContext.colors;

  var firstRef = (0, _react.useRef)();
  var lastRef = (0, _react.useRef)();
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
  var hasColors = colors.length > 0;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_styled2.StyledSaturationContainer, null, _react["default"].createElement(_commons.Saturation, {
    ref: firstRef
  })), _react["default"].createElement(_styled.StyledFlexContainer, null, _react["default"].createElement(_styled2.StyledSlidersContainer, null, _react["default"].createElement(_commons.Hue, null), _react["default"].createElement(_commons.Alpha, null)), _react["default"].createElement(_commons.Preview, null)), _react["default"].createElement(_styled.StyledFlexContainer, null, _react["default"].createElement(_styled2.StyledHexColorContainer, null, _react["default"].createElement(_commons.Hex, null)), _react["default"].createElement(_styled2.StyledRgbaColorContainer, null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasColors
  }, _react["default"].createElement(_commons.Rgba, null)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: !hasColors
  }, _react["default"].createElement(_commons.Rgba, {
    ref: lastRef
  })))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasColors
  }, _react["default"].createElement(_commons.DefaultColors, {
    ref: lastRef
  })));
});

var _default = Default;
exports["default"] = _default;