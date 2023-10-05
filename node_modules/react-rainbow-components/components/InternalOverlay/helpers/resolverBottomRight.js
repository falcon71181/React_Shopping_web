"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverBottomRight;

function resolverBottomRight(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.rightBottomAnchor.x - content.width >= 0 && trigger.rightBottomAnchor.y + margin + content.height <= viewport.height) {
    return {
      top: trigger.leftBottomAnchor.y + margin,
      left: trigger.rightBottomAnchor.x - content.width
    };
  }

  return false;
}