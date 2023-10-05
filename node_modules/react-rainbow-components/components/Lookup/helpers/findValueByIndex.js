"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findValueByIndex;

function findValueByIndex() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var focusedItemIndex = arguments.length > 1 ? arguments[1] : undefined;
  var optionIndex = 0;
  return options.find(function (option) {
    if (option.type !== 'header') {
      var condition = optionIndex === focusedItemIndex;
      optionIndex += 1;
      return condition;
    }

    return false;
  });
}