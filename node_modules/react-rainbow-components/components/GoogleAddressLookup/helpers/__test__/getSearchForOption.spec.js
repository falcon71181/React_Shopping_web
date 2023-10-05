"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _getSearchForOption2 = _interopRequireDefault(require("../getSearchForOption"));

var _searchValueIcon = _interopRequireDefault(require("../../icons/searchValueIcon"));

describe('getSearchForOption', function () {
  it('should return the search term formated as option for Lookup', function () {
    var _getSearchForOption = (0, _getSearchForOption2["default"])('110 sw'),
        label = _getSearchForOption.label,
        data = _getSearchForOption.data,
        icon = _getSearchForOption.icon;

    var result = {
      label: label,
      data: data,
      icon: icon
    };
    expect(result).toEqual({
      label: label,
      data: '110 sw',
      icon: _react["default"].createElement(_searchValueIcon["default"], null)
    });
  });
});