"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getNodeName = function getNodeName(_ref) {
  var parentName = _ref.parentName,
      index = _ref.index;
  var nodeLevel = index + 1;

  if (parentName) {
    return "".concat(parentName, ".").concat(nodeLevel);
  }

  return "node-".concat(nodeLevel);
};

var _default = getNodeName;
exports["default"] = _default;