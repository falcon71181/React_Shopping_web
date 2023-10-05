"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverTopLeft;

function resolverTopLeft(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content;

  if (trigger.leftUpAnchor.x - margin - content.width >= 0) {
    return {
      top: 0,
      left: trigger.leftUpAnchor.x - margin - content.width
    };
  }

  return false;
}