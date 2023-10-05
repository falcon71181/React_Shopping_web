"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isInArray = _interopRequireDefault(require("../isInArray"));

var arrayContainer = ['onion', 'carrot', 'tomato', 'chard'];
var itemToMatch = 'chard';
var itemNotMatch = 'pizza';
describe('<AccordionSection/> isInArray', function () {
  it('should return "true" when an item of the array match', function () {
    expect((0, _isInArray["default"])(arrayContainer, itemToMatch)).toBe(true);
  });
  it('should return "false" when an item of the array not match', function () {
    expect((0, _isInArray["default"])(arrayContainer, itemNotMatch)).toBe(false);
  });
});