"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _resizeBar = _interopRequireDefault(require("../resizeBar"));

var resizeBarSelector = 'span.rainbow-table_header-resize-bar';
var eventMap = {};
document.addEventListener = jest.fn(function (event, callback) {
  eventMap[event] = callback;
});
var preventDefault = jest.fn();
describe('<ResizeBar />', function () {
  it('should set isResizable passed to isTrue in RenderIf component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true
    }));
    expect(component.find('RenderIf').prop('isTrue')).toBe(true);
  });
  it('should pass the right props to input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      ariaLabel: "resize bar aria label",
      minColumnWidth: 30,
      maxColumnWidth: 120
    }));
    expect(component.find('input').props()).toEqual(expect.objectContaining({
      type: 'range',
      min: 30,
      max: 120,
      'aria-label': 'resize bar aria label',
      tabIndex: -1
    }));
  });
  it('should handle onMouseDown event', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      headerWidth: 350
    }));
    var resizeBar = component.find(resizeBarSelector);
    resizeBar.simulate('mousedown', {
      clientX: 230
    });
    expect(component.instance().startXPosition).toBe(230);
  });
  it('should handle onMouseMove event', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      headerWidth: 200,
      minColumnWidth: 50,
      maxColumnWidth: 1000
    }));
    var resizeBar = component.find(resizeBarSelector);
    resizeBar.simulate('mousedown', {
      clientX: 120
    });
    eventMap.mousemove({
      clientX: 200,
      preventDefault: preventDefault
    });
    expect(component.instance().newXPosition).toBe(80);
  });
  it('should handle onMouseMove event and set newXposition to 800 if the new width is bigger than 1000', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      headerWidth: 200,
      minColumnWidth: 50,
      maxColumnWidth: 1000
    }));
    var resizeBar = component.find(resizeBarSelector);
    resizeBar.simulate('mousedown', {
      clientX: 100
    });
    eventMap.mousemove({
      clientX: 2000,
      preventDefault: preventDefault
    });
    expect(component.instance().newXPosition).toBe(800);
  });
  it('should handle onMouseMove event and set newXposition to -150 if the new width is smaller than 50', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      headerWidth: 200,
      minColumnWidth: 50,
      maxColumnWidth: 1000
    }));
    var resizeBar = component.find(resizeBarSelector);
    resizeBar.simulate('mousedown', {
      clientX: 100
    });
    eventMap.mousemove({
      clientX: -2000,
      preventDefault: preventDefault
    });
    expect(component.instance().newXPosition).toBe(-150);
  });
  it('should set the right state when handle onMouseMove event', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      headerWidth: 200,
      minColumnWidth: 50,
      maxColumnWidth: 1000
    }));
    var resizeBar = component.find(resizeBarSelector);
    expect(component.state()).toEqual({
      resizeBarStyle: {
        willChange: 'transform'
      }
    });
    resizeBar.simulate('mousedown', {
      clientX: 100
    });
    eventMap.mousemove({
      clientX: 150,
      preventDefault: preventDefault
    });
    expect(component.state()).toEqual({
      resizeBarStyle: {
        transform: 'translateX(50px)',
        willChange: 'transform'
      }
    });
  });
  it('should call onResize with the right data when handle onMouseUp event', function () {
    var onResizeMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      onResize: onResizeMock,
      headerWidth: 200,
      minColumnWidth: 50,
      maxColumnWidth: 1000
    }));
    var resizeBar = component.find(resizeBarSelector);
    resizeBar.simulate('mousedown', {
      clientX: 100
    });
    eventMap.mousemove({
      clientX: 150,
      preventDefault: preventDefault
    });
    eventMap.mouseup({
      preventDefault: preventDefault
    });
    expect(onResizeMock).toHaveBeenCalledWith(50);
  });
  it('should set the right state when handle onMouseUp event', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_resizeBar["default"], {
      isResizable: true,
      headerWidth: 200,
      minColumnWidth: 50,
      maxColumnWidth: 1000
    }));
    var resizeBar = component.find(resizeBarSelector);
    resizeBar.simulate('mousedown', {
      clientX: 100
    });
    eventMap.mousemove({
      clientX: 150,
      preventDefault: preventDefault
    });
    eventMap.mouseup({
      preventDefault: preventDefault
    });
    expect(component.state()).toEqual({
      resizeBarStyle: {
        willChange: 'transform'
      }
    });
  });
});