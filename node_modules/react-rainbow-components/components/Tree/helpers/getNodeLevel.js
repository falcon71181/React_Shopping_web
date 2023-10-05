"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getNodeLevel = function getNodeLevel(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name;
  var levelMatch = name.match(/\./g);

  if (levelMatch) {
    return levelMatch.length + 1;
  }

  return 1;
};

var _default = getNodeLevel;
exports["default"] = _default;