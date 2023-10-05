"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverCenter;

function resolverCenter(opts) {
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2 + content.width <= viewport.width && trigger.leftUpAnchor.y - content.height / 2 >= 0 && trigger.leftUpAnchor.y - content.height / 2 + content.height <= viewport.height) {
    return {
      top: trigger.leftUpAnchor.y - content.height / 2,
      left: trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2
    };
  }

  return false;
}