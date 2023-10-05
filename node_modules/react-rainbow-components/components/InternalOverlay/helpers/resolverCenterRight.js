"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverCenterRight;

function resolverCenterRight(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.leftUpAnchor.x - margin - content.width >= 0 && trigger.rightBottomAnchor.y - trigger.height / 2 + content.height / 2 <= viewport.height && trigger.rightUpAnchor.y + trigger.height / 2 - content.height / 2 >= 0) {
    return {
      top: trigger.rightUpAnchor.y + trigger.height / 2 - content.height / 2,
      left: trigger.leftUpAnchor.x - margin - content.width
    };
  }

  return false;
}