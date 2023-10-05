"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeDate;

function normalizeDate(date) {
  if (typeof date === 'string') {
    return new Date(date);
  }

  return date || new Date();
}