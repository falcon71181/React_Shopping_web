"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getText;

function getText(files, placeholder, value) {
  var showReturnPlaceholder = value === null || !files || files.length === 0;

  if (showReturnPlaceholder) {
    return placeholder;
  }

  if (files.length === 1) {
    return files[0].name;
  }

  return "".concat(files.length, " files");
}