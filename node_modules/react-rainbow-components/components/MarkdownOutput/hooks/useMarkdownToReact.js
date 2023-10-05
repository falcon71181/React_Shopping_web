"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMarkdown2React;

var _react = _interopRequireWildcard(require("react"));

var _unified = _interopRequireDefault(require("unified"));

var _remarkParse = _interopRequireDefault(require("remark-parse"));

var _remarkRehype = _interopRequireDefault(require("remark-rehype"));

var _rehypeMinifyWhitespace = _interopRequireDefault(require("rehype-minify-whitespace"));

var _rehypeHighlight = _interopRequireDefault(require("rehype-highlight"));

var _rehypeReact = _interopRequireDefault(require("rehype-react"));

var _renderers = require("../renderers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useMarkdown2React(source) {
  var renderer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _renderers.defaultRenderer;
  return (0, _react.useMemo)(function () {
    return (0, _unified["default"])().use(_remarkParse["default"]).use(_remarkRehype["default"]).use(_rehypeHighlight["default"], {
      subset: false
    }).use(_rehypeReact["default"], {
      createElement: _react["default"].createElement,
      components: renderer
    }).use(_rehypeMinifyWhitespace["default"], {
      newlines: true
    }).processSync(source).result;
  }, [source, renderer]);
}