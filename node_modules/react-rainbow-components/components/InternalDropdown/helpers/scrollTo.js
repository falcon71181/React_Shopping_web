"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = scrollTo;

function scrollTo(ref, offset) {
  ref.current.scrollTo(0, offset);
}