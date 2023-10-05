"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getMapContainerStyles = _interopRequireDefault(require("../getMapContainerStyles"));

describe('getMapContainerStyles', function () {
  it('should return null if a ref is not passed', function () {
    expect((0, _getMapContainerStyles["default"])()).toBeNull();
  });
  it('should return null if ref passed does not have a parentNode', function () {
    var ref = {};
    expect((0, _getMapContainerStyles["default"])(ref)).toBeNull();
  });
  it('should return null if the parentNode the ref passed has an height set', function () {
    var ref = {
      parentNode: {
        style: {
          height: 100
        }
      }
    };
    expect((0, _getMapContainerStyles["default"])(ref)).toBeNull();
  });
  it('should return an object with a minHeght of 300 if the parentNode of the ref passed does not have an height set', function () {
    var ref = {
      parentNode: {
        style: {
          height: ''
        }
      }
    };
    expect((0, _getMapContainerStyles["default"])(ref)).toEqual({
      minHeight: 300
    });
  });
});