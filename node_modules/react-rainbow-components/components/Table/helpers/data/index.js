"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeData = normalizeData;

function normalizeData(data) {
  if (Array.isArray(data)) {
    return data;
  }

  return [];
}