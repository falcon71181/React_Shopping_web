"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _badge = _interopRequireDefault(require("../styled/badge"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = {
  value: undefined,
  overlap: 'rectangle',
  variant: 'error',
  isHidden: false,
  position: 'top-right',
  className: undefined,
  style: undefined
};
describe('<BadgeOverlay/>', function () {
  it('should render the children when is passed', function () {
    var children = _react["default"].createElement("div", {
      id: "child"
    });

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, children));
    expect(component.contains(children)).toBe(true);
  });
  it('should not render when the children is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], defaultProps));
    expect(component.find(_badge["default"]).exists()).toBe(false);
  });
  it('should render with right default props', function () {
    var children = _react["default"].createElement("div", {
      id: "child"
    });

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], defaultProps, children));
    expect(component.find(_["default"]).props()).toEqual(_objectSpread(_objectSpread({}, defaultProps), {}, {
      children: children
    }));
  });
  it('should render the right value', function () {
    var children = _react["default"].createElement("div", {
      id: "child"
    });

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], defaultProps, children));
    expect(component.find(_badge["default"]).text()).toBe('');
    component.setProps({
      value: 3
    });
    expect(component.find(_badge["default"]).text()).toBe('3');
    component.setProps({
      value: 1000
    });
    expect(component.find(_badge["default"]).text()).toBe('1k');
  });
});