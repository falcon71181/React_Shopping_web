"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTransform;

function getTransform(rect) {
  var top = rect.top,
      left = rect.left,
      width = rect.width,
      height = rect.height;
  var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  var translateX = viewportWidth / 2 - width / 2 - left;
  var translateY = viewportHeight / 2 - height / 2 - top;
  var widthRatio = width / viewportWidth;
  var heightRatio = height / viewportHeight;
  var scale = heightRatio > widthRatio ? viewportHeight / height : viewportWidth / width;
  return {
    translateX: translateX,
    translateY: translateY,
    scale: scale * 0.85
  };
}