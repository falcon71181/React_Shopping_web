"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LoadingShape = function LoadingShape(props) {
  var className = props.className,
      style = props.style,
      shape = props.shape,
      variant = props.variant;
  var shapeRef = (0, _react.useRef)();
  var isImage = variant === 'image';
  var isAvatar = variant === 'avatar';
  (0, _react.useEffect)(function () {
    var element = shapeRef.current;

    if (shape === 'square' || shape === 'circle') {
      element.style.width = "".concat(element.offsetHeight, "px");
    } else {
      element.style.width = '100%';
    }
  });
  return _react["default"].createElement(_styled.StyledShapeContainer, {
    className: className,
    style: style
  }, _react["default"].createElement(_styled.StyledLoadingShape, {
    shape: shape,
    variant: variant,
    ref: shapeRef
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: isImage
  }, _react["default"].createElement(_styled.StyledImageIcon, {
    shape: shape
  })), _react["default"].createElement(_RenderIf["default"], {
    isTrue: isAvatar
  }, _react["default"].createElement(_styled.StyledAvatarIcon, {
    shape: shape
  }))));
};

LoadingShape.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  shape: _propTypes["default"].oneOf(['circle', 'rect', 'rounded-rect', 'square']),
  variant: _propTypes["default"].oneOf(['solid', 'image', 'avatar'])
};
LoadingShape.defaultProps = {
  className: undefined,
  style: undefined,
  shape: 'rounded-rect',
  variant: 'solid'
};
var _default = LoadingShape;
exports["default"] = _default;