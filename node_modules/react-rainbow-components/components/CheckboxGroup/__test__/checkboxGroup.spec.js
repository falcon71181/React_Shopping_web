"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _label = _interopRequireDefault(require("../styled/label"));

var _contentContainer = _interopRequireDefault(require("../styled/contentContainer"));

describe('<CheckboxGroup />', function () {
  it('should set an empty array when the values passed is a "string"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      value: "admin",
      className: "custom-class-name"
    }));
    var checkbox = component.find('CheckboxList');
    expect(checkbox.prop('values')).toEqual([]);
  });
  it('should set the right values when the values passed is not a "string"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      value: ['admin', 'user-1'],
      className: "custom-class-name"
    }));
    var checkbox = component.find('CheckboxList');
    expect(checkbox.prop('values')).toEqual(['admin', 'user-1']);
  });
  it('renders correctly in vertical orientation (default)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      options: options
    }));
    var elem = component.find(_contentContainer["default"]);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('column');
  });
  it('renders correctly in vertical orientation (explicit)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      options: options,
      orientation: "vertical"
    }));
    var elem = component.find(_contentContainer["default"]);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('column');
  });
  it('renders correctly in horizontal orientation (explicit)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      options: options,
      orientation: "horizontal"
    }));
    var elem = component.find(_contentContainer["default"]);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('row');
  });
  it('should render a label when label prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "CheckboxGroup Label"
    }));
    expect(component.find(_label["default"]).exists()).toBe(true);
  });
  it('should set "left" to labelAlignment prop passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "CheckboxGroup Label",
      labelAlignment: "left"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('left');
  });
  it('should set "right" to labelAlignment prop passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "CheckboxGroup Label",
      labelAlignment: "right"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('right');
  });
  it('should set "left" to labelAlignment if prop not passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "CheckboxGroup Label"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('left');
  });
});