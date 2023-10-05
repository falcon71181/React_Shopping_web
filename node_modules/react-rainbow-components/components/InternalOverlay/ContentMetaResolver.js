"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: fixed;\n    top: -3000;\n    left: -3000;\n"])));

var ContentMetaResolver = function ContentMetaResolver(props) {
  var Content = props.component,
      onResolved = props.onResolved,
      children = props.children;
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _ref$current$getClien = ref.current.getClientRects()[0],
        height = _ref$current$getClien.height,
        width = _ref$current$getClien.width;
    onResolved({
      height: height,
      width: width
    });
  }, []);

  var content = children || _react["default"].createElement(Content, null);

  return (0, _reactDom.createPortal)(_react["default"].createElement(Container, {
    ref: ref
  }, content), document.body);
};

var _default = ContentMetaResolver;
exports["default"] = _default;