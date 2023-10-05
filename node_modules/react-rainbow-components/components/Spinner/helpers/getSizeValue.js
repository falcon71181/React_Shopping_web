"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSizeValue;
var sizeMap = {
  'x-large': '82',
  large: '48',
  medium: '32',
  small: '26',
  'x-small': '20',
  'xx-small': '16'
};

function getSizeValue(size) {
  return sizeMap[size] || sizeMap.medium;
}