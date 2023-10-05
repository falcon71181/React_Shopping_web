"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isContentHidden;

function isContentHidden(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
  if (zeroSize && !element.innerHTML) return true;
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue('overflow') !== 'visible' : style.getPropertyValue('display') === 'none';
}