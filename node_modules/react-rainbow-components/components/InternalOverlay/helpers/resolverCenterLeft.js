"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverCenterLeft;

function resolverCenterLeft(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.rightUpAnchor.x + margin + content.width <= viewport.width && trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2 >= 0 && trigger.leftBottomAnchor.y - trigger.height / 2 + content.height / 2 <= viewport.height) {
    return {
      top: trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2,
      left: trigger.rightUpAnchor.x + margin
    };
  }

  return false;
}