"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultPositionResolver;

var _resolverBottomLeft = _interopRequireDefault(require("./resolverBottomLeft"));

var _resolverBottomRight = _interopRequireDefault(require("./resolverBottomRight"));

var _resolverUpLeft = _interopRequireDefault(require("./resolverUpLeft"));

var _resolverUpRight = _interopRequireDefault(require("./resolverUpRight"));

var _resolverBottomCenter = _interopRequireDefault(require("./resolverBottomCenter"));

var _resolverUpCenter = _interopRequireDefault(require("./resolverUpCenter"));

var _resolverCenterLeft = _interopRequireDefault(require("./resolverCenterLeft"));

var _resolverCenterRight = _interopRequireDefault(require("./resolverCenterRight"));

var _resolverTopLeft = _interopRequireDefault(require("./resolverTopLeft"));

var _resolverTopRight = _interopRequireDefault(require("./resolverTopRight"));

var DEFAULT_MARGIN = 5;
var resolvers = [_resolverBottomLeft["default"], _resolverBottomRight["default"], _resolverBottomCenter["default"], _resolverUpLeft["default"], _resolverUpRight["default"], _resolverUpCenter["default"], _resolverCenterLeft["default"], _resolverCenterRight["default"], _resolverTopLeft["default"], _resolverTopRight["default"]];

function defaultPositionResolver(opts) {
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