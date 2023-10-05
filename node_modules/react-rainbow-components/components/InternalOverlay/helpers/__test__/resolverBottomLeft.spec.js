"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _resolverBottomLeft = _interopRequireDefault(require("../resolverBottomLeft"));

describe('resolverBottomLeft', function () {
  it('should return the correct bottomLeft position', function () {
    var param = {
      trigger: {
        leftUpAnchor: {
          x: 209,
          y: 175
        },
        leftBottomAnchor: {
          x: 209,
          y: 215
        },
        rightUpAnchor: {
          x: 249,
          y: 175
        },
        rightBottomAnchor: {
          x: 249,
          y: 215
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
      top: param.trigger.leftBottomAnchor.y,
      left: param.trigger.leftBottomAnchor.x
    };
    expect((0, _resolverBottomLeft["default"])(param)).toEqual(expected);
  });
});