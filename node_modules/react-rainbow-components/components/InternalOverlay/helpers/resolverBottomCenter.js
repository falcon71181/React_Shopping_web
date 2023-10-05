"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverBottomCenter;

function resolverBottomCenter(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.rightBottomAnchor.x - trigger.width / 2 - content.width / 2 >= 0 && trigger.leftBottomAnchor.x + trigger.width / 2 + content.width / 2 <= viewport.width && trigger.leftBottomAnchor.y + margin + content.height <= viewport.height) {
    return {
      top: trigger.leftBottomAnchor.y + margin,
      left: trigger.rightBottomAnchor.x - content.width / 2 - trigger.width / 2
    };
  }

  return false;
}