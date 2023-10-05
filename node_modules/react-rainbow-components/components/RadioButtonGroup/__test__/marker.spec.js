"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _marker = _interopRequireDefault(require("../marker"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('<Marker />', function () {
  it('should not render when it is not visible', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_marker["default"], null));
    expect(component.find('div').exists()).toBe(false);
  });
  it('should set the right position and size', function () {
    var style = {
      left: 10,
      width: 100
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_marker["default"], {
      isVisible: true,
      style: style
    }));
    expect(component.find('span').prop('style')).toEqual(_objectSpread(_objectSpread({}, style), {}, {
      opacity: 1
    }));
  });
});