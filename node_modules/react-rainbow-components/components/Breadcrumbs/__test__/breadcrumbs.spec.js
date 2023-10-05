"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _index2 = _interopRequireDefault(require("../../Breadcrumb/index"));

describe('<Breadcrumbs/>', function () {
  it('should have a aria-label attribute for accessibility', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_index2["default"], {
      label: "Parent entity"
    })));
    expect(component.find('[aria-label="Breadcrumbs"]').exists()).toBe(true);
  });
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("span", null)));
    expect(component.find('span').exists()).toBe(true);
  });
});