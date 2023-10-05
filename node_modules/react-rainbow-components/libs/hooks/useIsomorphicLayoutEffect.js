"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _utils = require("../utils");

var useIsomorphicLayoutEffect = _utils.isServer ? _react.useEffect : _react.useLayoutEffect;
var _default = useIsomorphicLayoutEffect;
exports["default"] = _default;