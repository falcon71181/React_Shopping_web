"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsdom = require("jsdom");

var _findTabbableElements = _interopRequireDefault(require("../findTabbableElements"));

jest.mock('../isContentHidden', function () {
  return jest.fn(function () {
    return false;
  });
});
describe('findTabbableElements', function () {
  it('should return the 5 tabbable elements', function () {
    var dom = new _jsdom.JSDOM("\n            <div>\n                <h1>Modal Header</h1>\n                <p>\n                    A rainbow is a meteorological phenomenon ...\n                </p>\n                <span >\n                    <button>cancel</button>\n                    <a href=\"/home\">save</a>\n                    <textarea>some text</textarea>\n                    <input type=\"text\" />\n                    <select name=\"country\" id=\"country\"></select>\n                </span>\n            </div>\n        ");
    var containerElement = dom.window.document.querySelector('div');
    expect((0, _findTabbableElements["default"])(containerElement).length).toBe(5);
  });
  it('should return an empty array when the are not tabbable elements', function () {
    var dom = new _jsdom.JSDOM("\n            <div>\n                <h1>Modal Header</h1>\n                <p>\n                    A rainbow is a meteorological phenomenon ...\n                </p>\n                <a>link</a>\n            </div>\n        ");
    var containerElement = dom.window.document.querySelector('div');
    expect((0, _findTabbableElements["default"])(containerElement).length).toBe(0);
  });
  it('should return one element when there is not tabbable nodes but one has a tabindex of 0', function () {
    var dom = new _jsdom.JSDOM("\n            <div>\n                <span tabindex=\"0\"></span>\n            </div>\n        ");
    var containerElement = dom.window.document.querySelector('div');
    expect((0, _findTabbableElements["default"])(containerElement).length).toBe(1);
  });
  it('should return an empty array when the are not tabbable nodes but one has a tabindex of -1', function () {
    var dom = new _jsdom.JSDOM("\n            <div>\n                <span tabindex=\"-1\"></span>\n            </div>\n        ");
    var containerElement = dom.window.document.querySelector('div');
    expect((0, _findTabbableElements["default"])(containerElement).length).toBe(0);
  });
  it('should return only 1 tabbable element when there are two but one is disabled', function () {
    var dom = new _jsdom.JSDOM("\n            <div>\n                <h1>Modal Header</h1>\n                <p>\n                    A rainbow is a meteorological phenomenon ...\n                </p>\n                <span >\n                    <button disabled>cancel</button>\n                    <input type=\"text\" />\n                </span>\n            </div>\n        ");
    var containerElement = dom.window.document.querySelector('div');
    expect((0, _findTabbableElements["default"])(containerElement).length).toBe(1);
  });
});