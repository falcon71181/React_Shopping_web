"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

var _normalizeColor = _interopRequireWildcard(require("../normalizeColor"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('normalizeColor', function () {
  it('should return default value', function () {
    var values = ['', 1, [], {}, true, {
      hex: '',
      rgba: '',
      hvs: ''
    }];
    values.forEach(function (value) {
      expect((0, _normalizeColor["default"])(value)).toBe(_normalizeColor.defaultColor);
    });
  });
  it('should return the expect value', function () {
    var values = [{
      hex: '#ffffff'
    }, {
      rgba: [255, 255, 255, 1]
    }, {
      hsv: [0, 0, 100]
    }, {
      hex: '#ffffff',
      rgba: [255, 255, 255, 1]
    }];
    var result = {
      hex: '#ffffff',
      rgba: [255, 255, 255, 1],
      hsv: [0, 0, 100]
    };
    values.forEach(function (value) {
      expect((0, _normalizeColor["default"])(value)).toStrictEqual(result);
    });
  });
});