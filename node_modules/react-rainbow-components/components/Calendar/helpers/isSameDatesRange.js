"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSameDatesRange;

function isSameDatesRange(range1, range2) {
  return JSON.stringify(range1) === JSON.stringify(range2);
}