"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _checkboxList = _interopRequireDefault(require("../checkboxList"));

var _itemDescription = _interopRequireDefault(require("../../RadioGroup/styled/itemDescription"));

var options = [{
  value: 'admin',
  label: 'Admin',
  disabled: false,
  description: 'Admin user'
}, {
  value: 'user',
  label: 'User',
  disabled: false,
  description: 'Regular user'
}, {
  value: 'nobody',
  label: 'Anonymus',
  disabled: true,
  description: 'Anonymous user'
}];
describe('<CheckboxList />', function () {
  it('should return the right amount of checkboxes ', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_checkboxList["default"], {
      options: options
    }));
    expect(component.children().length).toBe(3);
  });
  it('should pass the right props to the Checkbox component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_checkboxList["default"], {
      options: [{
        value: 'admin',
        label: 'Admin',
        disabled: false
      }]
    }));
    var checkbox = component.find('Checkbox');
    expect(checkbox.prop('value')).toBe('admin');
    expect(checkbox.prop('label')).toBe('Admin');
    expect(checkbox.prop('disabled')).toBe(false);
  });
  it('should render the description', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_checkboxList["default"], {
      options: options
    }));
    expect(component.find(_itemDescription["default"]).length).toBe(3);
    expect(component.find(_itemDescription["default"]).first().text()).toBe('Admin user');
  });
});