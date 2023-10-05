"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

var _reactHooks = require("@testing-library/react-hooks");

var _useNormalizeColors = _interopRequireWildcard(require("../useNormalizeColors"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('useNormalizeColors', function () {
  it('should return empty array', function () {
    var values = ['', null, true, 0, {}, [], ['', 'qwww']];
    values.forEach(function (value) {
      var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _useNormalizeColors["default"])({
          defaultColors: value
        });
      }),
          result = _renderHook.result;

      expect(result.current).toStrictEqual([]);
    });
  });
  it('should return array of valid colors', function () {
    var values = [['#5ebbff', '#42d8be', '#3be282'], ['#5ebbff', 'qwe', '#42d8be', '#3be282']];
    values.forEach(function (value) {
      var _renderHook2 = (0, _reactHooks.renderHook)(function () {
        return (0, _useNormalizeColors["default"])({
          defaultColors: value
        });
      }),
          result = _renderHook2.result;

      expect(result.current).toStrictEqual(values[0]);
    });
  });
  it('should return default colors', function () {
    var values = [null, [], ['', 'qwww']];
    values.forEach(function (value) {
      var _renderHook3 = (0, _reactHooks.renderHook)(function () {
        return (0, _useNormalizeColors["default"])({
          defaultColors: value,
          variant: 'colors-fixed'
        });
      }),
          result = _renderHook3.result;

      expect(result.current).toStrictEqual(_useNormalizeColors.defaultColors);
    });
  });
  it('should return array of valid colors when the variant is colors-fixed', function () {
    var values = [['#5ebbff', '#42d8be', '#3be282'], ['#5ebbff', 'qwe', '#42d8be', '#3be282']];
    values.forEach(function (value) {
      var _renderHook4 = (0, _reactHooks.renderHook)(function () {
        return (0, _useNormalizeColors["default"])({
          defaultColors: value,
          variant: 'colors-fixed'
        });
      }),
          result = _renderHook4.result;

      expect(result.current).toStrictEqual(values[0]);
    });
  });
});