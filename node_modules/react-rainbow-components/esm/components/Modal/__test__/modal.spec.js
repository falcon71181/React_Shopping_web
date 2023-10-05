import React from 'react';
import { mount } from 'enzyme';
import CounterManager from '../../../libs/counterManager';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from '../../../libs/scrollController';
import ButtonIcon from '../../ButtonIcon';
import Modal from '..';
import StyledContent from '../styled/content';
import StyledCloseButton from '../styled/closeButton';
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
    disableBodyScroll.mockReset();
    enableBodyScroll.mockReset();
    clearAllBodyScrollLocks.mockReset();
  });
  it('should render the children passed', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", {
      "data-id": "modal-children"
    }, "modal content")));
    expect(component.find('p[data-id="modal-children"]').text()).toBe('modal content');
  });
  it('should render the footer passed', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true,
      footer: "modal footer"
    }, React.createElement("p", null)));
    expect(component.find('footer').text()).toBe('modal footer');
  });
  it('should set tabIndex as -1 in section element', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('tabIndex')).toBe(-1);
  });
  it('should set the same generated id to section as aria-labelledby and to Header as id', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-labelledby')).toMatch(/modal-heading/);
    expect(component.find('Header').prop('id')).toMatch(/modal-heading/);
  });
  it('should set the same generated id to section as aria-describedby and to children container as id', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-describedby')).toMatch(/modal-content/);
    expect(component.find(StyledContent).prop('id')).toMatch(/modal-content/);
  });
  it('should set aria-modal to true in section element', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-modal')).toBe(true);
  });
  it('should set aria-hidden to false in section element when modal is open', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-hidden')).toBe(false);
  });
  it('should fire an event when the close button is clicked and the modal is open', function () {
    var closeMockFn = jest.fn();
    var component = mount(React.createElement(Modal, {
      isOpen: true,
      onRequestClose: closeMockFn
    }, React.createElement("p", null)));
    component.find(ButtonIcon).simulate('click');
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire an event when the modal backdrop is clicked and the modal is open', function () {
    var closeMockFn = jest.fn();
    var component = mount(React.createElement(Modal, {
      isOpen: true,
      onRequestClose: closeMockFn
    }, React.createElement("p", null)));
    component.find('div[role="presentation"]').instance().dispatchEvent(new Event('click'));
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire an event when the ESC key is pressed and the modal is open', function () {
    var closeMockFn = jest.fn();
    var component = mount(React.createElement(Modal, {
      isOpen: true,
      onRequestClose: closeMockFn
    }, React.createElement("p", null)));
    component.find('div[role="presentation"]').simulate('keyDown', {
      keyCode: 27
    });
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call disableBodyScroll when open the modal', function () {
    mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(disableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should call enableBodyScroll when component unmounts and there is not another modal open', function () {
    CounterManager.hasModalsOpen.mockReturnValue(false);
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    component.unmount();
    expect(enableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should not call enableBodyScroll when component unmounts and there is another modal open', function () {
    CounterManager.hasModalsOpen.mockReturnValue(true);
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    component.unmount();
    expect(enableBodyScroll).not.toHaveBeenCalled();
  });
  it('should call enableBodyScroll when close modal and there is not another modal open', function () {
    CounterManager.hasModalsOpen.mockReturnValue(false);
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    component.setProps({
      isOpen: false
    });
    expect(enableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should not call enableBodyScroll when close modal and there is another modal open', function () {
    CounterManager.hasModalsOpen.mockReturnValue(true);
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    component.setProps({
      isOpen: false
    });
    expect(enableBodyScroll).not.toHaveBeenCalled();
  });
  it('should call CounterManager.decrement when the component unmount and it is open', function () {
    CounterManager.decrement.mockReset();
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    component.unmount();
    expect(CounterManager.decrement).toHaveBeenCalledTimes(1);
  });
  it('should not call CounterManager.decrement when the component unmount and it is not open', function () {
    CounterManager.decrement.mockReset();
    var component = mount(React.createElement(Modal, {
      isOpen: false
    }, React.createElement("p", null)));
    component.unmount();
    expect(CounterManager.decrement).not.toHaveBeenCalled();
  });
  it('should render the close button by default', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find(StyledCloseButton).exists()).toBe(true);
  });
  it('should not render the close button when the hideCloseButton prop is equal to true', function () {
    var component = mount(React.createElement(Modal, {
      isOpen: true,
      hideCloseButton: true
    }, React.createElement("p", null)));
    expect(component.find(StyledCloseButton).exists()).toBe(false);
  });
});