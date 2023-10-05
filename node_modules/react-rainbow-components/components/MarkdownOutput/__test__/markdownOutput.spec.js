"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _useMarkdownToReact = _interopRequireDefault(require("../hooks/useMarkdownToReact"));

var _renderers = require("../renderers");

jest.mock('../hooks/useMarkdownToReact', function () {
  return jest.fn();
});
describe('<MarkdownOutput />', function () {
  it('should call useMarkdownToReact hook with right value', function () {
    var value = '# This is a level 1 header';
    (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      value: value
    }));
    expect(_useMarkdownToReact["default"]).toHaveBeenCalledWith(value, _renderers.defaultRenderer);
  });
  it('should use the inline renderer when variant is "inline"', function () {
    var value = '# This is a level 1 header';
    (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      value: value,
      variant: "inline"
    }));
    expect(_useMarkdownToReact["default"]).toHaveBeenCalledWith(value, _renderers.inlineRenderer);
  });
});