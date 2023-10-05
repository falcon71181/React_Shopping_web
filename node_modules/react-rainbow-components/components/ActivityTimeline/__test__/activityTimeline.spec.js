"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _Card = _interopRequireDefault(require("../../Card"));

var _TimelineMarker = _interopRequireDefault(require("../../TimelineMarker"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

describe('<ActivityTimeline/>', function () {
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_Card["default"], {
      title: "ActivityTimeline--children"
    })));
    expect(component.find(_Card["default"]).exists()).toBe(true);
  });
  it('should fire onToggleSection with the right params when variant is accordion and multiple is false', function () {
    var onToggleSectionFN = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      variant: "accordion",
      onToggleSection: onToggleSectionFN
    }, _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker1"
    }), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker2"
    }), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker3"
    })));
    component.find(_ButtonIcon["default"]).at(0).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: 'marker1',
      toggledSection: 'marker1'
    });
    component.find(_ButtonIcon["default"]).at(2).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: 'marker3',
      toggledSection: 'marker3'
    });
  });
  it('should fire onToggleSection with the right params when variant is accordion and multiple is passed', function () {
    var onToggleSectionFN = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      variant: "accordion",
      multiple: true,
      onToggleSection: onToggleSectionFN
    }, _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker1"
    }), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker2"
    }), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker3"
    })));
    component.find(_ButtonIcon["default"]).at(0).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: ['marker1'],
      toggledSection: 'marker1'
    });
    component.find(_ButtonIcon["default"]).at(2).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: ['marker1', 'marker3'],
      toggledSection: 'marker3'
    });
    component.find(_ButtonIcon["default"]).at(2).simulate('click');
    expect(onToggleSectionFN).toHaveBeenCalledWith({
      activeSectionNames: ['marker1'],
      toggledSection: 'marker3'
    });
  });
  it('should expand the right marker when variant is accordion and its name is passed in activeSectionNames prop', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      variant: "accordion",
      activeSectionNames: "marker2"
    }, _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker1"
    }), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker2"
    }, _react["default"].createElement(_Card["default"], {
      title: "card"
    })), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker3"
    })));
    expect(component.find(_Card["default"]).exists()).toBe(true);
  });
  it('should expand the right markers when variant is accordion, multiple is true and names are passed in activeSectionNames prop', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      variant: "accordion",
      multiple: true,
      activeSectionNames: ['marker2', 'marker3']
    }, _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker1"
    }, _react["default"].createElement(_Card["default"], {
      title: "card"
    })), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker2"
    }, _react["default"].createElement(_Card["default"], {
      title: "card"
    })), _react["default"].createElement(_TimelineMarker["default"], {
      name: "marker3"
    }, _react["default"].createElement(_Card["default"], {
      title: "card"
    }))));

    var cardExistsAtIndex = function cardExistsAtIndex(index) {
      return component.find(_TimelineMarker["default"]).at(index).find(_Card["default"]).exists();
    };

    expect(cardExistsAtIndex(0)).toBe(false);
    expect(cardExistsAtIndex(1)).toBe(true);
    expect(cardExistsAtIndex(2)).toBe(true);
  });
});