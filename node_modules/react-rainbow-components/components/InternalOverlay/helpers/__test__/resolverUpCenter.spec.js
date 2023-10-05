"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _resolverUpCenter = _interopRequireDefault(require("../resolverUpCenter"));

describe('resolverUpCenter', function () {
  it('should return the correct topCenter position', function () {
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
        height: 220,
        width: 220
      }
    };
    var expected = {
      bottom: param.viewport.height - param.trigger.leftUpAnchor.y,
      left: param.trigger.rightUpAnchor.x - param.content.width / 2 - param.trigger.width / 2
    };
    expect((0, _resolverUpCenter["default"])(param)).toEqual(expected);
  });
});