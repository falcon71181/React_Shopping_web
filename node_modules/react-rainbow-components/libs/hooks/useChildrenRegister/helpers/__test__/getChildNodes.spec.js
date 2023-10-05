"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getChildNodes = _interopRequireDefault(require("../getChildNodes"));

describe('getChildNodes', function () {
  var elements = [{
    element: 'div',
    innerText: 'Julio'
  }, {
    element: 'div',
    innerText: 'Pepe'
  }];
  var ref = {
    querySelectorAll: jest.fn(function () {
      return elements;
    })
  };
  it('should call querySelectorAll with a[role="menuitem"]', function () {
    (0, _getChildNodes["default"])({
      ref: ref,
      selector: 'div[role="option"]'
    });
    expect(ref.querySelectorAll).toHaveBeenCalledWith('div[role="option"]');
  });
  it('should return the elements resolved by querySelectorAll', function () {
    expect((0, _getChildNodes["default"])({
      ref: ref
    })).toEqual(elements);
  });
  it('should return an empty array if anything is passed', function () {
    expect((0, _getChildNodes["default"])()).toEqual([]);
  });
});