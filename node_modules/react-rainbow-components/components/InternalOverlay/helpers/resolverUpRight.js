"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverUpRight;

function resolverUpRight(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.rightUpAnchor.x - content.width >= 0 && trigger.rightUpAnchor.y - margin - content.height >= 0) {
    return {
      bottom: viewport.height - trigger.leftUpAnchor.y + margin,
      left: trigger.rightUpAnchor.x - content.width
    };
  }

  return false;
}