"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolveElement;

function resolveElement(ref) {
  if (typeof ref === 'function') {
    var ret = ref();
    return ret && ret.current;
  }

  return ref && ref.current;
}