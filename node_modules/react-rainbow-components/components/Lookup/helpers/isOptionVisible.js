"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isOptionVisible;

function isOptionVisible(elem, container) {
  var _elem$getBoundingClie = elem.getBoundingClientRect(),
      elTop = _elem$getBoundingClie.top,
      elBottom = _elem$getBoundingClie.bottom;

  var _container$getBoundin = container.getBoundingClientRect(),
      containerTop = _container$getBoundin.top,
      containerBottom = _container$getBoundin.bottom;

  return elTop >= containerTop && elBottom <= containerBottom;
}