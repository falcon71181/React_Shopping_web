"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getItemIndex = function getItemIndex(children, id) {
  return children.findIndex(function (child) {
    return child.id === id;
  });
};

var _default = getItemIndex;
exports["default"] = _default;