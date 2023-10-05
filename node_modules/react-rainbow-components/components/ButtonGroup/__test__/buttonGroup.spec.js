"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _Button = _interopRequireDefault(require("../../Button"));

describe('<ButtonGroup/>', function () {
  it('should be accessible, the div element should have role="group"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_Button["default"], {
      label: "Refresh"
    }), _react["default"].createElement(_Button["default"], {
      label: "Edit"
    }), _react["default"].createElement(_Button["default"], {
      label: "Save"
    })));
    expect(component.find('div[role="group"]').exists()).toBe(true);
  });
  it('should render the amount of children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_Button["default"], {
      label: "Refresh"
    }), _react["default"].createElement(_Button["default"], {
      label: "Edit"
    }), _react["default"].createElement(_Button["default"], {
      label: "Save"
    })));
    expect(component.prop('children').length).toBe(3);
  });
});