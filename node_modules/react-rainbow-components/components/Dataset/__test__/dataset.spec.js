"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var context = {
  registerDataset: jest.fn(),
  unregisterDataset: jest.fn(),
  updateDataset: jest.fn()
};
describe('<Dataset />', function () {
  beforeEach(function () {
    jest.resetAllMocks();
    _react["default"].useContext = jest.fn().mockReturnValue(context);
  });
  it('should call registerDataset with dataset props', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      title: "Dataset 1",
      values: [1, 2, 3],
      backgroundColor: "#ccc",
      borderColor: "#000",
      stack: "stack-1",
      type: "line"
    }));
    expect(context.registerDataset).toHaveBeenCalledWith(expect.any(String), {
      label: 'Dataset 1',
      data: [1, 2, 3],
      backgroundColor: '#ccc',
      borderColor: '#000',
      stack: 'stack-1',
      type: 'line',
      fill: false
    });
  });
  it('should call unregisterDataset when unmounted', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      title: "Dataset 1",
      values: [1, 2, 3],
      backgroundColor: "#ccc",
      borderColor: "#000",
      stack: "stack-1",
      type: "line"
    }));
    wrapper.unmount();
    expect(context.unregisterDataset).toHaveBeenCalledTimes(1);
  });
  it('should call updateDataset when props changes', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      title: "Dataset 1",
      values: [1, 2, 3],
      backgroundColor: "#ccc",
      borderColor: "#000",
      stack: "stack-1",
      type: "line"
    }));
    wrapper.setProps({
      values: [4, 5, 6]
    });
    expect(context.updateDataset).toHaveBeenCalledWith(expect.any(String), {
      label: 'Dataset 1',
      data: [4, 5, 6],
      backgroundColor: '#ccc',
      borderColor: '#000',
      stack: 'stack-1',
      type: 'line',
      fill: false
    });
  });
});