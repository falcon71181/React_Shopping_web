"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSuffixSI;

function getSuffixSI(number) {
  if (!number || number < 0) {
    return '';
  }

  var SI_POSTFIXES = ['', 'k', 'M', 'G'];
  var tier = Math.log10(Math.abs(number)) / 3 | 0;
  if (tier === 0) return number;
  var postfix = SI_POSTFIXES[tier];
  var scale = Math.pow(10, tier * 3);
  var scaled = number / scale;
  var formatted = "".concat(scaled.toFixed(1));

  if (/\.0$/.test(formatted)) {
    formatted = formatted.substr(0, formatted.length - 2);
  }

  return formatted + postfix;
}