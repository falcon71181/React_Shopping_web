"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _radioItems = _interopRequireDefault(require("../radioItems"));

var _itemDescription = _interopRequireDefault(require("../styled/itemDescription"));

describe('<RadioItems />', function () {
  it('should return the 3 radios when 3 options are passed', function () {
    var options = [{
      value: 'admin',
      label: 'Admin',
      disabled: true
    }, {
      value: 'user',
      label: 'User'
    }, {
      value: 'anonymous',
      label: 'Anonymous'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioItems["default"], {
      options: options
    }));
    expect(component.children().length).toBe(3);
  });
  it('should pass the right props to the Radio component', function () {
    var option = [{
      value: 'admin',
      label: 'Admin',
      disabled: true
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioItems["default"], {
      options: option,
      name: "name-1",
      ariaDescribedby: "error-1",
      onChange: function onChange() {}
    }));
    expect(component.find('Radio').props()).toEqual(expect.objectContaining({
      value: option[0].value,
      label: option[0].label,
      disabled: option[0].disabled,
      ariaDescribedby: 'error-1',
      name: 'name-1',
      onChange: expect.any(Function),
      checked: false,
      error: null
    }));
  });
  it('should render the description', function () {
    var options = [{
      value: 'admin',
      label: 'Admin',
      disabled: true,
      description: 'Admin user'
    }, {
      value: 'user',
      label: 'User',
      description: 'Regular user'
    }, {
      value: 'anonymous',
      label: 'Anonymous',
      description: 'Anonymous user'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioItems["default"], {
      name: "items",
      options: options
    }));
    expect(component.find(_itemDescription["default"]).length).toBe(3);
    expect(component.find(_itemDescription["default"]).first().text()).toBe('Admin user');
  });
});