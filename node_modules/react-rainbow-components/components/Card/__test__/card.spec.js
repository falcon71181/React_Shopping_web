"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _container = _interopRequireDefault(require("../styled/container"));

describe('<Card/>', function () {
  it('should set to true the isTrue prop in RenderIf', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      title: "Card Header",
      footer: "Card Footer",
      actions: _react["default"].createElement("div", null, "Testing actions node")
    }, "Testing childrens"));
    expect(component.find('RenderIf').prop('isTrue')).toBe(true);
  });
  it('should set to true the isTrue prop in RenderIf when isLoading', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      title: "Card Header",
      footer: "Card Footer",
      isLoading: true,
      actions: _react["default"].createElement("div", null, "Testing actions node")
    }, "Testing childrens"));
    expect(component.find('RenderIf').prop('isTrue')).toBe(false);
  });
  it('should set to true the isTrue prop in RenderIf when footer is not passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      title: "Card Header",
      actions: _react["default"].createElement("div", null, "Testing actions node")
    }, "Testing childrens"));
    expect(component.find('RenderIf').prop('isTrue')).toBe(false);
  });
  it('should set the id to the container element', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      id: "test-card"
    }));
    expect(component.find(_container["default"]).prop('id')).toBe('test-card');
  });
});