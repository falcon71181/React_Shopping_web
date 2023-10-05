"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _counterManager = _interopRequireDefault(require("../../../libs/counterManager"));

var _scrollController = require("../../../libs/scrollController");

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _ = _interopRequireDefault(require(".."));

var _content = _interopRequireDefault(require("../styled/content"));

var _closeButton = _interopRequireDefault(require("../styled/closeButton"));

jest.mock('../../../libs/counterManager', function () {
  return {
    increment: jest.fn(),
    decrement: jest.fn(),
    hasModalsOpen: jest.fn(function () {
      return false;
    })
  };
});
jest.mock('../../../libs/scrollController', function () {
  return {
    disableBodyScroll: jest.fn(),
    enableBodyScroll: jest.fn(),
    clearAllBodyScrollLocks: jest.fn()
  };
});
describe('<Modal/>', function () {
  beforeEach(function () {
    _scrollController.disableBodyScroll.mockReset();

    _scrollController.enableBodyScroll.mockReset();

    _scrollController.clearAllBodyScrollLocks.mockReset();
  });
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", {
      "data-id": "modal-children"
    }, "modal content")));
    expect(component.find('p[data-id="modal-children"]').text()).toBe('modal content');
  });
  it('should render the footer passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      footer: "modal footer"
    }, _react["default"].createElement("p", null)));
    expect(component.find('footer').text()).toBe('modal footer');
  });
  it('should set tabIndex as -1 in section element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('tabIndex')).toBe(-1);
  });
  it('should set the same generated id to section as aria-labelledby and to Header as id', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-labelledby')).toMatch(/modal-heading/);
    expect(component.find('Header').prop('id')).toMatch(/modal-heading/);
  });
  it('should set the same generated id to section as aria-describedby and to children container as id', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-describedby')).toMatch(/modal-content/);
    expect(component.find(_content["default"]).prop('id')).toMatch(/modal-content/);
  });
  it('should set aria-modal to true in section element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-modal')).toBe(true);
  });
  it('should set aria-hidden to false in section element when modal is open', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-hidden')).toBe(false);
  });
  it('should fire an event when the close button is clicked and the modal is open', function () {
    var closeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      onRequestClose: closeMockFn
    }, _react["default"].createElement("p", null)));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire an event when the modal backdrop is clicked and the modal is open', function () {
    var closeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      onRequestClose: closeMockFn
    }, _react["default"].createElement("p", null)));
    component.find('div[role="presentation"]').instance().dispatchEvent(new Event('click'));
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire an event when the ESC key is pressed and the modal is open', function () {
    var closeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      onRequestClose: closeMockFn
    }, _react["default"].createElement("p", null)));
    component.find('div[role="presentation"]').simulate('keyDown', {
      keyCode: 27
    });
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call disableBodyScroll when open the modal', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(_scrollController.disableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should call enableBodyScroll when component unmounts and there is not another modal open', function () {
    _counterManager["default"].hasModalsOpen.mockReturnValue(false);

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    component.unmount();
    expect(_scrollController.enableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should not call enableBodyScroll when component unmounts and there is another modal open', function () {
    _counterManager["default"].hasModalsOpen.mockReturnValue(true);

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    component.unmount();
    expect(_scrollController.enableBodyScroll).not.toHaveBeenCalled();
  });
  it('should call enableBodyScroll when close modal and there is not another modal open', function () {
    _counterManager["default"].hasModalsOpen.mockReturnValue(false);

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    component.setProps({
      isOpen: false
    });
    expect(_scrollController.enableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should not call enableBodyScroll when close modal and there is another modal open', function () {
    _counterManager["default"].hasModalsOpen.mockReturnValue(true);

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    component.setProps({
      isOpen: false
    });
    expect(_scrollController.enableBodyScroll).not.toHaveBeenCalled();
  });
  it('should call CounterManager.decrement when the component unmount and it is open', function () {
    _counterManager["default"].decrement.mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    component.unmount();
    expect(_counterManager["default"].decrement).toHaveBeenCalledTimes(1);
  });
  it('should not call CounterManager.decrement when the component unmount and it is not open', function () {
    _counterManager["default"].decrement.mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: false
    }, _react["default"].createElement("p", null)));
    component.unmount();
    expect(_counterManager["default"].decrement).not.toHaveBeenCalled();
  });
  it('should render the close button by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find(_closeButton["default"]).exists()).toBe(true);
  });
  it('should not render the close button when the hideCloseButton prop is equal to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      hideCloseButton: true
    }, _react["default"].createElement("p", null)));
    expect(component.find(_closeButton["default"]).exists()).toBe(false);
  });
});