"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Dataset = _interopRequireDefault(require("../../Dataset"));

var _resolveDatasets = _interopRequireDefault(require("../resolveDatasets"));

describe('resolveDatasets function', function () {
  it('should return the dataset array with all the data', function () {
    var children = [_react["default"].createElement(_Dataset["default"], {
      type: "line",
      values: [34, 23, 46],
      title: "Dataset 1",
      datalabels: {
        color: 'red'
      },
      backgroundColor: "red",
      borderColor: "blue",
      stack: "A",
      fill: true
    })];
    var datasets = (0, _resolveDatasets["default"])(children);
    expect(datasets).toEqual([{
      data: [34, 23, 46],
      label: 'Dataset 1',
      datalabels: {
        color: 'red'
      },
      type: 'line',
      backgroundColor: 'red',
      borderColor: 'blue',
      stack: 'A',
      fill: true
    }]);
  });
});