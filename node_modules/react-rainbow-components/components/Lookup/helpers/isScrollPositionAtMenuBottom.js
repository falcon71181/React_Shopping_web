"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isScrollPositionAtMenuBottom;

function isScrollPositionAtMenuBottom(menuRef) {
  var scrollHeight = menuRef.scrollHeight,
      scrollTop = menuRef.scrollTop,
      clientHeight = menuRef.clientHeight;
  return scrollHeight - scrollTop === clientHeight;
}