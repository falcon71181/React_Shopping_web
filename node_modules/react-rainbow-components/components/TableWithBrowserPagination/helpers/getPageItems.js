"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPageItems;

function getPageItems(_ref) {
  var data = _ref.data,
      activePage = _ref.activePage,
      pageSize = _ref.pageSize;

  if (pageSize > data.length) {
    return data;
  }

  var start = (activePage - 1) * pageSize;
  var end = Math.min(activePage * pageSize, data.length);
  return data.slice(start, end);
}