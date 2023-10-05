"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ActivityTimeline = _interopRequireDefault(require("../../ActivityTimeline"));

var _accordionMarker = _interopRequireDefault(require("../accordionMarker"));

var _Avatar = _interopRequireDefault(require("../../Avatar"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _Card = _interopRequireDefault(require("../../Card"));

var _Spinner = _interopRequireDefault(require("../../Spinner"));

var _expandCollapseButton = _interopRequireDefault(require("../expandCollapseButton"));

var _label = _interopRequireDefault(require("../styled/label"));

var _datetime = _interopRequireDefault(require("../styled/datetime"));

var _description = _interopRequireDefault(require("../styled/description"));

describe('<AccordionTimelineMarker/>', function () {
  it('should not render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], null, _react["default"].createElement(_Card["default"], {
      title: "TimelineMarker--children"
    }))));
    expect(component.find(_Card["default"]).exists()).toBe(false);
  });
  it('should not render the children passed when expanded', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], null, _react["default"].createElement(_Card["default"], {
      title: "TimelineMarker--children"
    }))));
    component.find(_ButtonIcon["default"]).at(0).simulate('click');
    expect(component.find(_Card["default"]).exists()).toBe(true);
  });
  it('should render the icon passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], {
      icon: _react["default"].createElement(_Avatar["default"], null)
    })));
    expect(component.find(_Avatar["default"]).exists()).toBe(true);
  });
  it('should render the calendar icon by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], null)));
    expect(component.find('CalendarIcon').exists()).toBe(true);
  });
  it('should render the label passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], {
      label: "testing label on TimelineMarker"
    })));
    expect(component.find(_label["default"]).text()).toBe('testing label on TimelineMarker');
  });
  it('should render the datetime passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], {
      datetime: "Yesterday"
    })));
    expect(component.find(_datetime["default"]).text()).toBe('Yesterday');
  });
  it('should render the description passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], {
      description: "testing description on TimelineMarker"
    }), ","));
    expect(component.find(_description["default"]).text()).toBe('testing description on TimelineMarker');
  });
  it('should render an expand button when containing ActivityTimeline variant is accordion', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], null)));
    expect(component.find(_expandCollapseButton["default"]).exists()).toBe(true);
  });
  it('should render a loading spinner when containing ActivityTimeline variant is accordion and isLoading prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ActivityTimeline["default"], {
      variant: "accordion"
    }, _react["default"].createElement(_accordionMarker["default"], {
      isLoading: true
    })));
    expect(component.find(_Spinner["default"]).exists()).toBe(true);
  });
});