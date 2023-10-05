"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _shouldOpenMenu = _interopRequireDefault(require("../shouldOpenMenu"));

var _constants = require("../../../../libs/constants");

describe('shouldOpenMenu', function () {
  it('should return true only when UP_KEY, DOWN_KEY, LEFT_KEY, RIGHT_KEY, SPACE_KEY, ENTER_KEY are pressed', function () {
    var keys = [_constants.UP_KEY, _constants.DOWN_KEY, _constants.LEFT_KEY, _constants.RIGHT_KEY, _constants.SPACE_KEY, _constants.ENTER_KEY];
    keys.forEach(function (keyCode) {
      expect((0, _shouldOpenMenu["default"])(keyCode)).toEqual(true);
    });
  });
  it('should return false when TAB_KEY, DELETE_KEY, ESCAPE_KEY are pressed', function () {
    var keys = [_constants.TAB_KEY, _constants.DELETE_KEY, _constants.ESCAPE_KEY];
    keys.forEach(function (keyCode) {
      expect((0, _shouldOpenMenu["default"])(keyCode)).toEqual(false);
    });
  });
});