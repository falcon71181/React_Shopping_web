"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _lookupPositionResolver = _interopRequireDefault(require("../lookupPositionResolver"));

describe('positionResolver', function () {
  it('should add the trigger width to the position result', function () {
    var position = (0, _lookupPositionResolver["default"])({
      trigger: {
        leftUpAnchor: {
          x: 0,
          y: 0
        },
        leftBottomAnchor: {
          x: 0,
          y: 0
        },
        rightUpAnchor: {
          x: 0,
          y: 0
        },
        rightBottomAnchor: {
          x: 0,
          y: 0
        },
        width: 100
      },
      viewport: {
        width: 1366
      },
      content: {
        width: 50,
        height: 50
      }
    });
    expect(position.width).toBe(100);
  });
});