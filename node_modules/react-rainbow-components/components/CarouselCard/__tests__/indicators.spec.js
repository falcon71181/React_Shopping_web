"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _indicators = _interopRequireDefault(require("../indicators"));

var carouselItems = [{
  id: 'indicator-1',
  containerId: 'container-1',
  ref: {
    click: jest.fn()
  },
  header: 'Header'
}, {
  id: 'indicator-2',
  containerId: 'container-2',
  ref: {
    click: jest.fn()
  },
  header: 'Header 2'
}];
describe('<Indicators />', function () {
  it('should render the right amount of indicators', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_indicators["default"], {
      carouselChildren: carouselItems
    })),
        getAllByRole = _render.getAllByRole;

    expect(getAllByRole('tab').length).toBe(2);
  });
});