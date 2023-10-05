"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

describe('<AvatarGroup />', function () {
  var avatars = [{
    src: 'images/user/user1.jpg',
    assistiveText: 'Jose Leandro',
    title: 'Jose Leandro'
  }, {
    src: 'images/user/user2.jpg',
    assistiveText: 'Tahimi Leon',
    title: 'Tahimi Leon'
  }, {
    src: 'images/user/user3.jpg',
    assistiveText: 'Carlos Miguel',
    title: 'Carlos Miguel'
  }, {
    src: 'images/user/user4.jpg',
    assistiveText: 'Jane Doe',
    title: 'Jane Doe'
  }];
  it('should pass the prop showCounter as isTrue to RenderIf component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      avatars: avatars,
      showCounter: true
    }));
    expect(component.find(_RenderIf["default"]).props().isTrue).toBe(true);
  });
});