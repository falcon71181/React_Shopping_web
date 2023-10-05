"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = countCharacters;

function countCharacters(str, _char) {
  return str.split(_char).length - 1;
}