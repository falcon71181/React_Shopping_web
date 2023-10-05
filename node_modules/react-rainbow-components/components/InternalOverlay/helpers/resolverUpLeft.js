"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverUpLeft;

function resolverUpLeft(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.leftUpAnchor.x + content.width <= viewport.width && trigger.leftUpAnchor.y - margin - content.height >= 0) {
    return {
      bottom: viewport.height - trigger.leftUpAnchor.y + margin,
      left: trigger.leftBottomAnchor.x
    };
  }

  return false;
}