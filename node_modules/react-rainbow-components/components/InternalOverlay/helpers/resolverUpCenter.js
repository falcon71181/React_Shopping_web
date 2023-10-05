"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverUpCenter;

function resolverUpCenter(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.rightUpAnchor.x - trigger.width / 2 - content.width / 2 >= 0 && trigger.leftUpAnchor.x + trigger.width / 2 + content.width / 2 <= viewport.width && trigger.rightUpAnchor.y - margin - content.height >= 0) {
    return {
      bottom: viewport.height - trigger.leftUpAnchor.y + margin,
      left: trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2
    };
  }

  return false;
}