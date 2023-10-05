"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isChildRegistered = function isChildRegistered(_ref) {
  var children = _ref.children,
      id = _ref.id;
  return children.findIndex(function (child) {
    return child.id === id;
  }) !== -1;
};

var _default = isChildRegistered;
exports["default"] = _default;