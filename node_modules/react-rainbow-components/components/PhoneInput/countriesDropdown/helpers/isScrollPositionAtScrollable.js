"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isScrollPositionAtScrollable;

function isScrollPositionAtScrollable(scrollable) {
  var scrollHeight = scrollable.scrollHeight,
      scrollTop = scrollable.scrollTop,
      clientHeight = scrollable.clientHeight;
  return scrollHeight - scrollTop === clientHeight;
}