"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolverTopRight;

function resolverTopRight(opts) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var trigger = opts.trigger,
      content = opts.content,
      viewport = opts.viewport;

  if (trigger.rightUpAnchor.x + margin + content.width <= viewport.width) {
    return {
      top: 0,
      left: trigger.rightUpAnchor.x + margin
    };
  }

  return false;
}