"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setFocus;

function setFocus(ref) {
  if (ref && ref.current) {
    ref.current.focus();
  }
}