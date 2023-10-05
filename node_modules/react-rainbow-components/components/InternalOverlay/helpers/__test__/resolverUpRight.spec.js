"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _resolverUpRight = _interopRequireDefault(require("../resolverUpRight"));

describe('resolverUpRight', function () {
  it('should return the correct topRight position', function () {
    var param = {
      trigger: {
        leftUpAnchor: {
          x: 939,
          y: 658
        },
        leftBottomAnchor: {
          x: 939,
          y: 698
        },
        rightUpAnchor: {
          x: 979,
          y: 658
        },
        rightBottomAnchor: {
          x: 979,
          y: 698
        }
      },
      viewport: {
        width: 1100,
        height: 761
      },
      content: {
        height: 220,
        width: 220
      }
    };
    var expected = {
      bottom: param.viewport.height - param.trigger.leftUpAnchor.y,
      left: param.trigger.rightUpAnchor.x - param.content.width
    };
    expect((0, _resolverUpRight["default"])(param)).toEqual(expected);
  });
});