"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isInArray = _interopRequireDefault(require("./isInArray"));

var getIsExpanded = function getIsExpanded(_ref) {
  var multiple = _ref.multiple,
      activeNames = _ref.activeNames,
      currentName = _ref.currentName;

  if (multiple && Array.isArray(activeNames)) {
    return (0, _isInArray["default"])(activeNames, currentName);
  }

  return activeNames === currentName;
};

var _default = getIsExpanded;
exports["default"] = _default;