"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chart = _interopRequireDefault(require("chart.js"));

var maxRadius = 20;

var getRadius = function getRadius(height, width) {
  var min = Math.min(height, width);

  if (maxRadius > min / 2) {
    return min / 2;
  }

  return maxRadius;
};

function drawRectVertical(context, view) {
  var x = view.x,
      y = view.y,
      base = view.base,
      width = view.width;
  var left = x - width / 2;
  var height = base - y;
  var radius = getRadius(height, width);
  context.moveTo(left + radius, y);
  context.lineTo(left + width - radius, y);
  context.quadraticCurveTo(left + width, y, left + width, y + radius);
  context.lineTo(left + width, base);
  context.lineTo(left, base);
  context.lineTo(left, y + radius);
  context.quadraticCurveTo(left, y, left + radius, y);
}

function drawRectHorizontal(context, view) {
  var x = view.x,
      y = view.y,
      base = view.base,
      height = view.height;
  var width = x;
  var top = y - height / 2;
  var radius = getRadius(height, width);
  context.moveTo(x - radius, top);
  context.quadraticCurveTo(x, top, x, top + radius);
  context.lineTo(x, top + height - radius);
  context.quadraticCurveTo(x, top + height, x - radius, top + height);
  context.lineTo(base, top + height);
  context.lineTo(base, top);
  context.lineTo(top - radius, top);
}

_chart["default"].elements.Rectangle.prototype.draw = function drawRect() {
  var context = this._chart.ctx;
  var view = this._view;
  context.beginPath();
  context.fillStyle = view.backgroundColor;
  context.strokeStyle = view.borderColor;

  if (view.horizontal) {
    drawRectHorizontal(context, view);
  } else {
    drawRectVertical(context, view);
  }

  context.fill();
};

var _default = _chart["default"];
exports["default"] = _default;