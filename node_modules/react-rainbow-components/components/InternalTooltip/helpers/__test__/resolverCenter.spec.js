"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _resolverCenter = _interopRequireDefault(require("../resolverCenter"));

describe('resolverCenter', function () {
  it('should return the correct center position', function () {
    var param = {
      trigger: {
        leftUpAnchor: {
          x: 109,
          y: 658
        },
        leftBottomAnchor: {
          x: 109,
          y: 698
        },
        rightUpAnchor: {
          x: 149,
          y: 658
        },
        rightBottomAnchor: {
          x: 149,
          y: 698
        },
        width: 40,
        height: 40
      },
      viewport: {
        width: 240,
        height: 761
      },
      content: {
        height: 110,
        width: 220
      }
    };
    var expected = {
      top: param.trigger.leftUpAnchor.y - param.content.height / 2,
      left: param.trigger.rightUpAnchor.x - param.content.width / 2 - param.trigger.width / 2
    };
    expect((0, _resolverCenter["default"])(param)).toEqual(expected);
  });
});