"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _expandCollapseButton = _interopRequireDefault(require("../expandCollapseButton"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

describe('<ExpandCollapseButton/>', function () {
  it('should return the Spinner component when isLoading prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_expandCollapseButton["default"], {
      isLoading: true
    }));
    expect(component.find('Spinner').exists()).toBe(true);
  });
  it('should return the ButtonIcon component when hasChildren prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_expandCollapseButton["default"], {
      hasChildren: true
    }));
    expect(component.find(_ButtonIcon["default"]).exists()).toBe(true);
  });
  it('should set the right icon when isExpanded prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_expandCollapseButton["default"], {
      isExpanded: true,
      hasChildren: true
    }));
    expect(component.find(_ButtonIcon["default"]).find('DownArrow').exists()).toBe(true);
  });
  it('should set the right icon when isExpanded prop is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_expandCollapseButton["default"], {
      isExpanded: false,
      hasChildren: true
    }));
    expect(component.find(_ButtonIcon["default"]).find('RightArrow').exists()).toBe(true);
  });
  it('should fire onclick callback when ButtonIcon is clicked', function () {
    var onClickMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_expandCollapseButton["default"], {
      isExpanded: true,
      hasChildren: true,
      onClick: onClickMock
    }));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});