"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ContentMetaResolver = _interopRequireDefault(require("../ContentMetaResolver"));

describe('<ContentMetaResolver />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
  });
  it('should render component', function () {
    var child = function child() {
      return _react["default"].createElement("div", {
        id: "test-id"
      });
    };

    var component = (0, _enzyme.mount)(_react["default"].createElement(_ContentMetaResolver["default"], {
      component: child,
      onResolved: function onResolved() {}
    }));
    expect(component.find('[id="test-id"]').exists()).toBe(true);
  });
  it('should call onResolved', function () {
    var mockOnResolved = jest.fn();

    var child = function child() {
      return _react["default"].createElement("div", {
        id: "test-id"
      });
    };

    var component = (0, _enzyme.mount)(_react["default"].createElement(_ContentMetaResolver["default"], {
      component: child,
      onResolved: mockOnResolved
    }));
    component.setProps({});
    expect(mockOnResolved).toHaveBeenCalledTimes(1);
  });
});