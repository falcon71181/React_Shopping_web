"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var Commons = _interopRequireWildcard(require("../commons"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('<ColorPicker />', function () {
  it('should render all common component', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba', 'DefaultColors'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(1);
    });
  });
  it('should render all common component variant is not valid', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      variant: "foo"
    }));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba', 'DefaultColors'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(1);
    });
  });
  it('should not render DefaultColors common component when defaultColors do not have some valid color', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultColors: []
    }));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(1);
    });
    expect(wrapper.find(Commons.DefaultColors).length).toBe(0);
  });
  it('should render only the DefaultColors common component when the variant is colors-fixed', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      variant: "colors-fixed"
    }));
    var componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba'];
    componets.forEach(function (component) {
      expect(wrapper.find(Commons[component]).length).toBe(0);
    });
    expect(wrapper.find(Commons.DefaultColors).length).toBe(1);
  });
});