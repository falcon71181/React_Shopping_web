"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverBottomLeft;

function resolverBottomLeft(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.leftBottomAnchor.x + content.width <= viewport.width && trigger.leftBottomAnchor.y + margin + content.height <= viewport.height) {
    return {
      top: trigger.leftBottomAnchor.y + margin,
      left: trigger.leftBottomAnchor.x
    };
  }

  return false;
}