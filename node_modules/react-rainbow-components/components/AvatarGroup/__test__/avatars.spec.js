"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _avatars = _interopRequireDefault(require("../avatars"));

var _Avatar = _interopRequireDefault(require("../../Avatar"));

describe('<Avatars />', function () {
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
  it('should render default amount (3) of Avatar components when none maxAvatars is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_avatars["default"], {
      avatars: avatars
    }));
    expect(component.find(_Avatar["default"])).toHaveLength(3);
  });
  it('should render right amount of Avatar components when maxAvatars is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_avatars["default"], {
      avatars: avatars,
      maxAvatars: 4
    }));
    expect(component.find(_Avatar["default"])).toHaveLength(4);
  });
  it('should Avatar components have the right props passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_avatars["default"], {
      avatars: avatars
    }));
    var zIndexes = ['3', '2', '1'];
    component.find(_Avatar["default"]).forEach(function (avatar, idx) {
      expect(avatar.props().zIndex).toBe(zIndexes[idx]);
    });
  });
});