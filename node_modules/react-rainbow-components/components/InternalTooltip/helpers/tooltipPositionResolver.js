"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tooltipPositionResolver;

var _resolverUpCenter = _interopRequireDefault(require("../../InternalOverlay/helpers/resolverUpCenter"));

var _resolverBottomCenter = _interopRequireDefault(require("../../InternalOverlay/helpers/resolverBottomCenter"));

var _resolverCenterLeft = _interopRequireDefault(require("../../InternalOverlay/helpers/resolverCenterLeft"));

var _resolverCenterRight = _interopRequireDefault(require("../../InternalOverlay/helpers/resolverCenterRight"));

var _resolverCenter = _interopRequireDefault(require("./resolverCenter"));

var DEFAULT_MARGIN = 12;
var resolverMap = {
  top: [_resolverUpCenter["default"], _resolverBottomCenter["default"], _resolverCenterLeft["default"], _resolverCenterRight["default"], _resolverCenter["default"]],
  bottom: [_resolverBottomCenter["default"], _resolverUpCenter["default"], _resolverCenterLeft["default"], _resolverCenterRight["default"], _resolverCenter["default"]],
  left: [_resolverCenterRight["default"], _resolverCenterLeft["default"], _resolverUpCenter["default"], _resolverBottomCenter["default"], _resolverCenter["default"]],
  right: [_resolverCenterLeft["default"], _resolverCenterRight["default"], _resolverUpCenter["default"], _resolverBottomCenter["default"], _resolverCenter["default"]]
};

function tooltipPositionResolver(opts) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var resolvers = resolverMap[position];
  var pos;
  resolvers.some(function (resolver) {
    var ret = resolver(opts, DEFAULT_MARGIN);

    if (ret) {
      pos = ret;
      return true;
    }

    return false;
  });

  if (pos) {
    return pos;
  }

  return {
    top: 0,
    left: 0
  };
}