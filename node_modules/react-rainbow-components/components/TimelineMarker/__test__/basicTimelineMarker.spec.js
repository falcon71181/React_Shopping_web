"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _basicMarker = _interopRequireDefault(require("../basicMarker"));

var _Card = _interopRequireDefault(require("../../Card"));

var _Avatar = _interopRequireDefault(require("../../Avatar"));

var _label = _interopRequireDefault(require("../styled/label"));

var _datetime = _interopRequireDefault(require("../styled/datetime"));

var _description = _interopRequireDefault(require("../styled/description"));

describe('<BasicTimelineMarker/>', function () {
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_basicMarker["default"], null, _react["default"].createElement(_Card["default"], {
      title: "TimelineMarker--children"
    })));
    expect(component.find(_Card["default"]).exists()).toBe(true);
  });
  it('should render the icon passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_basicMarker["default"], {
      icon: _react["default"].createElement(_Avatar["default"], null)
    }));
    expect(component.find(_Avatar["default"]).exists()).toBe(true);
  });
  it('should render the calendar icon by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_basicMarker["default"], null));
    expect(component.find('CalendarIcon').exists()).toBe(true);
  });
  it('should render the label passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_basicMarker["default"], {
      label: "testing label on TimelineMarker"
    }));
    expect(component.find(_label["default"]).text()).toBe('testing label on TimelineMarker');
  });
  it('should render the datetime passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_basicMarker["default"], {
      datetime: "Yesterday"
    }));
    expect(component.find(_datetime["default"]).text()).toBe('Yesterday');
  });
  it('should render the description passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_basicMarker["default"], {
      description: "testing description on TimelineMarker"
    }));
    expect(component.find(_description["default"]).text()).toBe('testing description on TimelineMarker');
  });
});