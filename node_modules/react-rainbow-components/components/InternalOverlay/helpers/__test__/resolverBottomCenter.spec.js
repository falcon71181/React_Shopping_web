"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _resolverBottomCenter = _interopRequireDefault(require("../resolverBottomCenter"));

describe('resolverBottomCenter', function () {
  it('should return the correct bottomCenter position', function () {
    var param = {
      trigger: {
        leftUpAnchor: {
          x: 109,
          y: 175
        },
        leftBottomAnchor: {
          x: 109,
          y: 215
        },
        rightUpAnchor: {
          x: 149,
          y: 175
        },
        rightBottomAnchor: {
          x: 149,
          y: 215
        },
        width: 40,
        height: 40
      },
      viewport: {
        width: 240,
        height: 761
      },
      content: {
        height: 220,
        width: 220
      }
    };
    var expected = {
      top: param.trigger.leftBottomAnchor.y,
      left: param.trigger.rightBottomAnchor.x - param.content.width / 2 - param.trigger.width / 2
    };
    expect((0, _resolverBottomCenter["default"])(param)).toEqual(expected);
  });
});