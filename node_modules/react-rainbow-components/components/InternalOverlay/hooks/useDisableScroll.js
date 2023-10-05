"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _scrollController = require("../../../libs/scrollController");

var useDisableScroll = function useDisableScroll(shouldDisableScroll) {
  (0, _react.useEffect)(function () {
    if (shouldDisableScroll) {
      (0, _scrollController.disableBodyScroll)(undefined, {
        reserveScrollBarGap: true
      });
    }

    return function () {
      if (shouldDisableScroll) {
        (0, _scrollController.enableBodyScroll)();
      }
    };
  }, [shouldDisableScroll]);
};

var _default = useDisableScroll;
exports["default"] = _default;