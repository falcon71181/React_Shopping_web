"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getInitialFocusedIndex;

function getInitialFocusedIndex() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var preferredSelectedOptionIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var nonHeaderItems = options.filter(function (option) {
    return option.type !== 'header';
  });
  var index = preferredSelectedOptionIndex;
  if (nonHeaderItems.length === 0) return 0;

  if (index < 0 || index >= nonHeaderItems.length) {
    index = 0;
  }

  var preferredSelectedOption = nonHeaderItems[index];
  return options.indexOf(preferredSelectedOption);
}